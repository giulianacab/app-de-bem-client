import { Link } from "react-router-dom"
import style from "./Header.module.css"


export function Header(props){
    return (
        <>
        <div className={`headerPages ${style.container}`}>
          <div className="divHeaderPages">
        <div className={style.info} >
            <Link to ="/profile" style={{marginRight:"1rem"}}>
            <img src="https://images2.imgbox.com/54/1f/hdwOJPTU_o.png" className={`${style.settingsBtn} avatar`} alt ="default avatar" />
            </Link>
            <div className="textHeaderPages">
                <h3 className="titleHeaderPages">
                    {props.where}
                </h3>
                <h1 className="nameHeaderPages">
                    {props.name}
                </h1>
        </div>
            </div>
            <Link to ="/settings" style={{marginLeft:"2rem"}}>
            <img src="https://svgshare.com/i/nAs.svg" className={`${style.settingsBtn} configIcon`} alt="config icon" />
            </Link>
          </div>
        </div>
        </>
    )
}