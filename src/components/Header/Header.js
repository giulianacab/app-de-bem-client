import { Link } from "react-router-dom"
import style from "./Header.module.css"
import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"
import { useEffect, useState } from "react";
import { api } from "../../api/api";


export function Header(props){

    const {loggedInUser} = useContext(AuthContext);

    return (
        <>
        <div className={`headerPages ${style.container}`}>
          <div className="divHeaderPages">
        <div className={style.info} >
            <Link to ="/profile" style={{marginRight:"1rem"}}>
            <img src={loggedInUser.user.avatar} className={`${style.profilePic} avatar`} alt ="default avatar" />
            </Link>
            <div className="textHeaderPages mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                <h3 className="titleHeaderPages">
                    {props.where}
                </h3>
                <h1 className="nameHeaderPages">
                    {props.name}
                </h1>
        </div>
            </div>
            <Link to ="/settings" style={{marginLeft:"2rem"}}>
            <img src="https://svgshare.com/i/nAs.svg" className={`${style.settingsBtn} configIcon`} alt="config icon" />
            </Link>
          </div>
        </div>
        </>
    )
}