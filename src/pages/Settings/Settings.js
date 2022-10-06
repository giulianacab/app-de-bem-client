import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "./Settings.module.css"

export function Settings(){
    const navigate = useNavigate();
    const { loggedInUser } = useContext(AuthContext);

    function handleLogOut() {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    }

    return(
        <>
            <Header where="SETTINGS" name={loggedInUser.user.name} />
            
            <div className={style.container}>
            <Link to="/editprofile">
            <div className="myProgress">
                
                    <button>
                       <h4 className="titleSuggCommunity">Edit your profile</h4>
                    </button>
            </div>
            </Link>

            
            <div className="logOut">
                <button onClick={handleLogOut}>
                    <h4 className="titleSuggCommunity">Sair da conta</h4>
                </button> 
            </div>
            </div>
            

            <Menu />


        
        </>
    )
}