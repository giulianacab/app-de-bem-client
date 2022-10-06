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
    <div className="editInfos bg-pink px-4 py-5 sm:p-6">

      <div className="editName ">
        <h4 className="yourName font-bold ">Seu nome: </h4>
        <p>{loggedInUser.user.name}</p>
      </div>

      <div className="editUsername">
        <h4 className="yourUsername">Seu username: {loggedInUser.user.username}</h4>
      </div>

      <div className="editEmail">
        <h4 className="yourEmail">Seu e-mail: {loggedInUser.user.email}</h4>
      </div>

      <div className="editPassword">
      </div>
      <div className="gender">
      <h4>Seu Genero: {loggedInUser.user.gender} </h4>
      </div>

    </div>

    <Menu/>

    </>
  );
}
