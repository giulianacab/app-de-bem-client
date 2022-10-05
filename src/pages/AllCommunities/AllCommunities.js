import { useEffect, useState } from "react";

import axios from "axios";
import CreateFeed from "../../components/CreateFeed/createFeed";
import Communities from "../../components/CommunitiesCard/communitiesCard";

export function AllCommunities(){
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        async function fetchCommunities(){
            try {
                const response = await axios.get(
                    "/communities"
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
            <div>
                <Communities />
                {communities.map((current) => {return <CreateFeed communities={current} />})}
            </div>
            
        </>
    )
}