import PropTypes from "prop-types";
import Features from "./Features";
const PriceOption = ({ priceOption }) => {
  const { name, features, price, validity_period } = priceOption;
  return (
    <div className="bg-slate-100 text-center p-6 rounded-2xl shadow-md flex flex-col">
      <h2>
        <span className="text-5xl font-semibold">{price} </span>
        <span className="text-2xl">{validity_period}</span>
      </h2>
      <h3 className="text-3xl my-4 font-medium">{name}</h3>
      <div className="text-start flex-grow">
        {features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
      </div>
      <button className="bg-green-500 rounded-lg w-full py-2 text-white text-xl font-medium mt-4">
        Purchase
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  priceOption: PropTypes.object,
};
export default PriceOption;
