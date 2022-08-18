import React from "react";

import { Link } from "react-router-dom";

import { FaAndroid } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { MdDataExploration } from "react-icons/md";
import { GiVintageRobot } from "react-icons/gi";
import { FaApple } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { FaAngular } from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";

import { DiPhp } from "react-icons/di";

const Header = () => {
  return (
    <>
      <div className="pb-16">
        {/* Code block starts */}
        <dh-component>
          <section className="max-w-8xl mx-auto container  pt-16">
            <div>
              <div
                role="contentinfo"
                className="flex items-center flex-col px-4"
              >
                <p
                  tabIndex={0}
                  className="focus:outline-none uppercase text-xl text-center text-orange-400 leading-4"
                >
                  My Skills
                </p>
                <hh1
                  tabIndex={0}
                  className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-300 lg:w-5/12 md:w-9/12 pt-4"
                >
                  Creating Beautiful Landing Pages &amp; Web Apps in a Jiffy
                </hh1>
              </div>
              <div
                tabIndex={0}
                aria-label="group of cards"
                className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
              >
                <div
                  tabIndex={0}
                  aria-label="card 1"
                  className="focus:outline-none flex sm:w-full md:w-5/12 p-10  bg-gray-800 rounded-2xl shadow-2xl  "
                >
                  <div className="w-20 h-20 relative mr-5 ">
                    <div className="absolute top-0 right-0 bg-orange-300 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-orange-500 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <BsCodeSlash className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-bold leading-tight text-white"
                    >
                      Web development
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-white leading-normal pt-2"
                    >
                      It provides a very simple start, no need to write a lot of
                      code, you just import it and start the primitive
                      components and create the ones you need.
                    </p>

                    <Link to="/projects">
                      <button
                        type="button"
                        class=" inline-flex items-center flex-justify-between mx-20 my-10 px-6 py-3 bg-orange-400 shadow-lg shadow-orange-500/50 text-white font-medium  leading-tight rounded-3xl hover:bg-orange-300  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      >
                        <span className="px-2">Projects</span>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24.7071 7.29289C25.0976 7.68342 25.0976 8.31658 24.7071 8.70711L8.70711 24.7071C8.31658 25.0976 7.68342 25.0976 7.29289 24.7071C6.90237 24.3166 6.90237 23.6834 7.29289 23.2929L23.2929 7.29289C23.6834 6.90237 24.3166 6.90237 24.7071 7.29289Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 8C10 7.44772 10.4477 7 11 7H24C24.5523 7 25 7.44772 25 8V21C25 21.5523 24.5523 22 24 22C23.4477 22 23 21.5523 23 21V9H11C10.4477 9 10 8.55228 10 8Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  tabIndex={0}
                  aria-label="card 1"
                  className="focus:outline-none flex sm:w-full md:w-5/12 p-10  bg-gray-800 rounded-2xl shadow-2xl  "
                >
                  <div className="flex-col ">
                    <div className="w-20 h-20 relative mr-5 ">
                      <div className="absolute top-0 right-0 bg-orange-300 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0 bg-orange-500 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <FaAndroid className="w-9 h-8" />
                      </div>
                    </div>

                    <div className="w-20 h-20 relative mr-5 ">
                      <div className="absolute top-0 right-0 bg-orange-300 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0 bg-orange-500 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <FaApple className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-bold leading-tight text-white"
                    >
                      Mobile App Development
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-white leading-normal pt-2"
                    >
                      It provides a very simple start, no need to write a lot of
                      code, you just import it and start the primitive
                      components and create the ones you need.
                    </p>

                    <Link to="/projects">
                      <button
                        type="button"
                        class=" inline-flex items-center flex-justify-between mx-20 my-10 px-6 py-3 bg-orange-400 shadow-lg shadow-orange-500/50 text-white font-medium  leading-tight rounded-3xl hover:bg-orange-300  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      >
                        <span className="px-2">Projects</span>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24.7071 7.29289C25.0976 7.68342 25.0976 8.31658 24.7071 8.70711L8.70711 24.7071C8.31658 25.0976 7.68342 25.0976 7.29289 24.7071C6.90237 24.3166 6.90237 23.6834 7.29289 23.2929L23.2929 7.29289C23.6834 6.90237 24.3166 6.90237 24.7071 7.29289Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 8C10 7.44772 10.4477 7 11 7H24C24.5523 7 25 7.44772 25 8V21C25 21.5523 24.5523 22 24 22C23.4477 22 23 21.5523 23 21V9H11C10.4477 9 10 8.55228 10 8Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  tabIndex={0}
                  aria-label="card 1"
                  className="focus:outline-none flex sm:w-full md:w-5/12 p-10  bg-gray-800 rounded-2xl shadow-2xl  "
                >
                  <div className="w-20 h-20 relative mr-5 ">
                    <div className="absolute top-0 right-0 bg-orange-300 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-orange-500 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <BsCodeSlash className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-bold leading-tight text-white"
                    >
                      UI/UX Design
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-white leading-normal pt-2"
                    >
                      It provides a very simple start, no need to write a lot of
                      code, you just import it and start the primitive
                      components and create the ones you need.
                    </p>

                    <Link to="/projects">
                      <button
                        type="button"
                        class=" inline-flex items-center flex-justify-between mx-20 my-10 px-6 py-3 bg-orange-400 shadow-lg shadow-orange-500/50 text-white font-medium  leading-tight rounded-3xl hover:bg-orange-300  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      >
                        <span className="px-2">Projects</span>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24.7071 7.29289C25.0976 7.68342 25.0976 8.31658 24.7071 8.70711L8.70711 24.7071C8.31658 25.0976 7.68342 25.0976 7.29289 24.7071C6.90237 24.3166 6.90237 23.6834 7.29289 23.2929L23.2929 7.29289C23.6834 6.90237 24.3166 6.90237 24.7071 7.29289Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 8C10 7.44772 10.4477 7 11 7H24C24.5523 7 25 7.44772 25 8V21C25 21.5523 24.5523 22 24 22C23.4477 22 23 21.5523 23 21V9H11C10.4477 9 10 8.55228 10 8Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  tabIndex={0}
                  aria-label="card 1"
                  className="focus:outline-none flex sm:w-full md:w-5/12 p-10  bg-gray-800 rounded-2xl shadow-2xl  "
                >
                  <div className="flex-col">
                    <div className="w-20 h-20 relative mr-5 ">
                      <div className="absolute top-0 right-0 bg-orange-300 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0 bg-orange-500 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <MdDataExploration className="w-8 h-8" />
                      </div>
                    </div>

                    <div className="w-20 h-20 relative mr-5 ">
                      <div className="absolute top-0 right-0 bg-orange-300 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0 bg-orange-500 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <GiVintageRobot className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-bold leading-tight text-white"
                    >
                      Data Science
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-white leading-normal pt-2"
                    >
                      It provides a very simple start, no need to write a lot of
                      code, you just import it and start the primitive
                      components and create the ones you need.
                    </p>

                    <Link to="/projects">
                      <button
                        type="button"
                        class=" inline-flex items-center flex-justify-between mx-20 my-10 px-6 py-3 bg-orange-400 shadow-lg shadow-orange-500/50 text-white font-medium  leading-tight rounded-3xl hover:bg-orange-300  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      >
                        <span className="px-2">Projects</span>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24.7071 7.29289C25.0976 7.68342 25.0976 8.31658 24.7071 8.70711L8.70711 24.7071C8.31658 25.0976 7.68342 25.0976 7.29289 24.7071C6.90237 24.3166 6.90237 23.6834 7.29289 23.2929L23.2929 7.29289C23.6834 6.90237 24.3166 6.90237 24.7071 7.29289Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 8C10 7.44772 10.4477 7 11 7H24C24.5523 7 25 7.44772 25 8V21C25 21.5523 24.5523 22 24 22C23.4477 22 23 21.5523 23 21V9H11C10.4477 9 10 8.55228 10 8Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </dh-component>
        {/* Code block ends */}
      </div>

      {/*The STACK SECTION */}

      <section class=" pb-20 pt-5  lg:mx-24 text-white  bg-gray-800 rounded-2xl ">
        <h2 class="text-4xl font-bold text-center text-orange-400 m-5">
          My stack
        </h2>

        <div class=" wrap overflow-hidden  m-20   ">
          <p>My stack</p>
          <p>
            React, NextJs, Firebase, Node.js, Express, MongoDB, Bootstrap,
            TailwindCSS and MaterialUI among many others. I am flexible and
            always ready to learn new stacks, this is one of my major strengths
            as a developer... i.e I am able to adapt to new technologies quickly
            in an effective and efficient way.
          </p>

          <div className="flex flex-wrap py-10 max-w-2lg justify-between bg-gray-500 p-2 mt-10 rounded-2xl">
            <FaReact size="50px" color="#38bdf8" />
            <SiFirebase size="50px" color="orange" />
            <IoLogoNodejs size="50px" color="green" />
            <SiMongodb size="50px" color="green" />
            <BsFillBootstrapFill size="50px" color="purple" />
            <SiTailwindcss size="50px" color="#38bdf8" />
            <SiMaterialui size="50px" color="#1d4ed8" />
            <FaAngular size="50px" color="red" />
            <SiNextdotjs size="50px" color="white" />
            <DiPhp size="50px" color="#1d4ed8" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
