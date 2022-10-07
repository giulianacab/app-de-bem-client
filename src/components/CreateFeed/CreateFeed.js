import { PropaneSharp } from "@mui/icons-material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import style from "./CreateFeed.module.css"

export function CreateFeed(props) {

    const { idCommunity } = useParams();

    const [form, setForm] = useState({
        title: "",
        body: "",
     
    });

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          const response = await api.post(`/feeds/${idCommunity}`, form);
          setForm({
            title: "",
            body: "",
          })
          props.reload(true);
        } catch (err) {
          console.log(err);
        }
      }

    
    return (
        
      <form onSubmit={handleSubmit}>
      <div className="addCommunityFeed">
            
            
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-xl shadow-sm">
                <div>
                  <label htmlFor="email-address" className="labelAddCommFeed">
                    
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="title"
                    autoComplete="title"
                    value={form.title}
                    required
                    className="titleAddCommFeed"
                    placeholder="Título"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="body" className="labelAddCommFeed">
                    
                  </label>
                  <input
                    id="body"
                    name="body"
                    type="body"
                    autoComplete="body"
                    value={form.body}
                    required
                    className="msgAddCommFeed"
                    placeholder="Digite sua mensagem..."
                    onChange={handleChange}
                  />
                </div>
              </div>
  
  
  
              <div>
                <button 
                  type="Enviar"
                  className="buttonAddCommFeed">
                  Criar nova postagem
                </button>
              </div>
  
          </div>
          
        </form>
     
    );
}
