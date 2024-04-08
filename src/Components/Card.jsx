import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, src }) => {
  return (
    <div
      className={`w-48 min-h-64 max-h-64 relative  rounded-lg shadow-md flex justify-center text-left cursor-pointer transition-transform hover:rotate-y-180`}
    >
      {/* Front Side */}
      <div className={`w-full h-full p-5 relative `}>
        <img src={src} alt="logo" className="w-14 max-h-10" />
        <h4 className="font-medium my-3">{title}</h4>
        <p className="text-xs font-light text-gray-500 leading-5">
          {description}
        </p>
        <p className="text-sm font-medium text-blue-700 absolute bottom-4 ">
          Learn More{" "}
          <FontAwesomeIcon className="font-normal" icon={faAngleRight} />
        </p>
      </div>

      {/* Flipped (Initially Hidden) */}
      <div className="bg-slate-950 bg-opacity-95 rounded-lg w-full h-full p-4 absolute top-0 left-0 text-white backface-hidden flex flex-col transform rotate-y-180 transition-transform origin-right opacity-0 hover:opacity-100">
        <p className="text-xs font-normal">BUILD WITH US</p>
        <h4 className="text-sm font-medium my-4">
          Looking to build an integration with us?
        </h4>
        <p className="text-xs font-extralight leading-4 pt-1">
          Visit our Developer Portal to explore our API docs and other
          integration resources.
        </p>
        <p className="text-sm font-medium mt-16">
          Get Started{" "}
          <FontAwesomeIcon className="font-normal" icon={faAngleRight} />
        </p>
      </div>
    </div>
  );
};

export default Card;
