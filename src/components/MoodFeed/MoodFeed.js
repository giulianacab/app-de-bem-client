


export function MoodFeed(props){

        return(
            <div className="boxMoodFeed">
                <div className="imgHumorMoodFeed">
                    <img src={props.bemzinha} className="benzinhaOfThisDay" alt="humorOfThisDay"></img>
                </div>
    
                <div className="textsMoodFeed">
                    <div className="dateMoodFeed">
                        <h6 className="dateTxtMoodFeed">{props.createdAt}</h6>
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