import { useContext, useEffect, useState } from "react";
import {Header} from "../../components/Header/Header"
import axios from "axios";
import CreateFeed from "../../components/CreateFeed/createFeed";

import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { Menu } from "../../components/Menu/Menu";
import Community from "../../components/Community/Community";

export function AllCommunities(){
    const [communities, setCommunities] = useState([]);
    const { loggedInUser } = useContext(AuthContext)

    useEffect(() => {
        async function fetchCommunities(){
            try {
                const response = await api.get(`/communities/all`
                );
                setCommunities([...response.data]);
                console.log(communities)
            } catch (err) {
                console.log(err)
            }
        }
        fetchCommunities();
    },[]);
    return(
        <>
            <Header where="COMUNIDADES" name={loggedInUser.user.name} />
                <div>
                    
                    {communities.map((current) => { return <Community title={current.title} img={current.communityPic}/>
                 })}
                </div>

            <Menu />
            
        </>
    )
}