import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";
const Body=()=>{
    return (
        <div className="body">
            <div className="search">
                <h3>Search Restaurant</h3>
            </div>
            <div className="restaurant-container">
                {
                    //to write js
                    restaurantData.map((restaurant)=>{
                       return <RestaurantCard key={restaurant.info.id} {...restaurant.info}/>
                    })
                }
                
                
            </div>
        </div>
    )
}

export default Body;