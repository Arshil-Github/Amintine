import styles from './ClosedStyle.module.css'


function Home({EnterMatchmakerCallback})
{
    let fetchURL = "https://amintine-backend.onrender.com/nameFeedBack"
    return(
        <div>
            <div className={styles.infoDiv}>
                <p className={styles.infoHead}>Closed</p>
                <p className={styles.info}>
                   Thanks for using this website, if you did. I am closing this website earlier that expected. I will be back with version 2 next year around the same time.
                   <br />
                   Bbye
                   <br></br>
                   
                </p>

            </div>
            {/* <div className={styles.feedback}>

                <p className={styles.feedbackTitle}>Feedback</p>

                <input type="text" placeholder='Your name' className={styles.feedbackArea} id="feedbackName"/>

                <textarea name="feedback" className={styles.feedbackArea} id="textAreaFd" cols="30" rows="5" placeholder='Message'></textarea>

                <button className={styles.feedbackButton} onClick={
                    () => {
                        let feedbackName = document.getElementById("feedbackName").value
                        let feedbackMessage = document.getElementById("textAreaFd").value
                        

                        if(feedbackMessage != "")
                        {
                            let fetchBody = {
                                name: feedbackName,
                                feedback: feedbackMessage
                            }
                            fetch(fetchURL, {
                                method: "POST",
                                headers: { 
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': 'https://localhost:3000',
                                'Access-Control-Allow-Credentials': 'true'
                                },
                                body: JSON.stringify(fetchBody)
                            })
                            .then(() =>{
                                alert("FeedbackSubmitted")
                            })
                        }
                    }
                } >
                    Submit Feedback
                </button>
            </div>
            <p className={styles.appCloseNote}>Do let me know your experience and if you would want something like this to exist.</p> */}

        </div>
    )
}

export default Home