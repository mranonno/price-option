import PropTypes from "prop-types";
import { MdCheckCircle } from "react-icons/md";
const Features = ({ feature }) => {
  return (
    <p className="flex items-center gap-3">
          <MdCheckCircle className="text-green-500" />
          <span>{feature}</span>
    </p>
  );
};

Features.propTypes = {
  feature: PropTypes.string,
};

export default Features;
