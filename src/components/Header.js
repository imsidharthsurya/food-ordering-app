import {LOGO_URL} from "../utils/constants"
const Header=()=>{
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" alt="taaza-kitchen.png" src={LOGO_URL}/>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;