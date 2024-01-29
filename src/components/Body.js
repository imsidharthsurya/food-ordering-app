import {useState} from "react"
import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";
const Body=()=>{
    const [restaurantList,setRestaurantList]=useState(restaurantData)
    return (
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
                
                
            </div>
        </div>
    )
}

export default Body;