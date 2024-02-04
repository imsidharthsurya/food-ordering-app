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
            <div className="user-info">
                <h3>Name: {this.state.userInfo.name}</h3>
                <p>Location: {this.state.userInfo.location}</p>
                <img src={this.state.userInfo.avatar_url}/>
                <p>Contact: sid2op</p>
            </div>
        )
    }
}

export default UserClass;