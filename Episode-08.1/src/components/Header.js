import { LOGO_URL } from "../utils/contant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("login");
    useEffect(() => {
        console.log("useeffect called");

    }, [btnNameReact])

    console.log("header")


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> <Link to="/about">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login");
                    }}>

                        {btnNameReact}</button>

                </ul>
            </div>
        </div>
    );
};

export default Header;