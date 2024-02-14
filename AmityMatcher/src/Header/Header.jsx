import style from './HeaderStyle.module.css'
import logo from  '../assets/amintineLogo.png'

function Header()
{
    return (
        <div className={style.container}>
            <img src={logo} alt="Logo" className={style.logoImage} />
            <div className={style.head}>AMINTINE</div>
        </div>
    );
}

export default Header