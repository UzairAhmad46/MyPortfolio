import React from "react";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.jpg";
import javascript from "../assets/images/javascript.png";
import ReactJS from "../assets/images/reactjs.png";
import Tailwind from "../assets/images/tailwind.png";
import Bootstrap from "../assets/images/boostrap.jpeg";
import github from "../assets/images/github.png";

const Languages = () => {
  const cardImages = [
    {
      id: 1,
      logo: HTML,
      name: "HTML",
      description:
        "HTML (Hypertext Markup Language) is the standard language used to create content on web.It defines the structure of a webpage using various elements or'tags'.",
    },
    {
      id: 2,
      logo: CSS,
      name: "CSS",
      description:
        "CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, and spacing of the content.",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
      description:
        "JavaScript is a programming language that enables interactive web pages by allowing dynamic content and user interaction.",
    },
    {
      id: 4,
      logo: ReactJS,
      name: "ReactJS",
      description:
        "ReactJS is a popular JavaScript library for building user interfaces, especially for single-page applications.",
    },
    {
      id: 5,
      logo: Tailwind,
      name: "Tailwind",
      description:
        "Tailwind CSS is a highly popular utility-first CSS framework designed for rapid UI development. ",
    },

    {
      id: 6,
      logo: Bootstrap,
      name: "Bootstrap",
      description:
        "Bootstrap is a popular CSS framework that simplifies front-end development by offering a collection of pre-designed components . ",
    },
    {
      id: 7,
      logo: github,
      name: "github",
      description:
        "GitHub is a cloud-based platform that facilitates version control and collaboration, primarily for software development projects. ",
    },
  ];

  return (
    <>
      <div
        name="Languages"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-3"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Languages</h1>
          <span className=" font-semibold">Expirence with these languages</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
            {cardImages.map(({ id, logo, name, description }) => (
              <div
                key={id}
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg  hover:shadow-orange-50 p-1 cursor-pointer hover:scale-105 duration-300"
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
                />
                <div>
                  <div className="font-bold text-xl mb-2 px-2 text-center mt-2">
                    {name}
                  </div>
                  <p className="px-2 text-gray-600 text-center ">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Languages;
