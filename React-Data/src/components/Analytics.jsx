// import React from "react"; // You don't need to import React when using React 17 or higher
import { useSelector } from "react-redux";
import { selectTheme } from "../store/theme-slice";
import Laptop from "../assets/laptop.jpg";

const darkSpringGreen = "bg-[#33783f]  ease-in-out duration-500";
const canonicalAubergine = "bg-[#4d002b]  ease-in-out duration-500";

const Analytics = () => {
  const selectedTheme = useSelector(selectTheme);
  return (
    <div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
          <div className="flex flex-col justify-center">
            <p
              className={
                selectedTheme === darkSpringGreen
                  ? "text-[#33783f] font-bold"
                  : selectedTheme === canonicalAubergine
                  ? "text-[#ff7c44] font-bold"
                  : "text-[#00df9a] font-bold"
              }
            >
              DATA ANALYTICS DASHBOARD
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Analytics Centrally
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              nostrum illum, perspiciatis, possimus quis, veniam sequi tenetur
              voluptas explicabo et vero corrupti delectus a? Illo reiciendis
              excepturi quo pariatur dicta.
            </p>
            <button
              className={
                selectedTheme === darkSpringGreen
                  ? "bg-[#33783f] text-[#fae4d2] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
                  : selectedTheme === canonicalAubergine
                  ? "bg-[#ff7c44] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
                  : "bg-[#000300] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
              }
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
