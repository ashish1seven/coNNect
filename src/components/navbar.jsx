import React from 'react';

const Navbar = () => {
    return (
      <div>
        <nav className="flex items-center justify-between w-screen h-16 px-10 text-white bg-slate-900">
          <a
            className="px-3 py-1 text-2xl font-bold text-orange-400 duration-500 rounded hover:scale-125"
            href=""
          >
            Quizzz
          </a>
          <a
            className="px-2 py-1 mx-1 duration-500 rounded bg-slate-800 text-slate-400 hover:scale-125"
            href=""
          >
            <i class="fi fi-br-search"></i>
          </a>
          <div className="flex items-center">
            <a
              className="px-5 py-1 mx-3 duration-500 rounded bg-slate-800 text-slate-400 hover:scale-125"
              href=""
            >
              Find Events
            </a>
            <a
              className="px-5 py-1 mx-3 duration-500 rounded bg-slate-800 text-slate-400 hover:scale-125"
              href=""
            >
              Create Events
            </a>
            <button className="px-5 py-1 mx-2 font-medium duration-500 border rounded text-slate-400 border-slate-500 hover:scale-110">
              Log In
            </button>
            <button className="px-5 py-1 mx-2 font-medium duration-500 border rounded bg-slate-700 text-slate-100 border-slate-500 hover:scale-110">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;