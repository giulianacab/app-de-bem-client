import style from "./MoodToday.module.css"
import { api } from "../../api/api"
import { toast } from "react-hot-toast"

export function MoodToday(props){


    async function handleMood(mood,color,bemzinha) {
        try{
           
            await api.post("/moods", {mood: mood, color: color, bemzinha: bemzinha})
            toast.success('Mood escolhido com sucesso!');
            props.reload(true);
        } catch(err) {
            console.log(err)
            toast.error("Apenas um Mood por dia")
        }
    }
    
    return (
    <div className="moodToday">
        <h3 className="titleMoodToday">Como está seu humor hoje?</h3>
        <div className="chooseMood mt-6 text-center" style={{marginTop:"0"}}>
          <button onClick={()=>{handleMood("triste","#A706CE","https://res.cloudinary.com/dmk9xlm2w/image/upload/v1666364491/6_bqxhh8.png")}}>
            <img src="https://res.cloudinary.com/dmk9xlm2w/image/upload/v1666364491/6_bqxhh8.png" className={`benzinha1 ${style.icon}`} alt="triste"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>triste</span></center>
          </button>
          <button onClick={()=>{handleMood("apatico","#FF94AE","https://res.cloudinary.com/dmk9xlm2w/image/upload/v1666364508/5_dssqyt.png")}}>
            <img src="https://res.cloudinary.com/dmk9xlm2w/image/upload/v1666364508/5_dssqyt.png" className={`benzinha2 ${style.icon}`} alt="apática"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>apático</span></center>
          </button>
          <button onClick={()=>{handleMood("de bem","#23E2AF","https://res.cloudinary.com/dmk9xlm2w/image/upload/v1666364495/4_scogen.png")}}>
            <img src="https://res.cloudinary.com/dmk9xlm2w/image/upload/v1666364495/4_scogen.png" className={`benzinha3 ${style.icon}`} alt="de bem"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>de bem</span></center>
          </button>
          <button onClick={()=>{handleMood("ansioso","#FFD110","https://res.cloudinary.com/dmk9xlm2w/image/upload/v1666364504/3_xew9yh.png")}}>
            <img src="https://res.cloudinary.com/dmk9xlm2w/image/upload/v1666364504/3_xew9yh.png" className={`benzinha4 ${style.icon}`} alt="ansiosa"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>ansioso</span></center>
          </button>
          <button onClick={()=>{handleMood("com raiva","#FF6648","https://res.cloudinary.com/dmk9xlm2w/image/upload/v1666364486/1_vdpgfh.png")}}>
            <img src="https://res.cloudinary.com/dmk9xlm2w/image/upload/v1666364486/1_vdpgfh.png" className={`benzinha5 ${style.icon}`} alt="cara de raiva"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>com raiva</span></center>
          </button>
          
        </div>
    </div>
    )
}