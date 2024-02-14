import styles from './FoundAMatchStyle.module.css'
import {useState, useEffect, useReducer} from 'react'

let rendered = false;
function FoundAMatch(props)
{
    //Props will have a hostel number from which I will do a fetchCall to find a Match
    //setMatchInfo(props.matchData)
    
    const [mainDiv, setMainDiv] = useState(null); // Initialize mainDiv to a placeholder

    useEffect(() => {
        // Access props.matchData directly within useEffect
        if (props.matchData.error == null) {
            setMainDiv(
                <div>
                <div>
                        <p className ={styles.headText}>Congratulations</p>
            
                        <p className ={styles.description}>We have found you a match. The search was totally random and it is fate that matched you too. You might wanna connect with this gentleman/lovely lady on instagram. Send them a screenshot of this page
                        <br />
                        Thanks for using Amintine!</p>
            
                        <p className ={styles.matchName}>{props.matchData.name}</p>
                        <p className = {styles.matchHostel}>Hostel {props.matchData.hostelNumber}</p>
            
                        <p className={styles.connectText}>Connect with them on Instagram at </p>
                        <p className ={styles.instaId}>
                            {props.matchData.instaId}
                        </p>
                    </div>
                </div>
            );
        } else {
            setMainDiv(
                <div>
                    <p className ={styles.headText}>Error</p>

                    <p className ={styles.description}>
                    
                        <br />
                        {props.matchData.error}
                        <br />
                        Better luck next time!</p>

                </div>
            );
        }
    }, [props.matchData]); // Only re-run effect if props.matchData changes


    //Returns a name, hostel room, insta ID
    return(
        <div className = {styles.container}>

            {mainDiv}
            
        </div>
    )
}

export default FoundAMatch