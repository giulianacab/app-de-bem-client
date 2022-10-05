import "../../index.css";
import style from "./MyMoods.module.css"
import { Header } from "../../components/Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useEffect, useState } from "react";
import { MoodFeed } from "../../components/MoodFeed/MoodFeed";
import { api } from "../../api/api";
import { Menu } from "../../components/Menu/Menu";

export function MyMoods(){
    const { loggedInUser } = useContext(AuthContext);
    const [moods, setMoods] = useState([]);

    useEffect(() => {
        async function fetchMoods() {
            try {
                const response = await api.get(`/moods/${loggedInUser.user._id}/allMoods`);
    
            setMoods([...response.data]);
            console.log(moods)
            } catch (err) {
            console.log(err);
            }
        }
        fetchMoods();
        }, []);

    return (
        <>
    
        <Header where="My Moods" name={loggedInUser.user.name} />

        {/* TITLE MOOD FEED */}
        {/* <div className={`divTitlePageMoodFeed ${style.myMoodsHeader}`}>
            <h1 className="txtTitlePageMoodFeed">Meu histórico de humor:</h1>
        </div> */}

        {/* MOOD FEED */}
        <div className={`moodFeed ${style.moods}`}>
            {moods.map((current)=>{
                return (<MoodFeed 
                            bemzinha={current.bemzinha} 
                            createdAt={current.createdAt} 
                            mood={current.mood} 
                            text={current.text}
                            color={current.color}
                        />)
            })}
        </div>

        <Menu />

        </>
)}
