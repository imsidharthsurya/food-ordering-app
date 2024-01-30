import {useState,useEffect} from "react"
import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";
import Shimmer from "./Shimmer";
const Body=()=>{

    const [restaurantList,setRestaurantList]=useState([])

    useEffect(()=>{
        getDataFromAPI();
        console.log("useEffect Api called")
    },[]);

    const getDataFromAPI=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4322123&lng=78.3963095&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log("json data is: ",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    
    return(restaurantList.length===0)?(<>
        <Shimmer/>   
    </>): (
        <div className="body">
            <div className="search">
                <button className="filter" onClick={()=>{
                    const temp=restaurantData.filter((restaurant)=>{
                        return restaurant.info.avgRating>4.3;
                    })
                    setRestaurantList(temp)
                }}>Top Rated Restaurant</button>
                <h3>Search Restaurant</h3>
            </div>
            <div className="restaurant-container">
                {
                    //to write js
                    restaurantList.map((restaurant)=>{
                       return <RestaurantCard key={restaurant.info.id} {...restaurant.info}/>
                    })
                }
                
                {console.log("component rendered")}
            </div>
        </div>
    )
}

export default Body;