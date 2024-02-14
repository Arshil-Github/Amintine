import styles from './ShuffleCard.module.css'
import MatchSingleUI from './matchSingleUI'

import {React, useState, useEffect} from 'react'

let gotMatch = false;
function ShuffleCard({findMatchButtonCallback, setMatchCallback , userId})
{
    
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
            fetch(fetchURL).then((fetchResponse) =>{
                fetchResponse.json((jsonResponse) =>{
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
                            console.log("Here")
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
                })
            })
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
            

            {/* <div className={styles.matchSection}>

                <p className={styles.matchHeading}>My Matches</p>

                <MatchSingleUI name="Arnav Thapliyal" insta="@arnavthapliyal50" hostel="Hostel 7"/>
                
            </div> */}
        </div>
    )
}

export default ShuffleCard
