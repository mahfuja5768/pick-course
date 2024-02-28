import { useState } from "react";
import searchIcon from "../../../assets/searchIcon.png";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      {showNav ? (
        <div className="justify-center z-10 items-center flex flex-col bg-primary text-white h-[70vh] py-12 relative">
          <div className="flex md:hidden absolute text-white left-0 ps-3 top-0 mt-[20px]">
            <a href="">Pick-Course</a>
          </div>
          <ul className="flex flex-col justify-end items-center gap-7">
            <li className="cursor-pointer">Courses</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contact</li>
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
        <div className="bg-primary h-[64px] text-white flex items-center justify-between relative">
          <div className="  hidden md:block max-w-[1280px] mx-auto">
            <div className="grid grid-cols-3 gap-6 px-4">
              <div>
                <a href="" className="text-2xl font-bold">
                  Pick-Course
                </a>
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
                <li className="cursor-pointer">Courses</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Contact</li>
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
