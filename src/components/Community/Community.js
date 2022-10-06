import {Link, useNavigate} from "react-router-dom"
import style from "./Community.module.css"

export default function Community(props){
    const navigate = useNavigate();

    

    return (
        <div className={`communities ${style.container}`} style={{backgroundColor:"#FFD110"}}>
                <div className="imgHumorMoodFeed">
                    <img src={props.img} className="benzinhaOfThisDay" alt="humorOfThisDay"></img>
                </div>
                <div className="textsMoodFeed">
                    
                    <div className="nameHumorMoodFeed">
                        <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>{props.title}</h4>
                    </div>
                    
                </div>
    
            </div>
    )
}