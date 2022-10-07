import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { useParams } from "react-router-dom"
import { useState, useEffect  } from "react"
import { api } from "../../api/api"

import { useNavigate } from "react-router-dom";

export function EditProfile(){

const navigate = useNavigate()
const { loggedInUser } = useContext(AuthContext);

    const [form, setForm] = useState({
        name: "",
        username: "",
        email: "",
        role: "",
    });
    
    const [img, setImg] = useState("");

    function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleImage(e) {
      setImg(e.target.files[0]);
    }

    async function handleUpload() {
      try {
        const uploadData = new FormData();
        uploadData.append("pictures", img);
  
        const response = await api.put("/uploadImage", uploadData);
  
        return response.data.url;
      } catch (error) {
        console.log(error);
      }
    }

    async function handleSubmit(e) {
      e.preventDefault();
  
      try {
        const imgURL = await handleUpload();
        await api.put("/editprofile", { ...form, img: imgURL });
  
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }


    
    return (
        <>
        <Header where="EDITAR PERFIL" name={loggedInUser.user.name} />
        <div className="EditProfileForm">

        <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Editar Perfil</h3>
              <p className="mt-1 text-sm text-gray-600"></p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form  onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-pink px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                  
                  <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Novo Nome
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Novo Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        required
                        value={form.username}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Novo Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                        Identidade de Gênero
                      </label>
                      <select
                        id="role"
                        name="role"
                        autoComplete="role"
                        required
                        value={form.role}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="USERFEM">Feminino</option>
                        <option value="USERNB">Não Binario</option>
                        
                      </select>
                    </div>
                    
                  {/* <label htmlFor="formImg">Sua foto de perfil:</label>
                  <input  type="file" className=" " id="formImg" onChange={handleImage} /> */}

                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-orange shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Salvar
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      </div>
      <Menu/>
      </>
    )
}