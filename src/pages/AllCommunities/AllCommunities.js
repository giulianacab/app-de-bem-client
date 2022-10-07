import { useContext, useEffect, useState } from "react";
import {Header} from "../../components/Header/Header"
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { Menu } from "../../components/Menu/Menu";
import CommunityCard from "../../components/CommunityCard/CommunityCard";

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
                <div style={{marginTop:"10rem"}}>
                    
                {communities.map((current) => { return <CommunityCard title={current.title} img={current.communityPic} path={current._id}/>})}
                </div>

            <Menu />
            
        </>
    )
}