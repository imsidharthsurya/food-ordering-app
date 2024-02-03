import {useState,useEffect} from "react"
import {IMG_URL} from "../utils/constants"
import Shimmer from "./Shimmer";
const RestaurantInfo=()=>{
    const [restInfo,setRestInfo]=useState(null);
    useEffect(()=>{
        fetchRestInfo();
    },[])
    const fetchRestInfo=async ()=>{
        const restdata=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4322123&lng=78.3963095&restaurantId=5974&catalog_qa=undefined&submitAction=ENTER");
        const json=await restdata.json();
        setRestInfo(json.data.cards);//array of rest data
    }
    if(restInfo===null){
        return <Shimmer/>
    }
    return (
        <div className="rest-info">
            <h2>{restInfo[0].card.card.info.name}</h2>
            <p>{restInfo[0].card.card.info.cuisines.join(", ")}</p>
            <p>{restInfo[0].card.card.info.locality +", "+restInfo[0].card.card.info.sla.lastMileTravelString}</p>
            <p><img src={IMG_URL+restInfo[0].card.card.info.feeDetails.icon} className="rest-delivery-logo"/>{" "+restInfo[0].card.card.info.feeDetails.message} </p>
            <h3>Recommended For you: </h3>
            <ul>
                {
                    restInfo[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map((rec)=>{
                        return <li>{rec.card.info.name} - ₹{rec.card.info.price/100}</li>
                    })

                }
            </ul>
        </div>
    )
}
export default RestaurantInfo;