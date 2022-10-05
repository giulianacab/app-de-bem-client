import "../../index.css";
import { Link } from "react-router-dom";

export function MyMoods(){
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
                    FirstName LastName
                </h1>
            </div>
            <Link to ="/profile">
            <img src="https://svgshare.com/i/nAs.svg" className="configIcon" alt="config icon" />
            </Link>
          </div>
        </header>

        </>
)}
