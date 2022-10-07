import { Menu } from "../../components/Menu/Menu";
import { Header } from "../../components/Header/Header";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../api/api";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { grey } from "@mui/material/colors";
import { MoodToday } from "../../components/MoodToday/MoodToday";
import { MyProgress } from "../../components/MyProgress/MyProgress";


export function Home() {
  const { loggedInUser } = useContext(AuthContext);
  let welcome = "Bem-vinda,"
  if(loggedInUser.user.role !== "USERFEM") welcome = "Bem-vinde,"

  let diasDeBem = 0 ;

  const [reload, setReload] = useState(false);
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    async function fetchMoods() {
        try {
            const response = await api.get(`/moods/${loggedInUser.user._id}/allMoods`);

        setMoods([...response.data]);
        setReload(false);
        } catch (err) {
        console.log(err);
        setReload(false);
        }
    }
    fetchMoods();
    }, [reload]);

    moods.forEach((current)=>{
      if(current.mood === "de bem"){
        diasDeBem++;
      } else{
        diasDeBem = 0
      }
    })

  return (
    <>
      <Header where={welcome} name={loggedInUser.user.name} />

      <MoodToday reload={setReload}/>
    
      <Link to="/mymoods">
        <MyProgress dias={diasDeBem} />
      </Link>
   
      <Menu />
    </>
  )
}
