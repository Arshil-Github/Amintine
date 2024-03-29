import './App.css'
import LoginCard from './LoginCard/LoginCard'
import ShuffleCard from './ShuffleCards/ShuffleCard'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Closed from './Closed/Closed'
import FoundAMatch from './FoundaMatch/FoundaMatch'
import { useEffect, useState} from 'react'

let matchData = {}
function App() {

  const [loginData, setLoginData] = useState({
    hostelNumber: 5,
    _id: "65ccec8d10ede58c05e39ec7"
  })
  const [appState, setAppState] = useState("closedState")
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
          'Access-Control-Allow-Origin': 'https://localhost:3000',
          'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify(userData)
      })
      .then((fetchResponse) => {

        fetchResponse.json().then((jsonResponse) =>{
          console.log(jsonResponse)
          //this jsonresponse will contain matches
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
      }
      userMatches={loginData.matches}
      />)
    }
    else if(appState == "matchState")
    {
      setBodyContent(<FoundAMatch userData={loginData} matchData={matchData}/>)
    }
    else if(appState == "closedState")
    {
      setBodyContent(<Closed/>)
    }

  }, [appState])

  return (
    <div className="container">
      <Header />
      <div className="bodyContent">
        {bodyContent}
      </div>
      <p className="creditText">AMINTINE</p>
    </div>
  )
}

export default App
