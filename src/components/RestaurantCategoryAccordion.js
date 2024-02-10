import AcordianBody from "./AcordianBody"
import { useState } from "react";
const RestaurantCategoryAccordion=({data,showAccordion,setAccordionIndex,hideAllAccordion})=>{
    // console.log(data)
    let allMenu=[];
    // const [showAccordion,setShowAcordion]=useState(false)
    function toggleAcordian(){
        // setShowAcordion(!showAccordion)
        if(showAccordion){
            hideAllAccordion()
        }else{
            setAccordionIndex()
        }
    }
    if(data["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
        // allMenu=data.itemCards
        for(var i=0;i<data.itemCards.length;i++){
            allMenu.push(data.itemCards[i].card.info)
        }
    }else{
        for(var i=0;i<data.categories.length;i++){
            for(var j=0;j<data.categories[i].itemCards.length;j++){
                allMenu.push(data.categories[i].itemCards[j].card.info)
            }
        }
    }
    
    return (
        <div className="mt-20">
            {/* RestaurantCategoryAccordion */}
            <div className="my-4">
                <div className="flex justify-between shadow-sm p-4 cursor-pointer" onClick={toggleAcordian}>
                    <span className="font-bold text-lg">{data.title+"("+allMenu.length+")"}</span>
                    <span>{showAccordion?"⬆️":"⬇️"}</span>
                </div>
                {showAccordion && <AcordianBody menuData={allMenu}/>}
            </div>
        </div>
    )
}

export default RestaurantCategoryAccordion;