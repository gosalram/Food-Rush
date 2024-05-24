import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, areaName, avgRating, costForTwo } =
    resData?.info;
  const { lastMileTravelString, deliveryTime } = resData?.info.sla;

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
    </div>
  );
};

export default RestaurentCard;
