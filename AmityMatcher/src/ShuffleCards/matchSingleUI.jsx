import styles from "./MatchSingleUI.module.css"

function MatchSingleUI(props)
{
    return <div className={styles.container}>
       <p className={styles.titleHead}>
        {props.name}
       </p>


        <div className={styles.hostelInsta}>
            <p className={styles.instaId}>
            {props.insta}
        </p>

        <p className={styles.hostel}>
            {props.hostel}
        </p>
        </div>
       
    </div>
}

export default MatchSingleUI