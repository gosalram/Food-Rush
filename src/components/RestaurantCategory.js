import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg  ">
        <div
          className="Accordian Header flex justify-between"
          onClick={() => handleClick()}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⮟</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordian Body */}
    </div>
  );
};
export default RestaurantCategory;

//⮝
