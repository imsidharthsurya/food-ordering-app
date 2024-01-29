import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";
let temp=restaurantData
console.log("initially temp is: ",temp)
const Body=()=>{
    return (
        <div className="body">
            <div className="search">
                <button className="filter" onClick={()=>{
                    temp=restaurantData.filter((restaurant)=>{
                        return restaurant.info.avgRating>4.3;
                    })
                    console.log("new temp is ",temp)
                }}>Top Rated Restaurant</button>
                <h3>Search Restaurant</h3>
            </div>
            <div className="restaurant-container">
                {
                    //to write js
                    temp.map((restaurant)=>{
                       return <RestaurantCard key={restaurant.info.id} {...restaurant.info}/>
                    })
                }
                
                
            </div>
        </div>
    )
}

export default Body;