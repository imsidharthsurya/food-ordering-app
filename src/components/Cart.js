import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {clearCart} from "../utils/cartSlice"
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return(
        <div className="w-8/12 border border-black mt-20 mx-auto">
            {cartItems.length===0 && <h1 className="text-red-700 text-xl">No items in the cart please add some. <Link to="/" className="text-blue-800 font-semibold">Click here to Explore the restaurants</Link></h1>}
            {cartItems.map((item)=>{
                return <div>
                <h1>{item.name}</h1>
                <h1>₹ {item.price/100}</h1>
                </div>
            })}
           {cartItems.length!==0 && <button className="p-3 font-medium bg-red-300 hover:shadow-md border border-black rounded-md" onClick={handleClearCart}>Clear Cart</button>}
        </div>
    )
}

export default Cart;