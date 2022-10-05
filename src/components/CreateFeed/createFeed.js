import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import style from "./createFeed.module.css"

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
        <center>
        <form onSubmit={handleSubmit} className="grid">
            <label htmlFor="title">Title:</label>
            <input 
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                style={{margin:"0.6rem"}}
                required
            />
            <label htmlFor="message">Message:</label>
            <input 
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                style={{margin:"0.6rem"}}
                required
            />
            
            <center><button type="submit" className={`btn btn-primary $"primary}`} style={{width:"7rem", margin:"1rem"}}>Enviar</button></center>
        </form>
     </center>
    );
}