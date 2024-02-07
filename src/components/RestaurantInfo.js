import {IMG_URL} from "../utils/constants"
import RestaurantInfoShimmer from "./RestaurantInfoShimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import star from "../img/star.png"

const RestaurantInfo=()=>{
    const {resId}=useParams();//destructuring on the fly
    // console.log(resId)
    const restInfo=useRestaurantInfo(resId)
    // console.log("restInfo is: ",restInfo)

    //move shimmer ui above b/c we're setting restMenu from restInfo so if restInfo null better return first shimmer otherwise won't be able to set the restMenu
    if(restInfo===null){
        return <RestaurantInfoShimmer/>
    }
    
    let restMenu=[];
    
    //b/c in api sometimes on index 1st carousel is coming rather than recommended
    if(restInfo[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title==="Recommended"){
        restMenu=restInfo[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
    }else{
        restMenu=restInfo[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    }

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
            <h3 className="recommended-item text-lg mt-8 font-bold">Recommended {"("+restMenu.length+")"}</h3>
            <ul>
                 { 
                    restMenu.map((rec)=>{
                        return <div className="rest-menu-info-div mt-8">
                                <li className="rest-menu-list flex justify-between">
                                    <div className="rest-info">
                                        {
                                            (rec.card.info.itemAttribute.vegClassifier==="NONVEG")?<img className="nonveg-logo w-5" src={"https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"} alt="nonveg"/>:<img className="veg-logo w-4" src={"https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg"} alt="veg"/>
                                        }
                                        <p className="item-name font-semibold text-lg">{rec.card.info.name} </p>
                                        <p className="text-md"> ₹{rec.card.info.price/100 || rec.card.info.variantsV2.variantGroups[0].variations[0].price}</p>
                                        <p className="item-desc text-sm text-gray-400 mt-3">{rec.card.info.description}</p>
                                    </div>
                                    <div className="rest-img-div ml-8">
                                        <img className="rest-info-img w-28 h-24 rounded-lg object-cover max-w-none" src={IMG_URL+rec.card.info.imageId}/>
                                    </div>
                                
                               </li>
                               <hr className="hr-line mt-8"/>
                               
                            </div>
                    })

                }
                
            </ul>
        </div>
    )
}
export default RestaurantInfo;