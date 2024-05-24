import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = ()=> {                           //Single responsibility Principle  : Just displaying the data(menu)
    const {resId} = useParams();    

    const resInfo = useRestaurantMenu(resId);
    
    if (resInfo=== null) return <Shimmer/>;
    
    const {name,cuisines,costForTwoMessage} =resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;

    // console.log(itemCards);
        return  (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(" ,")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>menu</h3>  

                  {/*A tip for easy writing map function write for 1 iteration and try it
                  <li>{itemCards[0].card.info.name}</li> */}
            <ul>
                {itemCards.map((item) =>(
                <li key={item.card.info.id}> 
                {item.card.info.name} -{"Rs :"} 
                {item.card.info.price/100  || (item.card.info.defaultPrice)/100}  </li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;