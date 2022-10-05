import { Menu } from "../../components/Menu/Menu";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { grey } from "@mui/material/colors";
import { MoodToday } from "../../components/MoodToday/MoodToday";


export function Home() {
  const { loggedInUser } = useContext(AuthContext);
  let welcome = "Bem-vinda,"
  if(loggedInUser.user.role !== "USERFEM") welcome = "Bem-vinde,"

  return (
    <>
      <Header where={welcome} name={loggedInUser.user.name} />

      <MoodToday />
    

    {/* MY PROGRESS */}
    <div className="myProgress">
      <h4 className="titleMyProgress">MEU PROGRESSO</h4>
    </div>

    {/* RANDOM SUGGESTION OF A COMMUNITY */}
    <div className="suggestionCommunity">
      <h4 className="titleSuggCommunity">TALVEZ VOCÊ GOSTE</h4>
    </div>


      <Menu />
    </>
  )
}
