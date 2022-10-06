import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../api/api";

export function Community(){
    const { loggedInUser } = useContext(AuthContext);
    const [feeds, setFeeds] = useState([]);
    const [reload, setReload] = useState(false);
    

    useEffect(() => {
        async function fetchFeeds() {
            try {
                const response = await api.get(`/feeds/${loggedInUser._idCommunity}/communityFeeds`);
    
            setFeeds([...response.data]);
            setReload(false);
            } catch (err) {
            console.log(err);
            setReload(false);
            }
        }
        fetchFeeds();
        }, [reload]);

    return (
        <>
    
        <Header where="COMUNIDADES" name={loggedInUser.user.name} />
        

        <div className="feeds">
            {feeds.slice(0).reverse().map((current) => {
                return (<Community
                    createdAt={current.createdAt}
                    title={current.title}
                    body={current.body}
                    id={current._id}
                    reload={setReload}
                    />)
            })}
        </div>

        
        <Menu/>

        </>
    )
}