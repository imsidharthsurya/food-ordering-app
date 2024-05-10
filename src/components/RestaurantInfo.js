import { useState,useEffect } from "react";
import {IMG_URL} from "../utils/constants"
import RestaurantInfoShimmer from "./RestaurantInfoShimmer";
import { Link, useParams } from "react-router-dom";
import RestaurantCategoryAccordion from "./RestaurantCategoryAccordion"
import { useSelector } from "react-redux";
// import useRestaurantInfo from "../utils/useRestaurantInfo";
import star from "../img/star.png"
import {REST_INFO_URL} from "../utils/constants"

const RestaurantInfo=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    let totalMoney=0;
    cartItems.map((cartItem)=>{
        totalMoney+=Number(cartItem.price/100)
    })
    console.log("total money in rest-info is: ",totalMoney)
    const {resId}=useParams();//destructuring on the fly
    const [restInfo,setRestInfo]=useState(null);
    // console.log(resId)
    const [accordionIndex,setAccordionIndex]=useState(null)

    useEffect(()=>{
        fetchRestInfo();
    },[])

    //before fetchRestInfo
    const fetchRestInfo=async ()=>{
        // const restdata=await fetch(REST_INFO_URL+resId);
        // const locData=await fetch(LOCATION_URL);
        // const jsonLoc=await locData.json();
        // const {lat,lon}=jsonLoc
        navigator.geolocation.getCurrentPosition(async(position) => {
            let late = position.coords.latitude;
            let long = position.coords.longitude;
            const jsonLoc={lat:late,lon:long};
            console.log("the latitude & longitude is: ",jsonLoc)
            const {lat,lon}=jsonLoc;
            console.log("url to get restrauntInfo is: ",REST_INFO_URL+`lat=${lat}&lng=${lon}&restaurantId=${resId}`)
            const restdata=await fetch(REST_INFO_URL+`lat=${lat}&lng=${lon}&restaurantId=${resId}`);
            const json=await restdata.json();
            setRestInfo(json.data.cards);//array of restaurant data
        },async(error)=>{
            console.log("unable to access the location")
            //in this case we'll hardcode the latitude & longitude to make the api call
            let late = "17.3724";
            let long = "78.4378";
            const jsonLoc={lat:late,lon:long};
            console.log("the latitude & longitude is: ",jsonLoc)
            const {lat,lon}=jsonLoc;
            console.log("url to get restrauntInfo is: ",REST_INFO_URL+`lat=${lat}&lng=${lon}&restaurantId=${resId}`)
            const restdata=await fetch(REST_INFO_URL+`lat=${lat}&lng=${lon}&restaurantId=${resId}`);
            const json=await restdata.json();
            setRestInfo(json.data.cards);//array of restaurant data
        })
        // console.log(lat,lng)
        // console.log(resId)
        // console.log("url to get restrauntInfo is: ",REST_INFO_URL+`lat=${lat}&lng=${lon}&restaurantId=${resId}`)
        // const restdata=await fetch(REST_INFO_URL+`lat=${lat}&lng=${lon}&restaurantId=${resId}`);
        // const json=await restdata.json();
        // setRestInfo(json.data.cards);//array of restaurant data
    }

    //after fetchrestInfo

    if(restInfo===null){
        return <RestaurantInfoShimmer/>
    }
    
    //filter out all the listItem categories to display the item menu
    let categoryIndex=0;
    for(var i=0;i<restInfo.length;i++){
        if(restInfo[i].groupedCard){
            categoryIndex=i;
            break;
        }
    }
    console.log("category index is: ",categoryIndex)
    const categories=restInfo[categoryIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>{
        return item.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" || item.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    console.log("categories is: ",categories)

    return (
        <div className="w-[70%] mt-12 mx-auto">
            <div className="restaurant-info-main-div">
                <div className="flex justify-between">
                    <div>
                        <h2 className="rest-name font-bold text-xl">{restInfo[2].card.card.info.name}</h2>
                        <p className="rest-details text-sm font-light mt-2">{restInfo[2].card.card.info.cuisines.join(", ")}</p>
                        <p className="rest-details text-sm font-light">{restInfo[2].card.card.info.locality +", "+restInfo[2].card.card.info.sla.lastMileTravelString}</p>
                        {restInfo[2].card.card.info.feeDetails.message?<p className="rest-details text-sm font-light mt-4"><img src={IMG_URL+restInfo[2].card.card.info.feeDetails.icon} className="rest-delivery-logo w-6 inline"/><div dangerouslySetInnerHTML={{ __html: " "+restInfo[2].card.card.info.feeDetails.message }} />; </p>:null}
                    </div>
                    <div className="inline-block p-2 border border-gray-300 border-solid h-20">
                        <img src={star} className="inline-block w-5 relative bottom-0.5"/><span className="inline-block text-green-700 font-bold">&nbsp;{restInfo[2].card.card.info.avgRatingString}</span>
                        <hr className="my-2"/>
                        <p className="text-xs text-gray-500 font-semibold tracking-tighter">{restInfo[2].card.card.info.totalRatingsString}</p>
                        
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
            {
                cartItems.length!==0 && 
                <Link to="/cart"><div className="bg-[#60B246] flex justify-between p-3 fixed bottom-1 w-[70%] hover:cursor-pointer">
                    <p className="text-white text-sm font-bold">{cartItems.length} Items | ₹ {totalMoney}</p>
                    <p className="text-white font-bold">VIEW CART <img className="inline w-4 relative bottom-0.5" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/ChatbotAssets/Checkout_Cart" alt="cart-logo"/></p>
                </div></Link>
            }
        </div>
    )
}
export default RestaurantInfo;