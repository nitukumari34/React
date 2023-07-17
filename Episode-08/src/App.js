import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
const AppLayout = () => {
    return (
        <div className="layout">
            <Header />

            <Outlet />
            {/* if path=/*/}
            {/* <Body /> */}
            {/* if psth=/about*/}
            {/* <About/> */}

            {/* IF path=/contactus*/}
            {/* <ContactUs/> */}
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contactus",
                    element: <ContactUs />
                },
                {
                    path: "/restaurant/:resid",
                    element: <RestaurantMenu />
                },

            ],
            errorElement: <Error />

        },


    ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);