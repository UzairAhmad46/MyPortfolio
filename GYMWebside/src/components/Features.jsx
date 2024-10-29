import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from "../assets/images/1.svg";
import fimage2 from "../assets/images/2.svg";
import fimage3 from "../assets/images/3.svg";
import fimage4 from "../assets/images/4.svg";

const Features = () => {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
        <Featurebox image={fimage1} title="WeightLifting" />
        <Featurebox image={fimage2} title="Specific" />
        <Featurebox image={fimage3} title="Flex Your Muscle" />
        <Featurebox image={fimage4} title="Cardio Exercise" />
      </div>
    </div>
  );
};

export default Features;
