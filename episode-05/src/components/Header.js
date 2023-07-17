// import { useState } from "react-dom";
// import { LOGO_URL } from "../utils/constant";

const Header = () => {
    // const btnName="login";
    // const [btnNameReact,setBtnNameReact]=useState("login");
    // console.log(btnName);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    {/* <button className="login" onClick={() => { setBtnNameReact ="logout"}}>{btnNameReact}</button> */}
                </ul>
            </div>
        </div>
    );
};

export default Header;