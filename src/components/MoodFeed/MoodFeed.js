
import style from "./MoodFeed.module.css"

export function MoodFeed(props){

        return(
            <div className={`boxMoodFeed ${style.container}`} style={{backgroundColor:`${props.color}`}}>
                <div className="imgHumorMoodFeed">
                    <img src={props.bemzinha} className="benzinhaOfThisDay" alt="humorOfThisDay"></img>
                </div>
    
                <div className="textsMoodFeed">
                    <div className="dateMoodFeed">
                        <h6 className="dateTxtMoodFeed">Dia: {props.createdAt.slice(0,10)} / Horário: {props.createdAt.slice(11,16)}</h6>
                    </div>
                    <div className="nameHumorMoodFeed">
                        <h4 className="nameTxtHumorMoodFeed">{props.mood}</h4>
                    </div>
                    <div className="msgHumorMoodFeed">
                        <h5 className="msgTxtHumorMoodFeed">{props.text}</h5>
                    </div>
                </div>
    
            </div>
           
        )
    

    
}