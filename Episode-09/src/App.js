import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Grocery from "./components/Grocery";
// import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";


const grocery = lazy(() => import("./components/Grocery"))
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
                    path: "/grocery",
                    element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense> 
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