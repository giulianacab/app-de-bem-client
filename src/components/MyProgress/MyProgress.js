import style from "./MyProgress.module.css"

export function MyProgress(props){

    if(Number(props.dias) !== 0){
        return(
            <center>
            <div className={style.progress}>
                <img src="https://res.cloudinary.com/dyewwodsm/image/upload/v1665156785/pictures/file_xxxshn.png"  alt="de bem" className={style.pic}/>
                <div className={style.text} style={{marginLeft:"1rem"}}>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>você está há:</h4>
                    <div className={style.dias}>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"#FFD110"}}>{props.dias} dias&nbsp;</h4>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>de bem... </h4>
                    </div>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>parabéns!</h4>
                </div>
            </div>
            </center>
        )
    } else {
        return(
            <center>
            <div className={style.progress}>
                <img src="https://res.cloudinary.com/dyewwodsm/image/upload/v1665156858/pictures/file_mpa6qf.png" alt="bem tbm" className={style.pic}/>
                <div className={style.text}>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>você está há:</h4>
                    <div className={style.dias}>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"#FFD110"}}>{props.dias} dias&nbsp;</h4>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>de bem... </h4>
                    </div>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>e tá tudo bem também!</h4>
                </div>
            </div>
            </center>
        )
    }
    
    
}