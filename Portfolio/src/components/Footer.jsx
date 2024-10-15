import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr />
      <>
        <div className="py-12">
          <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-col items-center justify-center ">
              <div className="flex space-x-4">
                <FaFacebookF size={24} />
                <FiInstagram size={24} />
                <FaLinkedinIn size={24} />
                <FaGithub size={24} />
              </div>
              <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center w-[400px]">
                <p className="text-sm ">
                  &copy;2024 Company. All rights reserved.
                </p>
                <p className="text-sm ">Supportive Partner 💗 Uzair</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Footer;
