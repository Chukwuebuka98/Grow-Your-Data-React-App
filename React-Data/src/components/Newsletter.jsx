// import React from 'react'
import { useSelector } from "react-redux";
import { selectTheme } from "../store/theme-slice";

const darkSpringGreen = "bg-[#33783f]  ease-in-out duration-500";
const canonicalAubergine = "bg-[#4d002b]  ease-in-out duration-500";

const Newsletter = () => {
  const selectedTheme = useSelector(selectTheme);
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black "
              type="email"
              placeholder="Enter Email"
            />
            <button
              className={
                selectedTheme === darkSpringGreen
                  ? "bg-[#e8e3e0] w-[200px] ml-4 rounded-md font-medium my-6 px-6 py-3 text-[#33783f]"
                  : selectedTheme === canonicalAubergine
                  ? "bg-[#ff7c44] w-[200px] ml-4 rounded-md font-medium my-6 px-6 py-3 text-black"
                  : "bg-[#00df9a] w-[200px] ml-4 rounded-md font-medium my-6 px-6 py-3 text-black"
              }
            >
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span
              className={
                selectedTheme === darkSpringGreen
                  ? "text-[#e8e3e0] underline"
                  : selectedTheme === canonicalAubergine
                  ? "text-[#ff7c44] underline"
                  : " text-[#00df9a] underline "
              }
            >
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
