import { useState, useEffect } from "react";
import { RES_API } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]); //All restaurants
  // console.log(listOfRestaurants);

  useEffect(() => {
    getRestaurants(); // fetch restaurants list
  }, []);

  //get restaurants List
  const getRestaurants = async () => {
    //making api call
    const restaurantList = await fetch(RES_API);
    const jsonResData = await restaurantList.json();
    // console.log(jsonResData);

    // set restaurants list
    setlistOfRestaurants(
      jsonResData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return listOfRestaurants;
};

export default useRestaurantList;
