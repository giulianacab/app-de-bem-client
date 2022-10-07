import style from "./MyProgress.module.css"

export function MyProgress(props){

    if(Number(props.dias) !== 0){
        return(
            <center>
            <div className={style.progress}>
                <img src="https://res.cloudinary.com/dyewwodsm/image/upload/v1665148113/pictures/file_p7kzve.png"  alt="de bem" className={style.pic}/>
                <div className={style.text} style={{marginLeft:"3rem"}}>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>você está há:</h4>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>{props.dias} dias de bem... </h4>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>parabéns!</h4>
                </div>
            </div>
            </center>
        )
    } else {
        return(
            <center>
            <div className={style.progress}>
                <img src="https://res.cloudinary.com/dyewwodsm/image/upload/v1665148166/pictures/file_o2m83r.png" alt="bem tbm" className={style.pic}/>
                <div className={style.text}>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>você está há:</h4>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>{props.dias} dias de bem... </h4>
                    <h4 className="nameTxtHumorMoodFeed" style={{color:"white"}}>e tá tudo bem também!</h4>
                </div>
            </div>
            </center>
        )
    }
    
    
}