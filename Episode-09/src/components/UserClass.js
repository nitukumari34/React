
import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "nitu",
                location: "ranchi",
                avatar_url: "https://avatars.githubusercontent.com/u/119953736?v=4"
            }
        };
        // console.log(props);
        console.log(" child constructor")
    };

    // async componentDidMount() {
    //     const data = await fetch("https://api.github.com/users/nitukumari34");
    //     const json = await data.json();
    //     this.setState({
    //         userInfo: json
    //     });
    //     console.log(json);
    // }

    componentDidMount() {
        // this.timer= setInterval(()=>{
        //     console.log("componentdidmount");

        // },1000)

    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    };

    componentWillUnmount() {
        clearInterval(this.timer)
       
    }
    render() {

        const { name, location, avatar_url } = this.state.userInfo;

       
        return (
            <div className="user-card">
                <img src={avatar_url} alt="" />
               
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: nituspj032001@gmail.com</h4>

            </div>
        )
    }
}

export default UserClass;