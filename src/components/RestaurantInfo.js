import { useState,useEffect } from "react";
import {IMG_URL,LOCATION_URL} from "../utils/constants"
import RestaurantInfoShimmer from "./RestaurantInfoShimmer";
import { useParams } from "react-router-dom";
import RestaurantCategoryAccordion from "./RestaurantCategoryAccordion"
// import useRestaurantInfo from "../utils/useRestaurantInfo";
import star from "../img/star.png"
import {REST_INFO_URL} from "../utils/constants"

const RestaurantInfo=()=>{
    const {resId}=useParams();//destructuring on the fly
    const [restInfo,setRestInfo]=useState(null);
    // console.log(resId)
    const [accordionIndex,setAccordionIndex]=useState(null)

    useEffect(()=>{
        fetchRestInfo();
    },[])
    const fetchRestInfo=async ()=>{
        // const restdata=await fetch(REST_INFO_URL+resId);
        const locData=await fetch(LOCATION_URL);
        const jsonLoc=await locData.json();
        const {lat,lon}=jsonLoc
        // console.log(lat,lng)
        // console.log(resId)
        console.log("url to get restrauntInfo is: ",REST_INFO_URL+`lat=${lat}&lng=${lon}&restaurantId=${resId}`)
        const restdata=await fetch(REST_INFO_URL+`lat=${lat}&lng=${lon}&restaurantId=${resId}`);
        const json=await restdata.json();
        setRestInfo(json.data.cards);//array of restaurant data
    }

    if(restInfo===null){
        return <RestaurantInfoShimmer/>
    }
    
    //filter out all the listItem categories to display the item menu
    const categories=restInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>{
        return item.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" || item.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    console.log(categories)

    return (
        <div className="restaurant-info-main-div w-[70%] mt-12 mx-auto">
            <div className="flex justify-between">
                <div>
                    <h2 className="rest-name font-bold text-xl">{restInfo[0].card.card.info.name}</h2>
                    <p className="rest-details text-sm font-light mt-2">{restInfo[0].card.card.info.cuisines.join(", ")}</p>
                    <p className="rest-details text-sm font-light">{restInfo[0].card.card.info.locality +", "+restInfo[0].card.card.info.sla.lastMileTravelString}</p>
                    {restInfo[0].card.card.info.feeDetails.message?<p className="rest-details text-sm font-light mt-4"><img src={IMG_URL+restInfo[0].card.card.info.feeDetails.icon} className="rest-delivery-logo w-6 inline"/>{" "+restInfo[0].card.card.info.feeDetails.message} </p>:null}
                </div>
                <div className="inline-block p-2 border border-gray-300 border-solid h-20">
                    <img src={star} className="inline-block w-5 relative bottom-0.5"/><span className="inline-block text-green-700 font-bold">&nbsp;{restInfo[0].card.card.info.avgRatingString}</span>
                    <hr className="my-2"/>
                    <p className="text-xs text-gray-500 font-semibold tracking-tighter">{restInfo[0].card.card.info.totalRatingsString}</p>
                    
                </div>
            </div>
            <hr className="mt-8"/>
            {/* below this we'll build accordion reading from categories array */}
            {/* for this map over all the categories item & for each item we'll show one accordion */}
            
            {
                categories.map((category,index)=>{
                   return <RestaurantCategoryAccordion key={category.card.card.title} data={category.card.card} 
                        showAccordion={index===accordionIndex?true:false}
                        setAccordionIndex={()=>{
                            setAccordionIndex(index)
                        }}
                        hideAllAccordion={()=>{
                            setAccordionIndex(null)
                        }}/>
                })
            }
        </div>
    )
}
export default RestaurantInfo;