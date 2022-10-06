// import { useEffect, useState } from "react";
import { useContext } from "react";
// import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Header } from "../../components/Header/Header";
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
    navigate("/login");
  }

  return (
    <>
     <Header where="MY PROFILE" name={loggedInUser.user.name} />





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


    
    
    </div>

    <Menu/>

    </>
  );
}
