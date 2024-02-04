import UserClass from "./UserClass";
import React from "react";
// const About=()=>{
//     return (
//         <div className="about-us">
//             {/* <h1>It's me sidharth Surya.</h1>
//             <h3>Developer at IDFC FIRST Bank, skilled in MERN stack.</h3> */}
//             <UserClass name={"sidharth props name"} location={"HI tech city, Hyderabad"}/>
//         </div>
//     )
// }

class About extends React.Component{

    constructor (props){
        super(props)
        console.log("parent constructor");
        this.state={}
    }
    componentDidMount(){
        console.log("parent componentDidMount")
    }
    render(){
        console.log("parent render");
        return (
            <div className="about-us">
             <UserClass name={"first"} location={"HI tech city, Hyderabad"}/>
            </div>
        )
    }
}
export default About;