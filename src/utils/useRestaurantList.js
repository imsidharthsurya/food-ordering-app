import { useState,useEffect } from "react";
const useRestaurantList=(setFilteredRestrauntList)=>{
    const [restaurantList,setRestaurantList]=useState([])

    useEffect(()=>{
        getDataFromAPI();
        console.log("useEffect Api called from useRestaurantList hook")
    },[]);

    const getDataFromAPI=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4322123&lng=78.3963095&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log("json data is: ",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestrauntList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    return restaurantList;
}
export default useRestaurantList;