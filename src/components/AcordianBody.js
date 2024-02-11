import {IMG_URL} from "../utils/constants"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const AcordianBody = ({ menuData }) => {
  // console.log("in accordion body",menuData)
  const dispatch=useDispatch();
  
  const handleMenu=(item)=>{
    dispatch(addItem(item))
  }
  
  return (
    <div>
    {menuData.map((menuDetails)=>{
        return <div key={menuDetails.id} className="rest-menu-info-div mt-8">
      <li className="rest-menu-list flex justify-between">
        <div className="rest-info">
          {menuDetails.itemAttribute &&
          menuDetails.itemAttribute.vegClassifier === "NONVEG" ? (
            <img
              className="nonveg-logo w-5"
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"
              alt="nonveg"
            />
          ) : (
            <img
              className="veg-logo w-4"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg"
              alt="veg"
            />
          )}
          <p className="item-name font-semibold text-md">
            {menuDetails.name}{" "}
          </p>
          <p className="text-md font-semibold">
            {" "}
            ₹
            {menuDetails.price / 100 ||
              menuDetails.variantsV2.variantGroups[0].variations[0].price}
          </p>
          <p className="item-desc text-sm text-gray-400 mt-3">
            {menuDetails.description}
          </p>
        </div>
        <div className="rest-img-div ml-8">
          <img
            className="rest-info-img w-28 h-24 rounded-lg object-cover max-w-none"
            src={IMG_URL + menuDetails.imageId}
          />
          <button className="border px-7 py-2 text-green-600 text-xs font-semibold relative bottom-5 left-3 bg-white" onClick={()=>handleMenu(menuDetails)}>ADD</button>
        </div>
      </li>
    </div>
})}
</div>
  );
};

export default AcordianBody;
