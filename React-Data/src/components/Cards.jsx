import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/theme-slice";

const darkSpringGreen = "bg-[#33783f]  ease-in-out duration-500";
const canonicalAubergine = "bg-[#4d002b]  ease-in-out duration-500";

const Cards = () => {
  const selectedTheme = useSelector(selectTheme);
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg md:hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8 ">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="my-2 border-b mx-8">500 GB Storage</p>
            <p className="my-2 border-b mx-8">1 Granted User</p>
            <p className="my-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button
            className={
              selectedTheme === darkSpringGreen
                ? "bg-[#33783f] w-[200px] ml-4 rounded-md font-medium my-6 px-6 py-3 text-white"
                : selectedTheme === canonicalAubergine
                ? "bg-[#4d002b] w-[200px] ml-4 rounded-md font-medium my-6 px-6 py-3 text-white"
                : "bg-[#00df9a] w-[200px] ml-4 rounded-md font-medium my-6 px-6 py-3 text-black"
            }
          >
            Start Trial
          </button>
        </div>

        {/* // card components */}

        <div className="w-full shadow-xl bg-gray-100 flex flex-col items-center p-4 md:my-0 my-8 rounded-lg md:hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8 ">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="my-2 border-b mx-8">500 GB Storage</p>
            <p className="my-2 border-b mx-8">1 Granted User</p>
            <p className="my-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button
            className={
              selectedTheme === darkSpringGreen
                ? "text-[#33783f] w-[200px] ml-4 rounded-md font-medium my-6 px-6 py-3 bg-black"
                : selectedTheme === canonicalAubergine
                ? "text-[#4d002b] w-[200px] ml-4 rounded-md font-medium my-6 px-6 py-3 bg-black"
                : "text-[#00df9a] w-[200px] ml-4 rounded-md font-medium my-6 px-6 py-3 bg-black"
            }
          >
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg md:hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8 ">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="my-2 border-b mx-8">500 GB Storage</p>
            <p className="my-2 border-b mx-8">1 Granted User</p>
            <p className="my-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button
            className={
              selectedTheme === darkSpringGreen
                ? "bg-[#33783f] w-[200px] ml-4 rounded-md font-medium my-6 px-6 py-3 text-white"
                : selectedTheme === canonicalAubergine
                ? "bg-[#4d002b] w-[200px] ml-4 rounded-md font-medium my-6 px-6 py-3 text-white"
                : "bg-[#00df9a] w-[200px] ml-4 rounded-md font-medium my-6 px-6 py-3 text-black"
            }
          >
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
