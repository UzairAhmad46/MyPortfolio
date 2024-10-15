import React from "react";
import Img from "../assets/images/profile.jpg";
const About = () => {
  return (
    <>
      <div name="About" className=" py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
          <h2 className="text-4xl font-bold text-center mb-12">About Me </h2>
          <div className="flex flex-col md:flex-row  item-center md:space-x-12 order-1  ">
            <img
              src={Img}
              alt=""
              className="w-72 h-80 rounded object-cover  mb-8  md:mb-0 "
            />
            <div className="flex-1">
              <p className="text-lg mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit ducimus pariatur ex, quis hic ab nisi ut. Sunt,
                aspernatur labore exercitationem vero corporis alias,
                blanditiis, Similique voluptatem, sed vitae quidem saepe iure.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus, ipsum.
              </p>
              <div className="space-y-4  ">
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    HTML & CSS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 z-0">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12 "></div>
                  </div>
                </div>
                <div className="flex items-center ">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    Java Script
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 z-0">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12 "></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    React Js
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 z-0">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12 "></div>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex justify-between text-center">
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    1+
                  </h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
