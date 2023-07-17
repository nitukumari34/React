import { CDN_URL } from "../utils/Constant";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData?.data;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 ">
            <img
                className="rounded-lg"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-4">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;