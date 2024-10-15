import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";

import { ReactTyped } from "react-typed";
import Pic from "../assets/images/photo.avif";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container  mx-auto xl:px-20 px-4 my-20 "
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:mt-24 mt-24   space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed </span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-red-700 font-bold "> Developer </span> */}
              <ReactTyped
                strings={["Coder", "Desiner"]}
                typeSpeed={40}
                className="text-red-700 font-bold"
                backSpeed={50}
                loop={"ture"}
              />
            </div>
            <p className="text-sm md:text-md text-justify  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              libero optio quia eum nobis! Dicta, iste totam. Rem rerum
              laboriosam veritatis tempore deserunt distinctio asperiores
              reiciendis amet earum. Provident fugit autem eaque impedit facilis
              ratione alias nobis libero quisquam recusandae?
            </p>
            <br />

            {/* social icons */}
            <div className="flex flex-col items-center md:flex-row space-y-6 md:space-y-0  justify-between ">
              <div className="space-y-2  ">
                <h1 className="font-bold">Avaliable On </h1>
                <ul className="flex space-x-4 mt-2">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/home.php?ref=wizard"
                    >
                      <FaFacebookF className="text-2x cursor-pointer hover:scale-105" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/uzairpassha/"
                    >
                      <FiInstagram className="text-2x cursor-pointer hover:scale-105" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://github.com/UzairAhmad46">
                      <FaGithub className="text-2x cursor-pointer hover:scale-105" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/uzair-ahmad-3992332a9/"
                    >
                      <FaLinkedinIn className="text-2x cursor-pointer hover:scale-105" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1>Currently Working On</h1>
                <ul className="flex space-x-4 mt-2">
                  <li>
                    <FaHtml5 className="text-xl  md;text-3xl hover:scale-110   cursor-pointer  duration-200 rounded-full  " />
                  </li>
                  <li>
                    <FaCss3 className="text-xl   md;text-3xl hover:scale-110   cursor-pointer  duration-200 rounded-full  " />
                  </li>
                  <li>
                    <IoLogoJavascript className="text-xl  md;text-3xl hover:scale-110   cursor-pointer  duration-200 rounded-full  " />
                  </li>
                  <li>
                    <FaReact className="text-xl  md;text-3xl hover:scale-110   cursor-pointer  duration-200 rounded-full  " />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8    MyClass">
            <img
              src={Pic}
              className="rounded-full md:w-[450px]  md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
};

export default Home;
