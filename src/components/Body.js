import {useState,useEffect,useContext} from "react"
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

import UserContext from "../utils/UserContext";
const Body=()=>{
    
    const{userName,setNaamOfUser}=useContext(UserContext)
    
    const [filteredRestrauntList,setFilteredRestrauntList]=useState([])
    let restaurantList=useRestaurantList(setFilteredRestrauntList);
    const [searchRestaurantName,setSearchRestaurantName]=useState("")
    
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
     {console.log("component rendered")}
     {console.log("value of restrauntList is: ",restaurantList)}
     {console.log("value of filteredRestraunt is: ",filteredRestrauntList)}
    return(restaurantList.length===0)?(<>
        <Shimmer/>   
    </>): (
        <div className="body">
            <div className="search flex items-center">
                <div className="search-rest md:m-10 ml-5">
                    <input type="text" className="border border-solid border-black p-1 md:px-2 md:py-1 rounded-md" placeholder="search" value={searchRestaurantName} onChange={(e)=>{
                        setSearchRestaurantName(e.target.value)
                        
                    }}/>
                    <button className="search-btn ml-3 mr-8 bg-orange-200 p-1 md:px-3 md:py-1 rounded-md hover:shadow-md" onClick={()=>{
                        searchRestaurant(searchRestaurantName);
                    }}>Search</button>
                </div>
                <div className="filter-rest">
                <button className="filter bg-orange-200 p-1 md:px-3 md:py-2 rounded-lg hover:shadow-md" onClick={()=>{
                    const temp=restaurantList.filter((restaurant)=>{
                        return restaurant.info.avgRating>4.3;
                    })
                    setFilteredRestrauntList(temp)
                }}>Top Rated Restaurant</button></div>

                {/* taking name of context using input box data */}
                {/* <div className="search-rest md:m-10 ml-5">
                    <label>UserName: </label>
                    <input type="text" className="border border-solid border-black p-1 md:px-2 md:py-1 rounded-md"  value={userName} onChange={(e)=>{
                    setNaamOfUser(e.target.value)
                }}/>
                </div> */}
                
            </div>
            {
                    filteredRestrauntList.length===0 && <h1 className="text-center text-red-500 mt-20 font-semibold text-lg">No Restaurants Found !</h1>
            }
            <div className="restaurant-container flex flex-wrap sm:ml-9 ml:8 mt-10">
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