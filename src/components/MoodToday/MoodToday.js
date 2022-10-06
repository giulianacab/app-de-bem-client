export function MoodToday(){




    return (
    <div className="moodToday">
        <h3 className="titleMoodToday mt-6 text-center text-2xl tracking-tight text-gray-900">Como está seu humor hoje?</h3>
        <div className="chooseMood mt-6 text-center tracking-tight text-gray-900">
          <div>
            <img src="https://svgshare.com/i/n9W.svg" className="benzinha1" alt="triste"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>triste</span></center>
          </div>
          <div>
            <img src="https://svgshare.com/i/n9i.svg" className="benzinha2" alt="apática"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>apático</span></center>
          </div>
          <div>
            <img src="https://svgshare.com/i/n86.svg" className="benzinha3" alt="de bem"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>de bem</span></center>
          </div>
          <div>
            <img src="https://svgshare.com/i/n7M.svg" className="benzinha4" alt="ansiosa"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>ansioso</span></center>
          </div>
          <div>
            <img src="https://svgshare.com/i/n8e.svg" className="benzinha5" alt="cara de raiva"></img>
            <center><span style={{fontSize: "0.7rem", color:"rgb(188, 183, 183)"}}>com raiva</span></center>
          </div>
          
        </div>
    </div>
    )
}