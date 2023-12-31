import React from "react";
import { Link } from "react-router-dom";
import google from '../Images/downloadGoogle.svg';
import apple from '../Images/downloadApple.svg';
import { useDarkMode } from "../darkmodecontext";

export default function Footer() {
  const { darkMode } = useDarkMode();
  
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div>
        <footer className="h-[500px] w-full bg-[#1A1831] text-white py-8 px-[170px]">
          <div className="flex items-center mb-5">
            <p className="mr-5 font-bold">Create your own Connect group.</p>
            <Link
              to={`/creategroup`}
              className="p-2 font-bold border-2 rounded-md hover:bg-white hover:text-black"
            >
              <button>Get Started</button>
            </Link>
          </div>
          <div className="border-t-[1px] border-white/40 py-5 flex w-full h-[200px] justify-start mb-5">
            <div className="mr-56">
              <ul className="">
                <li className="text-lg font-bold">Your Account</li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Log in
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Become an Affiliate
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mr-56">
              <ul className="">
                <li className="text-lg font-bold">Discover</li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Groups
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Topics
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Cities
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Online Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Local Guides
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Make Friends
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="">
                <li className="text-lg font-bold">Connect</li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Connect Pro
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-sm font-semibold text-[#c4c4c4] hover:text-white"
                  >
                    Podcast
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-8">
            <h3 className="mb-4 text-lg font-medium ">Follow us</h3>
            <div className="flex justify-between w-full">
              <div className="flex items-center justify-between h-10 text-xl w-52">
                <Link>
                  {" "}
                  <i className="fi fi-brands-facebook"></i>
                </Link>
                <Link>
                  <i className="fi fi-brands-twitter"></i>
                </Link>
                <Link>
                  <i className="fi fi-brands-instagram"></i>
                </Link>
                <Link>
                  <i className="fi fi-brands-youtube"></i>
                </Link>
              </div>
              <div className="flex">
                <Link className="mr-3">
                  <img src={google} alt="" className="h-10 rounded-md " />
                </Link>
                <Link>
                  <img src={apple} alt="" className="h-10 rounded-md" />
                </Link>
              </div>
            </div>
          </div>
          <ul className="flex items-center w-full h-8 text-sm ">
            <li className="mr-[30px] text-lg font-bold">&copy; 2023 Connect</li>
            <Link className="mr-[30px] font-semibold text-[#c4c4c4] hover:text-white">
              <li>Terms of Service</li>
            </Link>
            <Link className="mr-[30px] font-semibold text-[#c4c4c4] hover:text-white">
              <li>Privacy Policy</li>
            </Link>
            <Link className="mr-[30px] font-semibold text-[#c4c4c4] hover:text-white">
              <li>Cookie Policy</li>
            </Link>
            <Link className="font-semibold text-[#c4c4c4] hover:text-white">
              <li>Help</li>
            </Link>
          </ul>
        </footer>
      </div>
    </div>
  );
}
