import React from "react";
import { Link } from "react-router-dom";

import { FaBriefcase } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

const Avatar = () => {
  return (
    <section className=" mt-10 ml-16 pb-10 ">
      <div class="flex flex-wrap flex-row  ">
        <div className="basis-1/2">
          <div class="flex items-center justify-left bg-gradient-to-br from-grey-500 to-grey-800 ">
            <div class=" text-left px-14 py-5">
              <div className=" mt-8">
                <p className="text-4xl font-semibold leading-normal mb-2  ">
                  Hi, I'm Moses Imbahale.
                </p>

                <div className="">
                  <p className=" font-semibold text-indigo-600 text-3xl">
                    Software Engineer
                    <div className="text-black">based in Nairobi, Kenya</div>
                  </p>

                  <p className="text-4xl"></p>
                </div>
              </div>

              <p class="mt-4 text-left antialiased ">
                I'm accustomed to working well with a diverse team, respectful
                to other peoples' ideas, self driven and motivated developer. My
                strength lies in my ability to understand the needs of a variety
                of audience, adapting quickly to new tools and technologies and
                ofcourse I excel in every stage of software development life
                cycle(SDLC) (Agile variation)
                <br /> <br />
                I'm very passionate about development, I strive to deliver
                quality(Engaging and compelling) software solutions in the most
                efficient and effictive manner. Detail oriented and highly
                organized with ability to handle multiple tasks and meet tight
                deadlines. Strong technical knowledge in object oriented
                development methodologies, design and implementation.
                <br /> <br />
                What I am looking for is a company/organisation that I can
                produce a positive return on investment while I continue my
                journey to gain more experience as a developer. I would also
                love to join a group of developers with whom we can collaborate
                in innovating and shaping the future of software.
              </p>

              <Link to="/resume">
                <button
                  type="button"
                  class=" shadow-lg  shadow-indigo-500/50 inline-flex items-center flex-justify-between mx-20 my-10 px-6 py-3 bg-indigo-500 text-white font-medium  leading-tight rounded-3xl hover:bg-indigo-600  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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

        <div className="basis-1/2 rounded-3xl  rounded-r-none bg-gray-900 text-white">
          <div class=" text-center px-14 py-5">
            <img
              class="mt-20 w-64 h-64 rounded-full shadow-lg mx-auto"
              src="./ms.jfif"
              alt="me"
            />

            <div className="flex flex-col ml-20 mt-20">
              <div className=" mt-2 flex flex-row justify-between max-w-sm">
                {" "}
                <FaUserGraduate size="30px" color="white" /> Bsc.Software
                Development, KCA University{" "}
              </div>
              <div className="mt-4 flex flex-inline justify-between max-w-xs ">
                {" "}
                <FaBriefcase size="30px" color="white" />
                Developer intern at Kadana{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center ">
        <svg
          class="animate-bounce w-12 h-12 rounded-full bg-indigo-50 border border-indigo-500 opacity-50"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 18.5L12 4" stroke="#7D909B" stroke-width="2" />
          <path d="M6.5 13L12 18.5L17.5 13" stroke="#283238" stroke-width="2" />
        </svg>
      </div>


    </section>
  );
};

export default Avatar;
