import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const AppLayout=()=>{
    return (
        <div className="main">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const router=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },

])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router}/>)