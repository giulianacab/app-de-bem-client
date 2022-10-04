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
          <h3>Como você está hoje?</h3>
      </div>

      {/* MY PROGRESS */}
      <div className="myProgress">
        <h4>MEU PROGRESSO</h4>
      </div>

      {/* RANDOM SUGGESTION OF A COMMUNITY */}
      <div className="suggestionCommunity">
        <h4>TALVEZ VOCÊ GOSTE</h4>
      </div>


    {/* MENU */}
    <div className="footer">
      <Menu />
    </div>

    </>
  )
}
