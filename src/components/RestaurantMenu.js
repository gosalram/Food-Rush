import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  //Single responsibility Principle  : Just displaying the data(menu)
  const { resId } = useParams(); //call useParam to get value of restaurant Id(resId) using object destructuring.

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0); //for expanding accordian

  if (resInfo === null) return <Shimmer />;

  //destructuring the restaurant's menu details
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  //filtering categories
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //   console.log(categories);

  return (
    <div className="text-center">
      <h1 className="my-6 text-2xl font-bold">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(" ,")} - {costForTwoMessage}
      </p>
      <button className="text-left">Collapse all</button>
      {/* category accordians */}{" "}
      {/* Controlled component
            --------------------
                    RestaurantCategory(Child component) is a controlled component, 
                    it will expand the accordian only when it's clicked, 
                    rest accordians are collapsed based upon RestaurantMenu which is a parent component. */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.title}
          data={category?.card?.card}
          //expand the items only when we clicked, other accordians should be hided.
          showItems={index === showIndex ? true : false}
          /*
                        Lifting state up
                        -----------------
                        passing the function to set the index value in child component.
                        */
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
