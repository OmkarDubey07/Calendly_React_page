import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex items-center h-20 relative  justify-around max-md:justify-between max-md:px-5">
      <div>
        <img
          src="/Calendly.png"
          className="w-44 cursor-pointer max-lg:w-36 z-10"
          alt="logo"
        />
      </div>
      <div>
        <ul className="flex gap-7 font-medium text-base max-lg:gap-3 max-lg:text-sm max-md:hidden cursor-pointer">
          <li>Individuals</li>
          <li>Teams</li>
          <li>Enterprise</li>
          <li>
            Product
            <FontAwesomeIcon className="text-xs ml-1 mt-1" icon={faAngleDown} />
          </li>
          <li>Pricing</li>
          <li>
            Resources
            <FontAwesomeIcon className="text-xs ml-1 mt-1" icon={faAngleDown} />
          </li>
        </ul>
      </div>
      <div className="flex gap-4 text-base max-md:hidden">
        <button className="text-base font-medium max-lg:text-sm">Log In</button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 text-sm font-normal rounded-3xl  max-lg:text-xs max-lg:justify-between max-lg:font-light">
          Get Started
        </button>
      </div>
      <FontAwesomeIcon
        onClick={toggleMenu}
        className="text-xl md:hidden text-slate-900 cursor-pointer select-none"
        icon={faBars}
      />
      <div
        className={`md:hidden flex-col fixed  top-20 right-0 py-6 text-center bg-white h-fit w-full z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex gap-7 font-medium text-base max-lg:gap-3 flex-col mb-4 select-none">
          <li>Individuals</li>
          <li>Teams</li>
          <li>Enterprise</li>
          <li>
            Product
            <FontAwesomeIcon className="text-xs ml-1 mt-1" icon={faAngleDown} />
          </li>
          <li>Pricing</li>
          <li>
            Resources
            <FontAwesomeIcon className="text-xs ml-1 mt-1" icon={faAngleDown} />
          </li>
        </ul>
        <button className="text-base font-normal mr-4">Log In</button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 text-sm font-normal rounded-3xl  ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
