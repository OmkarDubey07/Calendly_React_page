import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FooterList } from "./FooterList";

const FooterItem = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h5 className="text-base font-semibold">{title}</h5>
      <ul className="mt-2">
        {items &&
          items.map((item) => (
            <li
              className="text-gray-500 font-light text-sm max-sm:text-xs list-none my-4 "
              key={uuidv4()}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-11/12 p-4 max-sm:p-2 m-auto my-20 max-sm:my-10 flex max-sm:flex-col">
      <div className=" w-4/12 max-lg:w-6/12 h-full p-2 max-sm:w-full ">
        <h2 className="text-violet-950 text-4xl font-extrabold leading-10">
          Easy
        </h2>
        <h2 className="text-blue-600 text-4xl font-extrabold ">ahead</h2>
        <p className="text-gray-500 text-sm mt-6">
          We take the work out of connecting with{" "}
          <br className="max-md:hidden max-sm:block" /> others so you can
          accomplish more.
        </p>
        <select
          name="language"
          className="p-2 rounded-md w-8/12  my-8 border border-1 text-sm font-semibold bg-white outline-none "
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        <div>
          <button className="w-24 rounded-lg">
            <img src="/App Store .jpg" alt="" />
          </button>
          <button className="w-24 rounded-lg ml-2">
            <img src="/Google Play.jpg" alt="" />
          </button>
        </div>
        <div className="mt-4 flex h-10 items-center gap-5 ">
          <img src="/public/twitter.svg" className="w-5" alt="twitter" />
          <img src="/public/facebook.svg" className="w-6" alt="facebook" />
          <img src="/public/instagram.svg" className="w-5" alt="instagram" />
          <img src="/public/linkedin.svg" className="w-4" alt="linkedin" />
          <img src="/public/youtube.svg" className="w-6" alt="youtube" />
        </div>
      </div>
      <div className=" w-7/12 max-lg:w-6/12 max-sm:w-full h-full max-sm:mb-2 grid p-2  grid-cols-3 max-lg:grid-cols-2  max-md:grid-cols-1 max-sm:grid-cols-2 max-md:gap-2 gap-4 ">
        {FooterList.map((section) => (
          <FooterItem
            key={uuidv4()}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
