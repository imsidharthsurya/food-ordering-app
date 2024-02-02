import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
const Header=()=>{
    const [btnName,setBtnName]=useState("Login")
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" alt="taaza-kitchen.png" src={LOGO_URL}/>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
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