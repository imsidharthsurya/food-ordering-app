// import mypic from "../img/mypic.jpg"
import mypic1 from "../img/mypic1.jpg"
import insta from "../img/insta.png"
import linkedin from "../img/linkedin.png"
import github from "../img/github.png"

const NewAbout=()=>{
    return (
        <div>
            <div className="max-w-md bg-white p-8 rounded-md shadow-md mt-12 mx-auto">
        {/* <!-- Profile Picture --> */}
        <div className="flex items-center justify-center mb-4">
            <img src={mypic1} alt="Sidharth pic" className="w-20 h-20 object-cover rounded-full"/>
        </div>

        {/* <!-- Brief About Me --> */}
        <h1 className="text-gray-700 mb-4">
        Hello! I'm <strong>Sidharth Surya</strong>, a committed <strong>MERN Stack Developer</strong> currently working at IDFC FIRST BANK. Eager to contribute to innovative projects and expand my knowledge!
        </h1>

        {/* <!-- Social Media Links --> */}
        <div className="flex justify-center items-center">
            {/* <!-- LinkedIn Profile --> */}
            <a href="https://www.linkedin.com/in/sidharth-surya/" target="_blank" className="text-blue-500 hover:text-blue-700 mx-6">
                
                <img src={linkedin} alt="LinkedIn-logo" className="w-7 items-center inline-block"/>
            </a>

            {/* <!-- GitHub Profile --> */}
            <a href="https://github.com/imsidharthsurya" target="_blank" className="text-blue-500 hover:text-blue-700 mx-6">
                
               <img src={github} alt="github-logo" className="w-7 items-center inline-block"/> 
            </a>
            <a href="https://www.instagram.com/sid2op/" target="_blank" className="text-blue-500 hover:text-blue-700 mx-6">
                
               <img src={insta} alt="insta-logo" className="w-7 items-center inline-block"/> 
            </a>
        </div>
    </div>
        </div>
    )
}

export default NewAbout;