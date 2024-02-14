import { useState,useEffect } from "react";
import {REST_LIST_URL} from "../utils/constants"
const useRestaurantList=(setFilteredRestrauntList)=>{
    const [restaurantList,setRestaurantList]=useState([])

    useEffect(()=>{
        getDataFromAPI();
        console.log("useEffect Api called from useRestaurantList hook")
    },[]);

    const getDataFromAPI=async()=>{
        
        navigator.geolocation.getCurrentPosition(async(position) => {
            let late = position.coords.latitude;
            let long = position.coords.longitude;
            const jsonLoc={lat:late,lon:long};
            console.log("the latitude & longitude is: ",jsonLoc)
            const {lat,lon}=jsonLoc;
            console.log("url to get restrauntInfo is: ",REST_LIST_URL+`lat=${lat}&lng=${lon}`);
            const data=await fetch(REST_LIST_URL+`lat=${lat}&lng=${lon}`);
            const json=await data.json();
            let i=0;
            json.data.cards.map((temp,index)=>{
                if(temp.card.card.id==="restaurant_grid_listing"){
                    i=index;
                }
            })
            // console.log(JSON.stringify(json.data.cards[i]))
            console.log("json data is: ",json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants)
            setRestaurantList(json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants)
            setFilteredRestrauntList(json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants)
        },async(error)=>{
            console.log("unable to access the location")
            //in this case we'll hardcode the latitude & longitude to make the api call
            let late = "17.3724";
            let long = "78.4378";
            const jsonLoc={lat:late,lon:long};
            console.log("the latitude & longitude is: ",jsonLoc)
            const {lat,lon}=jsonLoc;
            console.log("url to get restrauntInfo is: ",REST_LIST_URL+`lat=${lat}&lng=${lon}`);
            const data=await fetch(REST_LIST_URL+`lat=${lat}&lng=${lon}`);
            const json=await data.json();
            let i=0;
            json.data.cards.map((temp,index)=>{
                if(temp.card.card.id==="restaurant_grid_listing"){
                    i=index;
                }
            })
            // console.log(JSON.stringify(json.data.cards[i]))
            console.log("json data is: ",json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants)
            setRestaurantList(json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants)
            setFilteredRestrauntList(json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants)
        })

    }
    return restaurantList;
}
export default useRestaurantList;