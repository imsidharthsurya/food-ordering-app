import {useState,useEffect} from "react"
import {IMG_URL,REST_INFO_URL} from "../utils/constants"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
const RestaurantInfo=()=>{
    const {resId}=useParams();//destructuring on the fly
    // console.log(resId)
    const restInfo=useRestaurantInfo(resId)
    // console.log("restInfo is: ",restInfo)

    //move shimmer ui above b/c we're setting restMenu from restInfo so if restInfo null better return first shimmer otherwise won't be able to set the restMenu
    if(restInfo===null){
        return <Shimmer/>
    }
    
    let restMenu=[];
    
    //b/c in api sometimes on index 1st carousel is coming rather than recommended
    if(restInfo[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title==="Recommended"){
        restMenu=restInfo[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
    }else{
        restMenu=restInfo[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    }

    return (
        <div className="restaurant-info-main-div">
            <h2 className="rest-name">{restInfo[0].card.card.info.name}</h2>
            <p className="rest-details">{restInfo[0].card.card.info.cuisines.join(", ")}</p>
            <p className="rest-details">{restInfo[0].card.card.info.locality +", "+restInfo[0].card.card.info.sla.lastMileTravelString}</p>
            <p className="rest-details"><img src={IMG_URL+restInfo[0].card.card.info.feeDetails.icon} className="rest-delivery-logo"/>{" "+restInfo[0].card.card.info.feeDetails.message} </p>
            <h3 className="recommended-item">Recommended {"("+restMenu.length+")"}</h3>
            <ul>
                 { 
                    restMenu.map((rec)=>{
                        return <div className="rest-menu-info-div">
                                <li className="rest-menu-list">
                                    <div className="rest-info">
                                        {
                                            (rec.card.info.itemAttribute.vegClassifier==="NONVEG")?<img className="nonveg-logo" src={"https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"} alt="nonveg"/>:<img className="veg-logo" src={"https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg"} alt="veg"/>
                                        }
                                        <p className="item-name">{rec.card.info.name} </p>
                                        <p> ₹{rec.card.info.price/100 || rec.card.info.variantsV2.variantGroups[0].variations[0].price}</p>
                                        <p className="item-desc">{rec.card.info.description}</p>
                                    </div>
                                    <div className="rest-img-div">
                                        <img className="rest-info-img" src={IMG_URL+rec.card.info.imageId}/>
                                    </div>
                                
                               </li>
                               <hr className="hr-line"/>
                               
                            </div>
                    })

                }
                
            </ul>
        </div>
    )
}
export default RestaurantInfo;