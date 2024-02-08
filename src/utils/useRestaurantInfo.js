import {useState,useEffect} from "react"
import {REST_INFO_URL} from "./constants"
const useRestaurantInfo=(resId,restMenu)=>{
    const [restInfo,setRestInfo]=useState(null);
    useEffect(()=>{
        fetchRestInfo();
        
    },[])

    const fetchRestInfo=async ()=>{
        // const restdata=await fetch(REST_INFO_URL+resId);
        const restdata=await fetch(REST_INFO_URL);
        const json=await restdata.json();
        console.log("printing json in custom hook",json.data.cards)
        if(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title==="Recommended"){
            restMenu=json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
        }else{
            restMenu=json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
        }
        setRestInfo(json.data.cards);//array of restaurant data
        
        console.log("after setting restinfo state var.")
        
        console.log("after setting restInfo is restMenu is: ",restMenu)
    }
    console.log("before returning")
    return restInfo
}

export default useRestaurantInfo;