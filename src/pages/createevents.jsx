import React, { useState } from "react";
import bgImg from "../Images/pexels-wendy-wei-1306791.jpg";
import Modal from "../components/modal";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { useDarkMode } from "../darkmodecontext";

const Createevents = () => {
  const [show, setShow] = useState(false);
  const [upVisible, setUpVisible] = useState(false);
  const [inVisible, setInVisible] = useState(false);
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`w-screen dark:bg-slate-900 `}>
        <div
          className="h-[90vh] w-screen flex flex-col items-center "
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <Navbar />
          <h1 className="mt-12 text-white text-7xl font-['Monteserrat',sans-serif]">
            The Organizers Platform
          </h1>
          <h2 className="mt-16 text-5xl text-white">
            Plan, Create, and Organize
          </h2>
          <button
            onClick={() => {
              setShow(!show);
              setInVisible(false);
              setUpVisible(true);
            }}
            className="px-10 py-2 text-white border-4 rounded-xl relative top-[170px] w-80 bg-red-500"
          >
            Get Started for Free
          </button>
          <Modal
            show={show}
            setShow={setShow}
            upVisible={upVisible}
            setUpVisible={setUpVisible}
            inVisible={inVisible}
            setInVisible={setInVisible}
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Createevents;
