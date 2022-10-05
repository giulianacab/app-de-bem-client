// import { useEffect, useState } from "react";
import { useContext } from "react";
// import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";

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


      <h1>{loggedInUser.user.name}</h1>
      <p>{loggedInUser.user.email}</p>
      <button onClick={handleLogOut}>Sair</button>
    </>
  );
}
