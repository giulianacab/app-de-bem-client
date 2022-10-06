import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { Community } from "../../components/Community/Community";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";

export function CommunityPage(){
    const { loggedInUser } = useContext(AuthContext);

    return (
        <>
    
        <Header where="COMUNIDADES" name={loggedInUser.user.name} />
        
        <Community />
        
        <Menu/>

        </>
    )
}