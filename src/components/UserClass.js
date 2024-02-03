import {Component} from "react"
class UserClass extends Component{

    constructor(props){
        super(props);
        this.state={
            count1:1,
            count2:2
        }
    }
    render(){
        const {name,location}=this.props
        return (
            <div className="user-info">
                <h1>Count1: {this.state.count1}</h1>
                <h1>Count2: {this.state.count2}</h1>
                <h3>Name: {name}</h3>
                <p>Location: {location}</p>
                <p>Contact: sid2op</p>
            </div>
        )
    }
}

export default UserClass;