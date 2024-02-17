import styles from './HomeStyle.module.css'


function Home({EnterMatchmakerCallback})
{
    return(
        <div>
            <div className={styles.infoDiv}>
                <p className={styles.infoHead}>Welcome to Amintine</p>
                <p className={styles.info}>
                    Amintine, Amity + Valentine, is a student-built platform, that allows students to discover new connections! Join our growing community and find someone exciting to chat with - all randomly matched and waiting to meet you. 
                    <br />
                    After registering yourself you can find a random match amongst all the other registered users.
                    <br />
                    Share Amintine with your friends and classmates to expand our network and create even more possibilities!
                    <br />
                    Note: This app doesnt support homosexuality.
                    <br />
                    PS: This app was made by a group of 3rd year amitians. We made this fullstack app in barely 3 days. Some parts might be buggy so please ignore them. Also we will keep our identity hidden for now
                </p>

            </div>
            <button className={styles.EnterButton} onClick ={
                () =>{
                    EnterMatchmakerCallback();
                }
            }>
                Enter the MatchMaker
            </button>

            <p className={styles.appCloseNote}>This website will be taken down on 21st February 2024. Thank you so much for using this app! I will be back next year with something better. Write a message to me using the feedback form on the last page</p>
        </div>
    )
}

export default Home