import React from "react";
import aboutimage from "../assets/images/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          saepe minus blanditiis ad alias voluptate earum temporibus, fuga vel
          soluta dicta incidunt delectus vero hic.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default About;
