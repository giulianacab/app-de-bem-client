// 6 ícones: home, my moods, profile, telefone (sos), papo privado, programas
import React from "react";
import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { ReactDOM } from "react";
// import { useRoutes } from "react-router-dom";
// import HomeIcon from '@mui/icons-material/Home';
// import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import PersonIcon from '@mui/icons-material/Person';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import ForumIcon from '@mui/icons-material/Forum';
// import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import "../index.css";


export default function Menu() {
    <>

    {/* HOME */}
        <Link to={"/"}>
            <div className="homeIcon">

            </div>
        </Link>


    {/* MY MOODS */}
        <Link to={"/mymoods"}>
            <div className="myMoodsIcon">

            </div>
        </Link>


    {/* PROFILE */}
        <Link to={"/profile"}>
            <div className="profileIcon">

            </div>
        </Link>


    {/* SOS */}
        <Link to={"/errorpage"}>
            <div className="errorIcon">

            </div>
        </Link>


    {/* COMMUNITIES */}
        <Link to={"/communities"}>
            <div className="communitiesIcon">

            </div>
        </Link>

        {/* Comuniddade específica: /idCommunity */}


    {/* PROGRAMS */}
        <Link to={"/errorpage"}>
            <div className="errorIcon">

            </div>
        </Link>

    </>
};