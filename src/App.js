import React,{lazy,Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import ErrorPage from "./components/ErrorPage"
import NewHeader from "./components/NewHeader"
import RestaurantInfo from "./components/RestaurantInfo"
// import Grocery from "./components/Grocery"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
//lazy loading Grocery component
const Grocery=lazy(()=>import("./components/Grocery"));
const AppLayout=()=>{
    return (
        <div className="main">
            <NewHeader/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const router=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Body/>,
                errorElement:<ErrorPage/>
            },
            {
                path:"/about",
                element:<About/>,
                errorElement:<ErrorPage/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h3>Loading...</h3>}><Grocery/></Suspense>,
                errorElement:<ErrorPage/>
            },
            {
                path:"/contact",
                element:<Contact/>,
                errorElement:<ErrorPage/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantInfo/>
            }
        ]
    }

])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router}/>)