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
            <Header where="CONFIGURAÇÕES" name={loggedInUser.user.name} />
            
            <div className={style.container}>
            <Link to="/editprofile" className={style.bttnhover}>
            <div className="myProgress">
                
                    <button>
                       <h4 className="titleSuggCommunity">EDITAR MINHA CONTA</h4>
                    </button>
            </div>
            </Link>

            <button onClick={handleLogOut} className={style.bttnhover}>
            <div className="logOut">
                
                    <h4 className="titleSuggCommunity">SAIR DA CONTA</h4>
                
            </div>
            </button> 
            </div>
            

            <Menu />


        
        </>
    )
}