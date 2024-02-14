import React,{useState,useEffect} from "react"
import { Transition } from '@headlessui/react';
import {LOGO_URL} from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import {useSelector} from "react-redux"
const NewHeader=()=>{

    const cartItems=useSelector((store)=> store.cart.items)
    console.log(cartItems);
    const {userName}=useContext(UserContext);
    console.log(userName)
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [btnName,setBtnName]=useState("Login")
    const onlineStatus=useOnlineStatus()
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    // const menuItems = ['Status', 'Home', 'About us', 'Contact us', 'Grocery', 'cart', 'Login'];
  

  return (
    <div className="flex items-center justify-between p-4">
      <div className="text-white font-bold"><img className="logo-img w-32" alt="taaza-kitchen.png" src={LOGO_URL}/></div>

      {isMobile ? (
        <button
          className="text-black focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      ) : (
        <ul className="flex space-x-4 mr-5">
          
            {/* <li key={index} className="text-white">
              {item==="Status"?onlineStatus?"Status: 🟢":"Status: 🔴":item}
            </li> */}
          <li className="mx-3">Status: {onlineStatus?"🟢":"🔴"}</li>
                    <li><Link to="/"  className="mx-3 p-2 hover:shadow-sm">Home</Link></li>
                    <li><Link to="/about" className="mx-3 p-2 hover:shadow-sm">About Me</Link></li>
                    {/* <li><Link to="/contact" className="mx-3 p-2 hover:shadow-sm">Contact Us</Link></li> */}
                    <li><Link to="/grocery" className="mx-3 p-2 hover:shadow-sm">Grocery</Link></li>
                    <li><Link to="/cart" className="mx-3 p-2 hover:shadow-sm">Cart- ({cartItems.length} Items)</Link></li>
                    <li><button className="login" onClick={()=>{
                        if(btnName=="Login")
                            setBtnName("Logout");
                        else{
                            setBtnName("Login")
                        }
                        console.log(btnName)
                    }}>{btnName}</button></li>
                    {/* <li className="mx-3">{userName}</li> */}
        </ul>
      )}

      <Transition
        show={isOpen}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
      </Transition>

      <Transition
        show={isOpen}
        enter="transition-transform duration-500"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-500"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed inset-y-0 right-0 z-50 w-64 bg-gray-300 p-4">
          <ul className="space-y-4">
          <li className="mx-4">Status: {onlineStatus?"🟢":"🔴"}</li>
                    <li className="mx-4 p-2 hover:bg-white"><Link to="/">Home</Link></li>
                    <li className="mx-4 p-2 hover:bg-white"><Link to="/about">About Me</Link></li>
                    {/* <li className="mx-4 p-2 hover:bg-white"><Link to="/contact">Contact Us</Link></li> */}
                    <li className="mx-4 p-2 hover:bg-white"><Link to="/grocery">Grocery</Link></li>
                    <li className="mx-4 p-2 hover:bg-white"><Link to="/cart">Cart- ({cartItems.length} Items)</Link></li>
                    <button className="login mx-4 p-2 hover:bg-white" onClick={()=>{
                        if(btnName=="Login")
                            setBtnName("Logout");
                        else{
                            setBtnName("Login")
                        }
                        console.log(btnName)
                    }}>{btnName}</button>
                    {/* <li className="mx-4">{userName}</li> */}
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default NewHeader;