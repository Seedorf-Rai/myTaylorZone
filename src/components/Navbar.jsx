import logo from "/logo.png";
import { PiUserCircleCheckLight } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router";

export const Navbar = () => {
  const [downArr, setDownArr] = useState(true);
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHoverEnter = () => {
    setDownArr(false); // Arrow up
    setShowCategoryList(true); // Show category list
  };

  const handleHoverLeave = () => {
    setDownArr(true); // Arrow down
    setShowCategoryList(false); // Hide category list
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="w-full flex justify-center sm:text-base px-4 text-sm h-auto py-3 font-title bg-[#E6F4FE]">
        <span className="font-medium me-2">
          Sahiba Gift Card: The Perfect Last-Minute Gift{" "}
        </span>
        <span className="underline font-semibold">Shop Gift Cards</span>
      </div>

      {/* Navbar */}
      <nav className="py-6 px-5 sm:px-10 flex items-center justify-between">
        {/* Logo and Search */}
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              className="object-cover md:w-[200px] md:pt-0 pt-7 me-5"
              src={logo}
              alt="Logo"
            />
          </Link>
          <div className="hidden md:flex">
            <input
              type="text"
              className="w-[28vw] text-gray-700 border-[1px] font-title py-3 ps-5 border-gray-800 rounded-l-3xl"
              placeholder="Search for shoes, clothes, etc"
            />
            <button className="rounded-r-3xl py-3 px-5 border-[1px] font-title border-l-0 border-gray-800">
              Search
            </button>
          </div>
        </div>

        {/* Icons and Hamburger Menu */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <PiUserCircleCheckLight className="text-2xl sm:text-4xl" />
          <Link to={"/cart"}>
            <TiShoppingCart className="text-2xl sm:text-4xl" />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="block md:hidden text-2xl"
          >
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </nav>

      {/* Links and Categories */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex md:justify-between px-5 sm:px-10 font-title pb-5 border-t-0 border-[1px] font-bold`}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-10">
          <Link to={"/products"}>All Products</Link>
          <div
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
            className="flex items-center relative cursor-pointer"
          >
            <p>Category</p>
            {downArr ? <MdArrowDropDown /> : <MdOutlineArrowDropUp />}
            {showCategoryList && (
              <div
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                className="absolute top-full max-h-[40vh] w-[200px] overflow-y-scroll flex left-0 mt-2 bg-[#F8F9F9] shadow-md rounded-lg z-10"
              >
                <ul className="space-y-2 w-[100%]">
                  <Link to={"/products"}>
                    <li className="hover:bg-[#dfe2e2] px-8 py-1">Men's Wear</li>
                  </Link>
                  <Link to={"/products"}>
                    <li className="hover:bg-[#dfe2e2] px-8 py-1">
                      Women's wear
                    </li>
                  </Link>
                  <Link to={"/products"}>
                    <li className="hover:bg-[#dfe2e2] px-8 py-1">Jewellery</li>
                  </Link>
                  <Link to={"/products"}>
                    <li className="hover:bg-[#dfe2e2] px-8 py-1">Electronics</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <Link to={"/user"}>
            <p>User</p>
          </Link>
          <Link to={"/order"}>
            <p>Orders</p>
          </Link>
          <Link to={"/complaint"}>
            <p>Complaints</p>
          </Link>
        </div>
        <div className="flex mt-4 md:mt-0">
          <p>Help & Support</p>
        </div>
      </div>
    </>
  );
};
