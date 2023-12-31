import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilterRestaurant] = useState([]);
    const [searchText,setSearchText]=useState("");

    useEffect(() => {
        fetchData();

    }, [])

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);

        setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);

    }

    


    return listOfRestaurants.length === 0 ? <Shimmer />:(
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box"  value={searchText} onChange={(e)=>{setSearchText(e.target.value);
                }}
                />
                <button onClick={()=>{
                    console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilterRestaurant(filteredRestaurant);
                    
                }} >search</button>
              </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setListOfRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard Key={restaurant.data.id} resData={restaurant} />
                ))};
            </div>
        </div>
    );
};

export default Body;