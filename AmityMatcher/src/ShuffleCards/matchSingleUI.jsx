import styles from "./MatchSingleUI.module.css"

function MatchSingleUI(props)
{
    return <div className={styles.container}>
       <p className={styles.titleHead}>
        {props.name}
       </p>


        
       <p className={styles.hostel}>
            {props.hostel}
        </p>
       
    </div>
}

export default MatchSingleUI