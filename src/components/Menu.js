// 6 ícones: home, my moods, profile, telefone (sos), papo privado, programas
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactDOM } from "react";
import { useRoutes } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ForumIcon from '@mui/icons-material/Forum';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import "../index.css";


export default function Menu() {
    <>

    {/* HOME */}
        <Link to={"/"}>
            <div className="homeIcon">
                <HomeIcon
                    fontSize="large"
                    color="white"
                />
            </div>
        </Link>


    {/* MY MOODS */}
        <Link to={"/mymoods"}>
            <div className="myMoodsIcon">
                <EmojiEmotionsIcon
                    fontSize="large"
                    color="white"
                />
            </div>
        </Link>


    {/* PROFILE */}
        <Link to={"/profile"}>
            <div className="profileIcon">
                <PersonIcon
                    fontSize="large"
                    color="white"
                />
            </div>
        </Link>


    {/* SOS */}
        <Link to={"/errorpage"}>
            <div className="errorIcon">
                <LocalPhoneIcon
                    fontSize="large"
                    color="white"
                />
            </div>
        </Link>


    {/* COMMUNITIES */}
        <Link to={"/communities"}>
            <div className="communitiesIcon">
                <ForumIcon
                    fontSize="large"
                    color="white"
                />
            </div>
        </Link>

        {/* Comuniddade específica: /idCommunity */}


    {/* PROGRAMS */}
        <Link to={"/errorpage"}>
            <div className="errorIcon">
                <VideoLibraryIcon
                    fontSize="large"
                    color="white"
                />
            </div>
        </Link>

    </>
};