import axios from "axios";
import { useEffect, useState } from "react";
import PriceOption from "./PriceOption/PriceOption";
const PriceOptions = () => {
  const [priceOptions, setPriceOptions] = useState([]);
  useEffect(() => {
    axios.get("priceOption.json").then((res) => setPriceOptions(res.data));
  }, []);
  return (
    <div className="p-6">
      <h3>Price option container</h3>
      <div className="grid grid-cols-3 gap-5">
        {priceOptions.map(priceOption=><PriceOption key={priceOption.id} priceOption={priceOption}></PriceOption>)}
      </div>
    </div>
  );
};

export default PriceOptions;
