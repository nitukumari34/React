import { LOGO_URL } from "../utils/Constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("login");

  const onlineStatus=useOnlineStatus();

    // useEffect(() => {
    //     console.log("useeffect called");

    // }, [btnNameReact])

    // console.log("header")


    return (
        <div className="flex justify-between bg bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 " >
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus ? "✔" :"🧡"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"> <Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contactus">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
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