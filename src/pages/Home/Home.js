// import { PaytoneOne-Regular } from "../../Fonts/PaytoneOne-Regular.ttf";
import Menu from "../../components/Menu";
import Header from "../../components/Header";


export function Home() {
  return (
    <>

    {/* HEADER */}
    {/* <Header /> */}
      <Header />

      {/* SELECT MOOD */}
      <div className="moodToday">
          <h3 className="titleMoodToday">Como você está hoje?</h3>
          <div className="chooseMood">
            <img src="https://svgshare.com/i/n9W.svg" className="benzinha1" alt="triste"></img>
            <img src="https://svgshare.com/i/n9i.svg" className="benzinha2" alt="apática"></img>
            <img src="https://svgshare.com/i/n86.svg" className="benzinha3" alt="de bem"></img>
            <img src="https://svgshare.com/i/n7M.svg" className="benzinha4" alt="ansiosa"></img>
            <img src="https://svgshare.com/i/n8e.svg" className="benzinha5" alt="cara de raiva
            "></img>
          </div>
      </div>

      {/* MY PROGRESS */}
      <div className="myProgress">
        <h4 className="titleMyProgress">MEU PROGRESSO</h4>
      </div>

      {/* RANDOM SUGGESTION OF A COMMUNITY */}
      <div className="suggestionCommunity">
        <h4 className="titleSuggCommunity">TALVEZ VOCÊ GOSTE</h4>
      </div>


    {/* MENU */}
    <div className="footer">
      <Menu />
    </div>

    </>
  )
}
