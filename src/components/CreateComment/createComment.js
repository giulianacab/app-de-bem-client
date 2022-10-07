import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";



export default function CreateComment (props) {

    const { idCommunity } = useParams();

    const [form, setForm] = useState({
        body: ""
    });

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          const response = await api.post(`/comments/${props.feedId}`, form);
          setForm({body:""});
        } catch (err) {
          console.log(err);
        }
      }

    
    return (
        
      <form onSubmit={handleSubmit}>
        <div className="commentCommunity">
            
          <input type="hidden" name="remember" defaultValue="true" />

          <div className="commentBox">
              <input
                id="body"
                name="body"
                type="text"
                value={form.body}
                className="commentText"
                placeholder="Escreva aqui..."
                onChange={handleChange}
              />
          </div>

          <div>
            <button type="Enviar" className="commentButton">
              Comentar
            </button>
          </div>
            
        </div>
      </form>
     
    );
}