import { CDN_URL } from "../utils/constants";
import star from "../Images/star.png";

const RestaurentCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, areaName, avgRating, costForTwo } =
    resData?.info;
  const { lastMileTravelString } = resData?.info.sla;

  return (
    <div className="res-card m-2 p-4 w-[275px] bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        className="w-[275px] h-[175px] rounded-t-lg object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-3">
        <h2 className="font-bold text-lg mb-2">{name}</h2>
        <p className="text-gray-700 mb-2 font-light">{cuisines.join(", ")}</p>
        <p className="text-gray-500 mb-2 font-extralight">{areaName}</p>
        <div className="font-semibold flex items-center justify-between text-gray-700 mb-2 text-sm">
          <span className="flex items-center">
            <img className="w-5" src={star} alt="star symbol" />
            <h4>&nbsp;{avgRating}&nbsp;•</h4>
          </span>
          <h4> {lastMileTravelString}&nbsp;•</h4>
          <h4>{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};
//Higher Order Component    for isOpen (restaurant)
// input  -Restaurant card(component) => Restaurant Card with is open label
// This higher order componet will generate a Restaurant card for us

/* export const withOpenLabel = (RestaurentCard) => {
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
}; */

export default RestaurentCard;
