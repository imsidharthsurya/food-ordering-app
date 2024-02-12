import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {clearCart} from "../utils/cartSlice"
const Cart=()=>{
    let totalMoney=0;
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return(
        <div className="md:w-6/12 border border-black mt-20 mx-auto">
            {cartItems.length===0 && 
                <div>
                    <h1 className="text-xl font-semibold text-center">Your cart is empty.</h1>
                    <p className="text-xs text-slate-600 tracking-wider text-center mt-2">You can go to home page to view more restaurants</p>
                    <button className="bg-orange-500 text-white py-2 px-4 mt-7 ml-[30%] hover:shadow-md"><Link to="/" className="font-semibold">SEE RESTAURANTS NEAR YOU</Link></button>
                    
                 </div>   
            }
            {cartItems.map((item)=>{
                totalMoney+=Number(item.price/100)
                return <div className="flex justify-between m-4">
                <div className="flex">    
                   { item?.itemAttribute?.vegClassifier === "NONVEG" ? (
                        <img
                        className="nonveg-logo w-5 object-cover"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"
                        alt="nonveg"
                        />
                    ) : (
                        <img
                        className="veg-logo w-5 h-5"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Indian-vegetarian-mark.svg"
                        alt="veg"
                        />
                    )}
                    <h1 className="ml-2">{item.name}</h1>
                </div>
                <h1>₹ {item.price/100}</h1>
                
                </div>
            })}
            {cartItems.length!==0 && <h1 className="text-right mr-4 font-bold text-lg">To Pay: ₹{totalMoney}</h1>}
           {cartItems.length!==0 && <button className="p-3 font-medium bg-orange-500 hover:shadow-md rounded-md ml-[40%] mt-5 hover:text-white hover:border-white" onClick={handleClearCart}>Clear Cart</button>}
        </div>
    )
}

export default Cart;