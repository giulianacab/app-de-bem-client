import {Link, useNavigate} from "react-router-dom"
import style from "./CommunityCard.module.css"

export default function CommunityCard(props){
    const navigate = useNavigate();

    

    return (
        <center>
        <Link to={`/communities/${props.path}`} >
        <div className={`boxMoodFeed ${style.container} items-center w-27 h-30`} style={{backgroundColor:"#FF94AE", width:"70%", height:"5rem"}}>
                
            <div className="imgHumorMoodFeed" >
                <img src={props.img} className={`benzinhaOfThisDay ${style.img}`} alt="humorOfThisDay"></img>
            </div>

            <div className="textsMoodFeed">
                
                <div className="nameHumorMoodFeed">
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>{props.title}</h4>
                </div>
                
            </div>
    
        </div>
        </Link>
        </center>
    )
}