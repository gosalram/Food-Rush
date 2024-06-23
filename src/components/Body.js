import { useState } from "react";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  //Local state variable = Super powerful variable
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //filtered retaurants
  const [searchText, setsearchText] = useState("");
  const onlineStatus = useOnlineStatus(); //fetching online status through custom hook
  const listOfRestaurants = useRestaurantList() || []; //fetching restaurants list  through custom hook
  // console.log(listOfRestaurants);

  // const RestaurantWithLabel = withOpenLabel(RestaurentCard);

  // checking internet conection

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-red-500 mt-10">
        Looks like you're offline!! Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-4">
      <div className="filter flex flex-col items-center mb-6">
        <div className="search flex items-center mb-4 font-semibold">
          <input
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            className="searchBox border border-solid border-black rounded-lg px-4 py-2"
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="ml-4 bg-gray-200 hover:bg-amber-500 text-black hover:text-white rounded-lg px-8 py-3 transition-colors"
            onClick={() => {
              const filteredSearchList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredSearchList);
            }}
          >
            Search
          </button>
          <button
            className="ml-4 bg-gray-200 hover:bg-amber-500 text-black hover:text-white rounded-lg px-8 py-3 transition-colors"
            onClick={() => {
              const filteredResList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredResList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Restaurants with online food delivery in Koramangala
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {filteredRestaurant.length > 0
          ? filteredRestaurant.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.id}`}
                className="no-underline"
              >
                <RestaurentCard resData={restaurant} />
              </Link>
            ))
          : listOfRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.id}`}
                className="no-underline"
              >
                <RestaurentCard resData={restaurant} />
              </Link>
            ))}
      </div>
    </div>
  );
};
export default Body;
