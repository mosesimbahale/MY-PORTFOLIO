import React from "react";
import { Link } from "react-router-dom";

import { FaBriefcase } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";










const Avatar = () => {
  return (
    <>


      


      {/* TOP SECTION*/}
      <section class="mx-10 py-36 text-gray-300 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -m-6">
            
            <div class="w-full lg:w-1/2 p-6">
              <div class="max-w-xl">
                <h2 class="mb-6 font-heading font-bold text-6xl sm:text-7xl ">
                  Hi, I'm Moses Imbahale.
                </h2>
                <p className=" font-semibold text-orange-400 text-3xl">
                  Software Engineer
                  <div className="text-white">based in Nairobi, Kenya</div>
                </p>

                <p class="my-16  text-lg">
                  {" "}
                  I'm accustomed to working well with a diverse team, respectful
                  to other peoples' ideas, self driven and motivated developer.
                  My strength lies in my ability to understand the needs of a
                  variety of audience and adapting quickly to new tools and
                  technologies.
                  <br /> <br />
                  I'm very passionate about development, I strive to deliver
                  quality(Engaging and compelling) software solutions in the
                  most efficient and effictive manner. Detail oriented and
                  highly organized with ability to handle multiple tasks and
                  meet tight deadlines. Strong technical knowledge in object
                  oriented development methodologies, design and implementation.
                  <br /> <br />
                  What I am looking for is a company/organisation that I can
                  produce a positive return on investment while I continue my
                  journey to gain more experience as a developer. I would also
                  love to join a group of developers with whom we can
                  collaborate in innovating and shaping the future of software.
                </p>



                <div class="flex flex-wrap -m-2.5 pb-10 xl:pb-0"></div>
              </div>
            </div>

            <div class="flex flex-col w-full  lg:w-1/2 p-4">

            <img
                className="self-end mx-auto rounded-full "
                src="./me.jfif"
                alt=""
              />


              <div className="flex flex-col m-20">
                <div className=" my-6 flex flex-row text-xl ">
                  {" "}
                  <FaUserGraduate size="30px" color="white" class="mx-1" />
                  <p className="px-6  text-xl">
                  Bsc.Software Engineering, KCA University
                  </p>
                </div>
                <div className="my-3 flex flex-inline  ">
                  {" "}
                  <FaBriefcase size="30px" color="white" class="mx-1" />
                  
                    <p className="px-6  text-xl"> Developer intern at Kadana</p>
                </div>


                <Link to="/resume">
                  <button
                    type="button"
                    class=" shadow-lg  shadow-orange-500/50 inline-flex items-center flex-justify-between mx-20 my-10 px-6 py-3 bg-orange-500 text-white font-medium  leading-tight rounded-3xl hover:bg-orange-300  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    <span className="px-2"> My Resume</span>
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
    </>
  );
};

export default Avatar;
