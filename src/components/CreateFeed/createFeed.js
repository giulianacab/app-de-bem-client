import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";


export default function AddForm () {

    const { idCommunity } = useParams();

    const [form, setForm] = useState({
        title: "",
        message: "",
     
    });

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          const response = await api.post(`/feeds/${idCommunity}`, form);
        } catch (err) {
          console.log(err);
        }
      }

    
    return (
        
      <form onSubmit={handleSubmit}>
      <div className="flex min-h-full bg-orange w-screen h-screen justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            
            
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    titulo
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="title"
                    autoComplete="title"
                    value={form.title}
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Titulo"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    message
                  </label>
                  <input
                    id="message"
                    name="message"
                    type="message"
                    autoComplete="message"
                    value={form.message}
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Mensagem"
                    onChange={handleChange}
                  />
                </div>
              </div>
  
  
  
              <div>
                <button 
                  type="Enviar"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  </span>
                  Enviar
                </button>
              </div>
  
          </div>
          
        </div>
        </form>
     
    );
}