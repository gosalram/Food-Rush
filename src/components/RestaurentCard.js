import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurentCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    avgRating,
    costForTwo,
    isOpen,
  } = resData?.info;
  const { lastMileTravelString, deliveryTime } = resData?.info.sla;
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="res-card m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-400 transition-all">
      {
        <img
          className="w-[275px] h-[175px] rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />
      }
      <h2 className="font-bold py-4 text-lg ">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <span>
        <h4>{avgRating}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwo}</h4>
      </span>
      <h4>{deliveryTime} minutes</h4>
      <h4>User name: {loggedInUser}</h4>
    </div>
  );
};
//Higher Order Component    for isOpen (restaurant)
// input  -Restaurant card(component) => Restaurant Card with is open label
// This higher order componet will generate a Restaurant card for us

export const withOpenLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-2 p-2 rounded-lg absolute bg-black text-white">
          Open
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
