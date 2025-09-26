import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { DATA_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(DATA_API_URL);
    const response_json = await response.json();
    const data =
      response_json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantData(data);
    setFilteredRestaurantData(data);
  };

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e?.target?.value)}
          />
          <button
            onClick={() => {
              const searchKey = searchText.trim().toLowerCase();

              setFilteredRestaurantData(
                restaurantData.filter((restaurant) => {
                  const restaurantName = restaurant?.info?.name;

                  if (!restaurantName) return;

                  return restaurantName
                    .trim()
                    .toLowerCase()
                    .includes(searchKey);
                })
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurantData = restaurantData.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setFilteredRestaurantData(filteredRestaurantData);
          }}
        >
          Top Rated restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurantData.map((item) => {
          const {
            id,
            name,
            cuisines,
            avgRating,
            costForTwo,
            sla,
            cloudinaryImageId,
          } = item?.info;
          const cuisine = cuisines?.join(", ");
          const deliveryTime = sla?.slaString;

          return (
            <RestaurantCard
              restaurant_name={name}
              cuisine={cuisine}
              rating={avgRating}
              costForTwo={costForTwo}
              deliveryTime={deliveryTime}
              cloudinaryImageId={cloudinaryImageId}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
