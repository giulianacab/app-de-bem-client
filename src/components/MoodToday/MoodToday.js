import style from "./MoodToday.module.css"
import { api } from "../../api/api"
import { toast } from "react-hot-toast"

export function MoodToday(){


    async function handleMood(mood,color,bemzinha) {
        try{
           
            await api.post("/moods", {mood: mood, color: color, bemzinha: bemzinha})
            toast.success('Mood escolhido com sucesso!')
        } catch(err) {
            console.log(err)
            toast.error("Apenas um Mood por dia")
        }
    }
    
    return (
    <div className="moodToday">
        <h3 className="titleMoodToday" style={{marginTop:"0", color:"#FF6648"}}>Como está seu humor hoje?</h3>
        <div className="chooseMood mt-6 text-center" style={{marginTop:"0"}}>
          <button onClick={()=>{handleMood("triste","#A706CE","https://svgshare.com/i/nEZ.svg")}}>
            <img src="https://svgshare.com/i/n9W.svg" className={`benzinha1 ${style.icon}`} alt="triste"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>triste</span></center>
          </button>
          <button onClick={()=>{handleMood("apatico","pink","https://svgshare.com/i/nB0.svg")}}>
            <img src="https://svgshare.com/i/n9i.svg" className={`benzinha2 ${style.icon}`} alt="apática"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>apático</span></center>
          </button>
          <button onClick={()=>{handleMood("de bem","#23E2AF","https://svgshare.com/i/nDJ.svg")}}>
            <img src="https://svgshare.com/i/n86.svg" className={`benzinha3 ${style.icon}`} alt="de bem"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>de bem</span></center>
          </button>
          <button onClick={()=>{handleMood("ansioso","#FF94AE","https://svgshare.com/i/nD6.svg")}}>
            <img src="https://svgshare.com/i/n7M.svg" className={`benzinha4 ${style.icon}`} alt="ansiosa"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>ansioso</span></center>
          </button>
          <button onClick={()=>{handleMood("com raiva","#FF6648","https://svgshare.com/i/nDg.svg")}}>
            <img src="https://svgshare.com/i/n8e.svg" className={`benzinha5 ${style.icon}`} alt="cara de raiva"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>com raiva</span></center>
          </button>
          
        </div>
    </div>
    )
}