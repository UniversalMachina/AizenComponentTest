import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, onSignOut }) => {
  return (
    <header className="self-stretch bg-white overflow-hidden top-[0] z-[99] sticky max-w-full  text-color-brand-black font-Roboto shadow-md">
      <div className="h-[80px] w-screen py-0 max-w-full flex items-center">
        <div className="w-screen overflow-hidden flex flex-row items-center justify-start ml-10 gap-5">
          <Link
            to="/"
            className="text-[18px] text-black hover:text-gray-600 no-underline transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="text-[18px] text-black hover:text-gray-600 no-underline transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/features"
            className="text-[18px] text-black hover:text-gray-600 no-underline transition duration-300"
          >
            Features
          </Link>
          <Link
            to="/services"
            className="text-[18px] text-black hover:text-gray-600 no-underline transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-[18px] text-black hover:text-gray-600 no-underline transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/pricing"
            className="text-[18px] text-black hover:text-gray-600 no-underline transition duration-300"
          >
            Pricing
          </Link>
          <Link
            to="/faqs"
            className="text-[18px] text-black hover:text-gray-600 no-underline transition duration-300"
          >
            FAQs
          </Link>

        </div>

        {!isLoggedIn ? (
          <>
            <div className="flex-1 flex flex-row items-center justify-end">
              <button className="cursor-pointer p-2 mr-[10px] bg-black w-[83px] rounded-[14px] box-border flex items-center justify-center border border-black hover:bg-darkslategray-300">
                <Link
                  to="/login"
                  className="relative text-[16px] leading-[150%] font-Roboto text-white text-left no-underline"
                >
                  Login
                </Link>
              </button>

              <div>
                <button className="cursor-pointer p-2 mr-[100px] w-[83px] flex items-center justify-center border-none bg-white">
                  <Link
                    to="/register"
                    className="relative text-[16px] leading-[150%] font-text-small-link text-black text-left no-underline"
                  >
                    Register
                  </Link>
                </button>
              </div>
            </div>
          </>
        ) : (
          <button
            className="cursor-pointer p-2 mr-[100px] w-[83px] flex items-center justify-center border-none bg-white"
            onClick={onSignOut}
          >
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
