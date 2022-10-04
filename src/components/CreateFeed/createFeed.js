import { useState } from "react";
import axios from "axios";
import style from "./createFeed.module.css"

export default function AddForm () {
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
          const response = await axios.post(
            "",
            form
          );
          ;
        } catch (err) {
          console.log(err);
        }
      }

    
    return (
        <center>
        <form onSubmit={handleSubmit} className={style.grid}>
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
            
            <center><button type="submit" className={`btn btn-primary ${style.primary}`} style={{width:"7rem", margin:"1rem"}}>Enviar</button></center>
        </form>
     </center>
    );
}