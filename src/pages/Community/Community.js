import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { CommunityFeed } from "../../components/CommunityFeed/communityFeed";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";
import { CreateFeed } from "../../components/CreateFeed/CreateFeed";



export function Community(){
    const { loggedInUser } = useContext(AuthContext);
    const [ feeds, setFeeds ] = useState([]);
    const [ reload, setReload ] = useState(false);
    const { idCommunity } = useParams();
    

    useEffect(() => {
        async function fetchFeeds() {
            try {
                const response = await api.get(`/feeds/${idCommunity}/communityFeeds`);
    
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
    
        <header>
        <Header where="COMUNIDADES" name={loggedInUser.user.name} />
        </header>
        

            <div className="feeds" style={{marginBottom:"16rem"}}>
                <CreateFeed className="communityFeed" reload={setReload}/>
                
                {feeds.slice(0).reverse().map((current) => {
                    return (
                        <>
                        <CommunityFeed
                            createdAt={current.createdAt}
                            title={current.title}
                            body={current.body}
                            id={current._id}
                            username={current.owner.username}
                            reload={setReload} />
                        </>
                    )
                })}
            </div>

        
        <Menu />

        </>
    )
}