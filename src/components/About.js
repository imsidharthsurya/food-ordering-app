import UserClass from "./UserClass";
const About=()=>{
    return (
        <div className="about-us">
            {/* <h1>It's me sidharth Surya.</h1>
            <h3>Developer at IDFC FIRST Bank, skilled in MERN stack.</h3> */}
            <UserClass name={"sidharth props name"} location={"HI tech city, Hyderabad"}/>
        </div>
    )
}

export default About;