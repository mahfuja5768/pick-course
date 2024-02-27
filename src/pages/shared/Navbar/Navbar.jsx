import { useState } from "react";
import searchIcon from "../../../assets/searchIcon.png";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      {showNav ? (
        <div className="justify-center max-w-[2520px] mx-auto z-10 items-center flex flex-col bg-primary text-white h-[70vh] py-12 relative">
          <div className="flex md:hidden absolute text-white left-0 ps-3 top-0 mt-[20px]">
            <a href="">Pick-Course</a>
          </div>
          <ul className="flex flex-col justify-end items-center gap-7">
            <li className="cursor-pointer">Categories</li>
            <li className="cursor-pointer">Website Builders</li>
            <li className="cursor-pointer">Todays Deals</li>
          </ul>
          <div className="flex items-center relative mt-6">
            <img className="-me-4 absolute w-5 ms-3" src={searchIcon} alt="" />
            <input type="text" className="h-[37px] me-2 rounded-lg" />
          </div>
          <div className="flex md:hidden absolute right-0 pe-3 top-0 mt-[20px]">
            <button onClick={() => setShowNav(!showNav)}>
              <RxCross2 />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-primary max-w-[2520px] mx-auto h-[64px] mb-12 text-white flex items-center justify-end relative">
          <div className="  hidden md:flex max-w-[2520px] mx-auto">
            <div className="justify-between items-center flex">
              <div>
                <a href="">Pick-Course</a>
              </div>
              <div className="flex items-center relative me-3">
                <img
                  className="-me-4 absolute w-5 ms-3"
                  src={searchIcon}
                  alt=""
                />
                <input type="text" className="h-[37px] me-2 rounded-lg" />
              </div>
              <ul className="flex justify-between items-center gap-7">
                <li>Categories</li>
                <li>Website Builders</li>
                <li>Today's Deals</li>
              </ul>
            </div>
          </div>
          <div className="flex md:hidden absolute right-0 pe-3 ">
            <button onClick={() => setShowNav(!showNav)}>
              <FaBars />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
