import {useState,useEffect} from "react"
import {REST_INFO_URL} from "./constants"
const useRestaurantInfo=(resId)=>{
    const [restInfo,setRestInfo]=useState(null);
    useEffect(()=>{
        fetchRestInfo();
        
    },[])

    const fetchRestInfo=async ()=>{
        const restdata=await fetch(REST_INFO_URL+resId);
        const json=await restdata.json();
        setRestInfo(json.data.cards);//array of restaurant data
    }
    return restInfo
}

export default useRestaurantInfo;