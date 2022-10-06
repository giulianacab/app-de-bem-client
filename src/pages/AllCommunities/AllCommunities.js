import { useContext, useEffect, useState } from "react";
import {Header} from "../../components/Header/Header"
import axios from "axios";
import CreateFeed from "../../components/CreateFeed/createFeed";
import Communities from "../../components/CommunitiesCard/communitiesCard";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { Menu } from "../../components/Menu/Menu";

export function AllCommunities(){
    const [communities, setCommunities] = useState([]);
    const { loggedInUser } = useContext(AuthContext)

    useEffect(() => {
        async function fetchCommunities(){
            try {
                const response = await api.get(`/moods/${loggedInUser.user._id}/communities`
                );
                setCommunities([...response.data]);
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
                <Communities />
                {communities.map((current) => {return <CreateFeed communities={current} />})}
            </div>

            <Menu />
            
        </>
    )
}