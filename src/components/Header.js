// import { Button } from "@mui/material";
import * as React from "react";
import "../index.css";


export default function Header() {
    <>
        <header className="header">
            <div className="infosHeader">
                <img src="https://images2.imgbox.com/54/1f/hdwOJPTU_o.png" className="avatar" alt ="default avatar" />
                <h1 className="titleHome">
                    Olá, {/*como coloca user first name?*/}!
                </h1>
                <img src="https://svgshare.com/i/nAs.svg" className="configIcon" alt="config icon" />
            </div>
        </header>
    </>
};