import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { style } from "@mui/system";

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
                <button>
        `               Edit your profile`
                </button>
                </Link>

                <button onClick={handleLogOut} className="btn btn-danger">
                    Sair
                </button>
            </div>

            <Menu />


        
        </>
    )
}