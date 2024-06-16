import { useState } from "react";
import { Link } from "react-router-dom";
import RestaurentCard, { withOpenLabel } from "./RestaurentCard";
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

  const RestaurantWithLabel = withOpenLabel(RestaurentCard);

  // checking internet conection

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please Check your Internet Connection</h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="filter flex ">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            className="searchBox   border border-solid border-black"
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 m-4 bg-green-200 hover:bg-green-400 rounded-lg"
            onClick={() => {
              //Filter the restaurant card and update the UI
              const filteredSearchList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredSearchList);
              // console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 m-4 bg-gray-200 hover:bg-gray-400 rounded-lg"
            onClick={() => {
              const filteredResList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredResList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold">
          Restaurants with online food delivery in Koramangala
        </h1>
      </div>

      <div className="pl-14  pt-4 flex flex-wrap ">
        {filteredRestaurant.length > 0
          ? filteredRestaurant.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
                style={{ textDecoration: "none" }}
              >
                {/* if restaurant card is open then add label to it */}
                {restaurant.info.isOpen ? (
                  <RestaurantWithLabel resData={restaurant} />
                ) : (
                  <RestaurentCard resData={restaurant} />
                )}
              </Link>
            ))
          : listOfRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
                style={{ textDecoration: "none" }}
              >
                {restaurant.info.isOpen ? (
                  <RestaurantWithLabel resData={restaurant} />
                ) : (
                  <RestaurentCard resData={restaurant} />
                )}
              </Link>
            ))}
      </div>
    </div>
  );
};
export default Body;
