// import { useEffect, useState } from "react";
import { useContext } from "react";
// import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";

export function Profile() {
  // const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  // useEffect(() => {
  //   async function fetchUser() {
  //     const response = await api.get("/user/profile");
  //     setUser(response.data);
  //   }

  //   fetchUser();
  // }, []);

  const { loggedInUser } = useContext(AuthContext);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <>
    {/* HEADER */}
    <header className="headerPages">
      <div className="divHeaderPages">
        <Link to ="/profile">
        <img src="https://images2.imgbox.com/54/1f/hdwOJPTU_o.png" className="avatar" alt ="default avatar" />
        </Link>
        <div className="textHeaderPages">
            <h3 className="titleHeaderPages">
                PÁGINA SELECIONADA
            </h3>
            <h1 className="nameHeaderPages">
              {loggedInUser.user.name}
            </h1>
        </div>
        <Link to ="/profile">
        <img src="https://svgshare.com/i/nAs.svg" className="configIcon" alt="config icon" />
        </Link>
      </div>
    </header>





    {/* EDIT INFOS */}
    <div className="editInfos">

      <div className="editName">
        <h4 className="yourName">Seu nome: {loggedInUser.user.name}</h4>
        <h4 className="newName">Novo nome:</h4>
      </div>

      <div className="editUsername">
        <h4 className="yourUsername">Seu username: {loggedInUser.user.username}</h4>
        <h4 className="newUsername">Novo username:</h4>
      </div>

      <div className="editEmail">
        <h4 className="yourEmail">Seu e-mail: {loggedInUser.user.email}</h4>
        <h4 className="newEmail">Novo e-mail:</h4>
      </div>

      <div className="editPassword">
        <h4 className="yourEmail">Sua senha atual:</h4>
        <h4 className="newEmail">Nova senha:</h4>
      </div>

    

    {/* BUTTONS */}
    <button className="buttonUpdateInfo">
      Atualizar!
    </button>


    <button onClick={handleLogOut} className="buttonLogOut">
      Sair
    </button>
    
    </div>

    <Menu/>

    </>
  );
}
