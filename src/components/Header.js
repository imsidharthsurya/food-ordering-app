import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    const [btnName,setBtnName]=useState("Login")
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" alt="taaza-kitchen.png" src={LOGO_URL}/>
            </div>
            <div className="nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        if(btnName=="Login")
                            setBtnName("Logout");
                        else{
                            setBtnName("Login")
                        }
                        console.log(btnName)
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;