import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems)
    return(
        <div className="w-8/12 border border-black mt-20 mx-auto">
            {cartItems.length===0 && <h1 className="text-red-400 text-xl">No items in the cart please add some. <Link to="/" className="text-blue-400 font-semibold">Click here to Explore the restaurants</Link></h1>}
            {cartItems.map((item)=>{
                return <div>
                <h1>{item.name}</h1>
                <h1>₹ {item.price/100}</h1>
                </div>
            })}
        </div>
    )
}

export default Cart;