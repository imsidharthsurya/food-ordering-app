import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [btnName,setBtnName]=useState("Login")
    const onlineStatus=useOnlineStatus();
    return (
        <div className="header flex justify-between py-5 px-7 items-center shadow-md">
            <div className="logo">
                <img className="logo-img w-32" alt="taaza-kitchen.png" src={LOGO_URL}/>
            </div>
            <div className="nav-bar">
                <ul className="flex">
                    <li className="mx-4">Status: {onlineStatus?"🟢":"🔴"}</li>
                    <li className="mx-4"><Link to="/">Home</Link></li>
                    <li className="mx-4"><Link to="/about">About us</Link></li>
                    <li className="mx-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="mx-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="mx-4">Cart</li>
                    <button className="login mx-4" onClick={()=>{
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