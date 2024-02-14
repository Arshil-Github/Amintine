import style from './FooterStyle.module.css'

function Footer(props)
{
    return(
        <div className={style.container}>
               
        <button className={style.submitButton}>{props.buttonText}</button>
        </div>
    )
}
export default Footer 