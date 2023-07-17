import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("parent constructor");
    }

    componentDidMount() {
        console.log("parent componentDidMount");
    }
    render() {
        console.log("parent render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>

                {/* <User name={"Nitu kumari (function)"} /> */}
                <UserClass name={"Nitu (class)"} location={"Ranchi"} />
                <UserClass name={"Priyes (class)"} location={"bangluru"} />
            </div>
        );
    }
};

export default About;

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>

//             <User name={"Nitu kumari (function)"} />
//             <UserClass name={"Nitu (class)"} location={"Ranchi"} />
//         </div>
//     );
// };

// export default About;