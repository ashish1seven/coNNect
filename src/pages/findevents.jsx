import React, { useState } from "react";
import bgImg from "../Images/pexels-ronê-ferreira-2735037.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Searchlist from "../components/searchlist";
import { useDarkMode } from "../darkmodecontext";

const Findevents = () => {
  const { darkMode } = useDarkMode();
  const [city, setCity] = useState("bangalore");
  // const [category, setCategory] = useState("");
  const [cityInput, setCityInput] = useState("");
  // const [categoryInput, setCategoryInput] = useState("");

  const cityChange = (event) => {
    setCityInput(event.target.value);
  };

  // const categoryChange = (event) => {
  //   setCategoryInput(event.target.value);
  // };

  const handleSearch = () => {
    setCity(cityInput);
    setCityInput("");

    // setCategory(categoryInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-black">
        <div
          className="h-[85vh] w-screen"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <Navbar />
          <div className="mt-40 mb-10 px-[150px] flex flex-col items-center ">
            <h1 className="mb-10 text-7xl text-center text-white font-semibold font-['Monteserrat',sans-serif]">
              Discover
            </h1>
            <div className="overflow-hidden border border-white w-80 rounded-3xl">
              <input
                type="text"
                placeholder="Search City"
                className="h-12 pl-3 text-white w-80 outline-0 placeholder:text-white bg-gray-400/20"
                id="city"
                value={cityInput}
                onChange={cityChange}
                onKeyDown={handleKeyDown}
              />
              {/* <select
            name=""
            id="category"
            value={categoryInput}
            onChange={categoryChange}
            className="h-12 pl-3 mr-3 font-medium text-gray-400 bg-transparent border-l-2 border-gray-800 w-80 outline-0"
          >
            <option className="text-black">All Categories</option>
            <option className="text-black">Dancing</option>
            <option className="text-black">Playing</option>
          </select> */}
            </div>
            <button
              type="button"
              onClick={handleSearch}
              className="px-10 py-2 border mt-4 rounded-3xl font-semibold font-['Monteserrat',sans-serif] text-white border-white"
            >
              SEARCH
            </button>
          </div>
        </div>
        {/* <<<<<<< HEAD */}
        {/* <div>
        <h1 className="text-5xl mt-9 ">
          Popular for{" "}
          <span>
            <u>{category}</u>
          </span>
        </h1>
      </div> */}
        <div className="">
          <p className="my-6 text-3xl text-[#333333]/60 text-center font-">
            Events in{" "}
            <span className="text-6xl text-pink-600">
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </span>
          </p>
        </div>
        <div>
          <Searchlist city={city.toLowerCase()} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Findevents;
