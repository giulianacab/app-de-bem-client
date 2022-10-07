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

  let gender;
  if(loggedInUser.user.role === "USERFEM") gender="Feminino";
  if(loggedInUser.user.role === "USERNB") gender="Não Binário";
  if(loggedInUser.user.role === "ADMIN" || loggedInUser.user.role === "UNDEFINED") gender="Não definido";


  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  }

  return (
    <>
     <Header where="MEU PERFIL" name={loggedInUser.user.name} />

    {/* EDIT INFOS */}
    <div className="editInfos bg-white  px-4 py-5 sm:p-6">

      <div className="editName inline-flex mb-2 justify-center rounded-md bg-[#ffd5e0] text-lg border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-orange shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
        <h4 className="yourName font-bold ">Seu nome:&nbsp;</h4>
        <p> {loggedInUser.user.name}</p>
        
      </div>
      
      <div className="editUsername inline-flex justify-center mb-2 text-lg rounded-md bg-[#ffd5e0] border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-orange shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
        <h4 className="yourUsername font-bold">Seu username:&nbsp;</h4>
        <p>{loggedInUser.user.username}</p>
        
      </div>

      <div className="editEmail inline-flex justify-center text-lg mb-2 rounded-md border bg-[#ffd5e0] border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-orange shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <h4 className="yourEmail font-bold">Seu e-mail:&nbsp;</h4>
        <p> {loggedInUser.user.email}</p>
        
      </div>

      
      <div className="gender text-lg inline-flex justify-center mb-2 rounded-md border bg-[#ffd5e0] border-transparent bg-indigo-600 py-2 px-4 text-sm  text-orange shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      <h4 className="yourEmail font-bold">Seu Gênero: &nbsp; </h4>
      <p>{gender}</p>
      
      </div>

    </div>

    <Menu/>

    </>
  );
}
