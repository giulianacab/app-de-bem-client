import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Login.module.css"

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/users/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    
    <div className="flex min-h-full bg-orange items-center w-screen h-screen justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className=" flex flex-col justify-center items-center">
          
          <img className="logoimg" src="https://res.cloudinary.com/dmk9xlm2w/image/upload/v1665158076/logo_laranja_poj4im.png" alt="logo" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900" style={{color:"white"}}>
              Faça seu login
            </h2>
            
            <p className="mt-2 text-center text-sm text-gray-600" style={{color:"white"}}>
              É novo aqui?{' '}
              <Link to="/signup">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" style={{color:"#FFD110"}}>
                  Crie uma conta
                </a>
              </Link>
            </p>
          </div>
          
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Endereço de e-mail
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={form.password}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
            </div>



            <div>
              <button 
                type="Entrar"
                className={`group relative flex w-full h-14 justify-center items-center rounded-2xl border border-pink bg-pink py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${style.bttnhover}`}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                Entrar
              </button>
            </div>

        </div>
        
      </div>
      </form>
      </>
  );
}
