import style from "./MoodToday.module.css"

export function MoodToday(){




    return (
    <div className="moodToday">
        <h3 className="titleMoodToday" style={{marginTop:"0"}}>Como está seu humor hoje?</h3>
        <div className="chooseMood mt-6 text-center" style={{marginTop:"0"}}>
          <div>
            <img src="https://svgshare.com/i/n9W.svg" className={`benzinha1 ${style.icon}`} alt="triste"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>triste</span></center>
          </div>
          <div>
            <img src="https://svgshare.com/i/n9i.svg" className={`benzinha2 ${style.icon}`} alt="apática"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>apático</span></center>
          </div>
          <div>
            <img src="https://svgshare.com/i/n86.svg" className={`benzinha3 ${style.icon}`} alt="de bem"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>de bem</span></center>
          </div>
          <div>
            <img src="https://svgshare.com/i/n7M.svg" className={`benzinha4 ${style.icon}`} alt="ansiosa"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>ansioso</span></center>
          </div>
          <div>
            <img src="https://svgshare.com/i/n8e.svg" className={`benzinha5 ${style.icon}`} alt="cara de raiva"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>com raiva</span></center>
          </div>
          
        </div>
    </div>
    )
}