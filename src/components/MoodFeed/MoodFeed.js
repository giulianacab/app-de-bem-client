import { toast } from "react-hot-toast";
import { api } from "../../api/api";
import style from "./MoodFeed.module.css"

export function MoodFeed(props){

        

        async function handleDelete(){
            try{
                await api.delete(`/moods/${props.id}/delete`);
                props.reload(true);
                toast.success('Mood deletado com sucesso!');
            } catch(err){
                console.log(err);
            }
        }

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
                        <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>{props.mood}</h4>
                    </div>
                    <div className="msgHumorMoodFeed">
                        <h5 className="msgTxtHumorMoodFeed">{props.text}</h5>
                    </div>
                </div>
                <button onClick={handleDelete} className={style.hover}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="trashIcon" style={{marginTop:"1rem"}}>
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg>
                </button>
    
            </div>
           
        )
    

    
}