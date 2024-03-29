import styles from './ShuffleCard.module.css'
import MatchSingleUI from './matchSingleUI'

import {React, useState, useEffect} from 'react'

let gotMatch = false;
function ShuffleCard({findMatchButtonCallback, setMatchCallback , userId, userMatches})
{
    let matches = (userMatches == undefined) ? [] : userMatches;
    const fetchURL = "https://amintine-backend.onrender.com/findAMatch/" + userId

    
    if(!gotMatch)
    {
        fetchMatch()
        console.log(fetchURL)
    }
    // if(errorState == null)
    // {
    //     setMainButton(<button className={styles.findMatchButton} 
    //         onClick={
    //             () =>{
    //                 findMatchButtonCallback()
    //             }
    //         }>
    //             Find a Match
    //         </button>);
    // }
    // else{
    //     console.log("TUN")
    //     setMainButton();
    // }

    async function fetchMatch()
    {
        gotMatch= true
        let matchData = {
            found: false
        }

        try{
            let fetchResponse = await fetch(fetchURL)
            let jsonResponse = await fetchResponse.json()
    
    
            switch (jsonResponse.error) {
                case null:
                    matchData = {
                        name: jsonResponse.match.username,
                        hostelNumber: jsonResponse.match.hostelNumber,
                        instaId: jsonResponse.match.instaId,
                        bio: jsonResponse.match.bio,
                        found: true
                    }
                    //Send this data to app.jsx
                    setMatchCallback(matchData)
                    break;
                case "timeIssue":
                    matchData = {
                        found: false,
                        error: "You are making too many requests. You can only make requests every 3 hours"
                    }
                    //Send this data to app.jsx
                    setMatchCallback(matchData)
                    break;
                case "userNumberIssue":
                    matchData = {
                        found: false,
                        error: "Not enough users have registered on this wonderful app for us to find you a date. Spread the word and try again later"
                    }
                    //Send this data to app.jsx
                    setMatchCallback(matchData)
                    break;    
                default:
                    //Error is found
                    matchData = {
                        found: false,
                        error: "Something went Wrong"
                    }
                    setMatchCallback(matchData)
                    break;
            }
    
        }
        catch(e)
        {
            console.log(e)
            setMatchCallback(matchData)
        }
    }
    return(
        <div className={styles.container}>

            <div className={styles.infoDiv}>
                <p className={styles.infoHead}>Press the button to find a match</p>
                <p className={styles.info}>I hope you are not catfishing. Press the button below to find yourself a random date. 
                <br/>You can only find a match every 3 hours.
                <br/>The app might not work if enough people havent registered yet.
                 </p>

            </div>

            {/* <div className={(errorState == null) ? styles.errorDiv_Inactive : styles.errorDiv}>
                <p className={styles.errorMessage}>
                    {(errorState == null) ? "No Error" : errorState}
                </p>
            </div> */}

            <button className={styles.findMatchButton} 
            onClick={() =>{
                findMatchButtonCallback()
            }}>
                Find a Match
            </button>
            
            <p className={(matches.length == 0) ? styles.yourMatchesInactive : styles.yourMatchesActive}>People who matched with you</p>
            {
                matches.map((element) =>{
                    return <MatchSingleUI name={element.matchName} hostel={GiveHostelNumber(parseInt(element.matchHostel))}></MatchSingleUI>
                })
            }
            {/* <div className={styles.matchSection}>

                <p className={styles.matchHeading}>My Matches</p>

                <MatchSingleUI name="Arnav Thapliyal" insta="@arnavthapliyal50" hostel="Hostel 7"/>
                
            </div> */}
        </div>
    )
}

function GiveHostelNumber(hostelNumber)
{
    let outputString = `Hostel ${hostelNumber}`

    if(hostelNumber == 15)
    {
        outputString = "Hostel H5 Boys"
    }
    else if(hostelNumber == 8)
    {
        outputString = "Day Scholar Male"
    }
    else if(hostelNumber == 9)
    {
        outputString = "Day Scholar Female"
    }
    
    return outputString
}
export default ShuffleCard
