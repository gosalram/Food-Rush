import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useRestaurantCard from "../utils/useRestaurantCard";
import { useState, useEffect } from "react";
import { RES_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  //Local state variable = Supur powerful variable
  const [listOfRestaurant, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  // console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);

    const json = await data.json();
    // console.log(json);
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please Check your Internet Connection</h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="filter flex ">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search restaurant"
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
              const filteredSearchList = listOfRestaurant.filter((res) =>
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
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
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
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            style={{ textDecoration: "none" }}
          >
            <RestaurentCard resData={restaurant} />
          </Link>
        ))}
        {/* restaurent cards (since reusage of it create as functional component) */}
      </div>
    </div>
  );
};
export default Body;
