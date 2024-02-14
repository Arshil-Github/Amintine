import './App.css'
import LoginCard from './LoginCard/LoginCard'
import ShuffleCard from './ShuffleCards/ShuffleCard'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import FoundAMatch from './FoundaMatch/FoundaMatch'
import { useEffect, useState} from 'react'

let matchData = {}
function App() {

  const [loginData, setLoginData] = useState({
    hostelNumber: 5,
    _id: "65c9fc5dd591d7152e541c9b"
  })
  const [appState, setAppState] = useState("homeState")
  //Add a home page
  const [bodyContent, setBodyContent] = useState()
  
  async function ChangeLoginData(inputData){
    if(inputData.isValid)
    {
      //Send this data to the database and 
      //Once we have got loginData switchState

      let userData = {
        username: inputData.name,
        hostelNumber: inputData.hostel,
        roomNumber: inputData.room,
        instaId: inputData.insta,
        bio: inputData.bio,
      }

      let fetchResponse = await fetch('https://amintine-backend.onrender.com/signUp', {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://amintine.vercel.app',
          'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify(userData)
      })
      .then((fetchResponse) => {

        fetchResponse.json().then((jsonResponse) =>{
          console.log(jsonResponse)
          setLoginData(jsonResponse.user)
          setAppState("shuffleState")
        })
      
      })
    }
  }


  // let bodyContent = <LoginCard setLoginDataCallback={(data) =>{
  //   setLoginData(data)
  // }}/>
  
  //Change the body content based on the appState
  useEffect(() =>{

    if(appState == "homeState")
    {
      setBodyContent(<Home EnterMatchmakerCallback={
        () =>{
          setAppState("loginState");
        }
      }/>)
    }
    else if(appState == "loginState")
    {
      setBodyContent(<LoginCard setLoginDataCallback={(data) =>{
        ChangeLoginData(data)
      }}/>)
    }
    else if(appState == "shuffleState"){
      setBodyContent(<ShuffleCard 
        userId={loginData._id}
      findMatchButtonCallback={()=>{
        setAppState("matchState")
      }} 
      setMatchCallback={
        (data)=>{
          matchData = data
          console.log(matchData)
        }
      }/>)
    }
    else if(appState == "matchState")
    {
      setBodyContent(<FoundAMatch userData={loginData} matchData={matchData}/>)
    }

  }, [appState])

  return (
    <div className="container">
      <Header />
      <div className="bodyContent">
        {bodyContent}
      </div>
      <p className="creditText">AMINTINE by cupid</p>
    </div>
  )
}

export default App
