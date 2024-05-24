import { useState, useEffect } from "react";
import { RES_API } from "./constants";

const useRestaurantCard = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    setJsonData(json);
  };
  return jsonData;
};

export default useRestaurantCard;
