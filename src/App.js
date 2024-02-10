import React,{lazy,Suspense,useState,useEffect} from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import ErrorPage from "./components/ErrorPage"
import NewHeader from "./components/NewHeader"
import RestaurantInfo from "./components/RestaurantInfo"
import UserContext from "./utils/UserContext"
// import Grocery from "./components/Grocery"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
//lazy loading Grocery component
const Grocery=lazy(()=>import("./components/Grocery"));
const AppLayout=()=>{
    const [naamOfUser,setNaamOfUser]=useState();
    useEffect(()=>{
        //api call to authenticate the user & after that set details
        const data={
            naam:"sidharth log"
        }
        setNaamOfUser(data.naam);
    },[])
    return (
        <UserContext.Provider value={{userName:naamOfUser,setNaamOfUser}}>
        <div className="main">
            <NewHeader/>
            <Outlet/>
            <Footer/>
        </div>
        </UserContext.Provider>
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