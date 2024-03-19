import "./App.css";
import FlowChart from "./Components/FlowChart/FlowChart";
import Navbar from "./Components/Navbar/Navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <FlowChart></FlowChart>
    </>
  );
}

export default App;
