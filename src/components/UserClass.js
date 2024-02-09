import {Component} from "react"
class UserClass extends Component{

    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"dummy name",
                location:"default location"
            }
        }
        // console.log(this.props.name+" child constructor")
    }

    async componentDidMount(){
        // console.log(this.props.name+" child componentDidMount")
        const data=await fetch("https://api.github.com/users/imsidharthsurya");
        const json=await data.json();
        console.log(json)
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(){
        console.log("component did update called")
    }
    componentWillUnmount(){
        console.log("component umounted")
    }

    render(){
        // console.log(this.props.name+" child render")
        // debugger;
        return (
            <div className="user-info flex sm:mx-auto sm:w-[50%] mt-8 ml-8">
                <img className="user-pic w-36" src={this.state.userInfo.avatar_url}/>
                <div className="user-details ml-6 mt-8">
                    <h3><strong className="text-lg">Name:</strong> {this.state.userInfo.name}</h3>
                    <p><strong className="text-lg">Location:</strong> {this.state.userInfo.location}</p>
                    
                    <p><strong className="text-lg">Contact:</strong> @sid2op</p>
                </div>
            </div>
        )
    }
}

export default UserClass;