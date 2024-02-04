import {useState,useEffect} from "react"
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
    {console.log("component rendered")}
    const [restaurantList,setRestaurantList]=useState([])
    const [filteredRestrauntList,setFilteredRestrauntList]=useState([])
    const [searchRestaurantName,setSearchRestaurantName]=useState("")

    useEffect(()=>{
        getDataFromAPI();
        console.log("useEffect Api called")
    },[]);

    const getDataFromAPI=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4322123&lng=78.3963095&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log("json data is: ",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestrauntList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    
    function searchRestaurant(restName){
        var temp= restaurantList.filter((rest)=>{
             return rest.info.name.toLowerCase().includes(restName);
         })
         setFilteredRestrauntList(temp);
     }
     const onlineStatus=useOnlineStatus();
     if(onlineStatus===false){
        return <h1>Looks like you're offline</h1>
     }
     
    return(restaurantList.length===0)?(<>
        <Shimmer/>   
    </>): (
        <div className="body">
            <div className="search">
                <div className="search-rest">
                    <input type="text" placeholder="search" value={searchRestaurantName} onChange={(e)=>{
                        setSearchRestaurantName(e.target.value)
                        
                    }}/>
                    <button className="search-btn" onClick={()=>{
                        searchRestaurant(searchRestaurantName);
                    }}>Search</button>
                </div>
                <div className="filter-rest">
                <button className="filter" onClick={()=>{
                    const temp=restaurantList.filter((restaurant)=>{
                        return restaurant.info.avgRating>4.3;
                    })
                    setFilteredRestrauntList(temp)
                }}>Top Rated Restaurant</button></div>
                
            </div>
            <div className="restaurant-container">
                {
                    //to write js
                    filteredRestrauntList.map((restaurant)=>{
                       return <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}> <RestaurantCard {...restaurant.info}/></Link>
                    })
                }
                
                
            </div>
            
        </div>
    )
}

export default Body;