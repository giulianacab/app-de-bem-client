import { FaceRetouchingNaturalRounded } from "@mui/icons-material";
import { useReducer } from "react";
// import { PaytoneOne-Regular } from "../../Fonts/PaytoneOne-Regular.ttf";
import Menu from "../../components/Menu";


export function Home() {
  return <>

    {/* HEADER */}
    {/* <Header /> */}
    <h1>Olá, ${/*como coloca user first name?*/}</h1>

    {/* SELECT MOOD */}
    <h3>Como você está hoje?</h3>

    {/* MY PROGRESS */}
    <h4>MEU PROGRESSO</h4>

    {/* RANDOM SUGGESTION OF A COMMUNITY */}
    <h4>TALVEZ VOCÊ GOSTE</h4>

    {/* MENU */}
    <Menu />

  
  </>;
}
