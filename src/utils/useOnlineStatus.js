import {useState,useEffect} from "react";
const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true);//initially online
    // to check online/offline we'll use addEventListener online
    //check if online/offline
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineStatus(true)
            console.log("inside online")
        });
        window.addEventListener("offline",()=>{
            setOnlineStatus(false)
            console.log("inside offline")
        });
    },[])
    
    return onlineStatus;
}

export default useOnlineStatus;