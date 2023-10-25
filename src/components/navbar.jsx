/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Modal from "./modal";
import Findevents from "../pages/findevents";
import Createevents from "../pages/createevents";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const [upVisible, setUpVisible] = useState(false);
  const [inVisible, setInVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  const toggleInput = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };
  
  return (
    <>
      <nav className="fixed flex items-center justify-between w-screen h-16 px-10 text-white bg-transparent">
        <a
          className=" px-6 py-1 text-xl font-bold duration-500 hover:scale-110  flex relative"
          href=""
        >
          <img
            src="https://connectcentre.ie/wp-content/themes/connect-centre/images/site-components/logo.png"
            alt=""
            className="h-12"
          />
          
          {/* <sub className="text-[10px] absolute top-10 left-32">Junction</sub> */}
          {/* <p className="p-0">Connect Junction</p> */}
        </a>
        <div className="flex ">
          <button
            className="px-2 py-1 mx-1 rounded bg-transparent text-white "
            href=""
            onClick={toggleInput}
          >
            <i class="fi fi-br-search"></i>
          </button>
          {isExpanded && (
            <input
              className="pl-1 ml-1 duration-500 ease-linear border-none rounded bg-gray-400/20 text-white outline-none"
              type="text"
              placeholder="Search..."
              autoFocus
              onBlur={toggleInput}
            />
          )}
        </div>

        <div className="relative flex items-center">
          <a
            className="px-5 py-1 mx-3 duration-500 rounded text-white font-semibold hover:scale-110"
            href=""
          >
            <Findevents/>
          </a>
          <div onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown} className='relative'>
            <button
              className="px-5 py-1 mx-3 duration-500 rounded font-semibold text-white hover:scale-110"
              href=""
              id="create-event"
            >
              <Createevents/>
            </button>
            {isDropdownVisible && (
              <div
                className={`absolute z-10 flex flex-col w-32 h-16 px-3 py-1 border rounded shadow-lg justify-evenly left-40 top-9`}
              >
                <a href="#" className="">
                  Local Event
                </a>
                <a href="#">E-Event</a>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              setShow(!show);
              setInVisible(true);
              setUpVisible(false);
            }}
            className="px-5 py-1 mx-2 font-medium duration-500 border rounded text-white font-semibold hover:scale-110"
          >
            Log In
          </button>

          <button
            onClick={() => {
              setShow(!show);
              setInVisible(false);
              setUpVisible(true);
            }}
            className="px-5 py-1 mx-2 font-medium duration-500 border rounded bg-pink-600 text-slate-100 hover:scale-110"
          >
            Sign Up
          </button>
          <button className="px-2 py-1 mx-1 duration-300 rounded hover:scale-110 bg-transparent border text-white">
            <p className="origin-center rotate-[-45deg]">
              <i className=" fi fi-ss-moon"></i>
            </p>
            {/* <i class="fi fi-ss-brightness"></i> */}
          </button>
        </div>
      </nav>
      <Modal
        show={show}
        setShow={setShow}
        upVisible={upVisible}
        setUpVisible={setUpVisible}
        inVisible={inVisible}
        setInVisible={setInVisible}
      />
    </>
  );
};

export default Navbar;
