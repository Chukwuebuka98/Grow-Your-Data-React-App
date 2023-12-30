import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  themeTab,
  selectTheme,
  setTheme,
  toggleThemeTab,
} from "../store/theme-slice";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";
import Theme from "../assets/theme.jpg";
// import { MdNightlightRound, MdLightMode } from "react-icons/md";

const defaultTheme = "bg-[#000300] ease-in-out duration-500";
const darkSpringGreen = "bg-[#33783f]  ease-in-out duration-500";
const canonicalAubergine = "bg-[#4d002b]  ease-in-out duration-500";

const Navbar = () => {
  const dispatch = useDispatch();
  const toggleTab = useSelector(themeTab);
  const selectedTheme = useSelector(selectTheme);
  const [nav, setNav] = useState(true);
  // const [mode, setMode] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMode = () => {
    dispatch(toggleThemeTab());
  };

  const handleThemeChange = (theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
      <h1 className="w-full sm:text-1xl md:text-2xl lg:text-3xl font-bold text-white">
        Terabyte Manager
      </h1>

      <div className="flex justify-center items-center">
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>

        <div className="mr-4 hidden md:block" onClick={handleMode}>
          <div className="relative">
            <button className="block h-6 w-6 overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
              <img className="h-full w-full object-cover" src={Theme} alt="" />
            </button>

            <div
              className={
                toggleTab
                  ? "absolute right-0 mt-2 py-1 w-48 bg-white rounded-lg shadow-xl"
                  : "hidden"
              }
            >
              <ul className="ease-in-out duration-500 ">
                <li
                  onClick={() => handleThemeChange(defaultTheme)}
                  className="block px-4 py-1 text-black hover:bg-[#000300] hover:text-white ease-in-out duration-300"
                >
                  Default Theme
                </li>
                <li
                  onClick={() => handleThemeChange(darkSpringGreen)}
                  className="block px-4 py-1 text-black hover:bg-[#33783f] hover:text-white ease-in-out duration-3"
                >
                  Dark Spring Green
                </li>
                <li
                  onClick={() => handleThemeChange(canonicalAubergine)}
                  className={`block px-4 py-1 text-black hover:bg-[#4d002b] hover:text-white ease-in-out duration-3`}
                >
                  Canonical Aubergine
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Navbar dropdown for mobile view */}
      <div
        className={
          !nav && selectedTheme === canonicalAubergine
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#4d002b] duration-500 ease-out-out mt-3"
            : !nav && selectedTheme === darkSpringGreen
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-[#e8e3e0] bg-[#33783f] duration-500 ease-out-out mt-3"
            : !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] duration-500 ease-out-out mt-3"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
          <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="w-full sm:text-1xl md:text-2xl lg:text-3xl font-bold text-white">
            Terabyte Manager
          </h1>
        </div>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
