import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL + props.cloudinaryImageId}
        alt="restaurant-logo"
        className="restaurant-logo"
      />
      <h3>{props.restaurant_name}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating} stars</h4>
      <h4>{props.costForTwo}</h4>
      <h4>{props.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
