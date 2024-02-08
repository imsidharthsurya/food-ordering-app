import { useState,useEffect } from "react";
import {REST_LIST_URL,LOCATION_URL} from "../utils/constants"
const useRestaurantList=(setFilteredRestrauntList)=>{
    const [restaurantList,setRestaurantList]=useState([])

    useEffect(()=>{
        getDataFromAPI();
        console.log("useEffect Api called from useRestaurantList hook")
    },[]);

    const getDataFromAPI=async()=>{
        const locData=await fetch(LOCATION_URL);
        const jsonLoc=await locData.json();
        const {lat,lon}=jsonLoc;
        console.log("url to get restrauntInfo is: ",REST_LIST_URL+`lat=${lat}&lng=${lon}`);
        const data=await fetch(REST_LIST_URL+`lat=${lat}&lng=${lon}`);
        const json=await data.json();
        // console.log("json data is: ",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestrauntList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    return restaurantList;
}
export default useRestaurantList;