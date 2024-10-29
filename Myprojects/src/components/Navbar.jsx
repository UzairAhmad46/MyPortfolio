// import React, { useState } from "react";
// import "./navbar.css";
// import { menuItem } from "./MenuItem";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [clicked, setClicked] = useState(false);
//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <>
//       <nav className="NavbarItems">
//         <h1 className="navbar-logo">Trippy</h1>
//         <div className="menu-icons">
//           <i
//             onClick={handleClick}
//             className={clicked ? "fas fa-times" : "fas fa-bars"}
//           ></i>
//         </div>
//         <ul className={clicked ? "nav-menu active" : "nav-menu"}>
//           {menuItem.map((item, index) => {
//             return (
//               <>
//                 <li key={index}>
//                   <Link className={item.cName} to={item.url}>
//                     <i className={item.icon}></i>
//                     {item.title}
//                   </Link>
//                 </li>
//               </>
//             );
//           })}
//           <button>Sign Up</button>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./navbar.css";
import { menuItem } from "./MenuItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {menuItem.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
        <button className="nav-signup">Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
