import React, { useState } from "react";
import CardsDetails from "./CardsDetails";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown  } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  const categoriesName = [
    "All",
    "Popular",
    "Extensions & Apps",
    "Calendars",
    "Sales & CRM",
    "Video conferencing",
    "Marketing",
    "Recruiting & ATS",
    "Payment",
    "Analytics",
    "API & Connectors",
    "Email Messaging",
    "Embed Calendly",
    "Other integrations",
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex w-full py-8 px-12 max-xl:px-6 max-sm:flex-col max-sm:px-2">
      <div className=" w-3/12 max-lg:w-4/12 max-md:w-5/12 max-sm:w-full py-4 px-8 max-xl:px-6 max-sm:flex justify-between">
        <h2 className="text-lg font-bold max-sm:text-xl">Categories</h2>
        <div className="mt-10 max-sm:hidden">
          <ul className="flex flex-col gap-y-1">
            {categoriesName.map((names, index) => (
              <li
                className="text-sm hover:bg-blue-600 px-4 max-xl:px-3 max-xl:w-full py-2 w-3/4 rounded-lg hover:text-white"
                key={index}
              >
                {names}
              </li>
            ))}
          </ul>
        </div>
        {/* dropdown */}
        <div className="max-sm:block hidden">
          <div className="dropdown inline-block relative cursor-pointer">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded inline-flex items-center"
              type="button"
              id="dropdownMenu2"
              onClick={toggleDropdown}
            >
              <FontAwesomeIcon className="text-xs" icon={faAngleDown} />
            </button>
            <ul
              className={`dropdown-menu ${
                isOpen ? "block" : "hidden"
              } text-gray-700 pt-1 absolute -left-36  bg-white z-10 max-h-60 overflow-y-auto  rounded-lg shadow-lg`}
              aria-labelledby="dropdownMenu2"
            >
              {categoriesName.map((names, index) => (
              <li
                className="text-sm hover:bg-blue-600 px-4  py-2 rounded-lg hover:text-white"
                key={index}
              >
                {names}
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-9/12 max-lg:w-8/12 max-md:w-7/12 py-4 px-8 max-sm:px-4 max-sm:w-full">
        <p className="text-xs">
          Viewing: <span className="font-semibold">15 Popular</span>
        </p>
        <div className="flex justify-evenly max-sm:justify-center ">
          <div className="grid mt-4 max-xl:grid-cols-3 max-lg:grid-cols-2 xl:grid-cols-4 max-md:grid-cols-1  gap-10 max-sm:gap-6 max-sm:grid-cols-1">
            {CardsDetails.map((card) => (
              <Card
                key={uuidv4()}
                src={card.src}
                title={card.title}
                description={card.info}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
