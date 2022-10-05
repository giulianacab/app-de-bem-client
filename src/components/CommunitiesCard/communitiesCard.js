import { PropaneSharp } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom"
import CreateFeed from "../CreateFeed/createFeed";


export default function Communities(props){
    const navigate = useNavigate();

    // function handleEdit(communities){
    //     if(!communities.isadmin){
    //         navigate(`/`)

    //     }
    // }

    return (
        <>
          <CreateFeed/>
        </>
    )
}