import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { useState  } from "react"
import { api } from "../../api/api"

import { useNavigate } from "react-router-dom";

export function EditProfile(){

const navigate = useNavigate()
const { loggedInUser } = useContext(AuthContext);


    const [form, setForm] = useState({
        name: loggedInUser.user.name,
        username: loggedInUser.user.username,
        email: loggedInUser.user.email,
        role: loggedInUser.user.role
    });
    
    const [img, setImg] = useState("");

    function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
      console.log(form)
    }

    function handleImage(e) {
      setImg(e.target.files[0]);
    }

    async function handleUpload() {
      try {
        const uploadData = new FormData();
        uploadData.append("picture", img);
        console.log(uploadData)
  
        const response = await api.post("/upload/uploadImage", uploadData);
  
        return response.data.url;
      } catch (error) {
        console.log(error);
      }
    }

    async function handleSubmit(e) {
      e.preventDefault();
  
      try {
        const imgURL = await handleUpload();
        console.log(imgURL);
        await api.put(`/users/${loggedInUser.user._id}/edit`, { ...form, avatar: imgURL });
        
  
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }


    
    return (
        <>
        <Header where="EDITAR PERFIL" name={loggedInUser.user.name} />
        
        <div className="editProfileForm" >

            <div className="titleEditProfile">
              <h3 className="titleTxtEditProfile">📝 Edite seu perfil</h3>
            </div>

            <div className="formEditProfile">

              <form onSubmit={handleSubmit}>

                {/* NOVO NOME */}
                <div className="nameFormEditProfile">

                  <label htmlFor="name" className="nameLabelFormEditProfile">
                    Novo nome:
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className="nameTxtFormEditProfile"
                  />

                </div>


                {/* NOVO USERNAME */}
                <div className="usernameFormEditProfile">
                
                  <label htmlFor="username" className="usernameLabelFormEditProfile">
                    Novo nome de usuário:
                  </label>

                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    value={form.username}
                    onChange={handleChange}
                    className="usernameTxtFormEditProfile"
                  />
                  
                </div>

                      

                {/* NOVO E-MAIL */}
                <div className="emailFormEditProfile">

                  <label htmlFor="email" className="emailLabelFormEditProfile">
                    Novo e-mail:
                  </label>

                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className="emailTxtFormEditProfile"
                  />
                  
                </div>



                {/* DEFINIR GÊNERO */}
                <div className="genderFormEditProfile">
                  
                  <label htmlFor="role" className="genderLabelFormEditProfile">
                    Gênero:
                  </label>

                  <select
                    id="role"
                    name="role"
                    autoComplete="role"
                    value={form.role}
                    onChange={handleChange}
                    className="genderTxtFormEditProfile"
                  >
                    <option className="genderOption" value="UNDEF">Indefinido</option>
                    <option className="genderOption" value="USERFEM">Feminino</option>
                    <option className="genderOption" value="USERNB">Não Binario</option>
                  </select>

                </div>




                {/* EDITAR FOTO DE PERFIL */}
                <label htmlFor="formImg" className="imgFormEditProfile">Sua foto de perfil:</label>

                <input type="file" onChange={handleImage} className="imgLabelFormEditProfile" />

                <div className="saveButtonEditProfile">
                  <button type="submit">
                    Salvar!
                  </button>
                </div>

              </form>

            </div>
      </div>


      <Menu/>
      </>
    )
}