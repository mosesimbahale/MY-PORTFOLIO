import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

//Navbar styles
import "../styles/Navbar.css";

//Icons import
import { AiOutlineMenu } from "react-icons/ai";

import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { DiCode } from "react-icons/di";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <>
      <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
          <button
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
            <AiOutlineMenu />
          </button>
        </div>

        <div className="links">
          <section class="relative py-1 bg-white text-gray-900 shadow-md  w-full">
            <div class="container px-4 mx-auto ">
              <div class="flex flex-wrap items-center justify-between -mx-5">
                
                <div className="inline-block p-3 ml-40 -mt-6 text-white   bg-gray-900">
                  <DiCode size="30px" color="red" />
                </div>

                <div class="p-">
                  <img src="./" class="" alt=""/>
                </div>

                <div className="flex text-sm leading-normal  text-gray-900 font-bold uppercase">
                  <MdLocationOn size="20px" color="black" /> Nairobi, Kenya
                </div>
                <div class="w-full md:w-auto px-4 mb-14 md:mb-0">
                  <h2 class=""> kenyan based software engineer</h2>
                  <h2 clas="">Quote quote quote quote quote quote quote </h2>
                </div>

                <div class="w-full md:w-auto px-4">
                  <div class="flex items-start flex-wrap">
                    
                    <a
                      class="bg-gray-900 inline-block py-3 px-3 mr-3  rounded-3xl text-white  border-2   hover:bg-red-800  border-orange-800 "
                      href="/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      class="bg-gray-900 inline-block py-3 px-3 mr-3  rounded-3xl text-white  border-2   hover:bg-red-800  border-orange-800 "
                      href="/"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>

                    <a
                      class="bg-gray-900 inline-block py-3 px-3 mr-3  rounded-3xl text-white  border-2   hover:bg-red-800  border-orange-800 "
                      href="/"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>

                    <a
                      class="bg-gray-900 inline-block py-3 px-3 mr-3  rounded-3xl text-white  border-2   hover:bg-red-800  border-orange-800 "
                      href="/"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>

                    <a
                      class="bg-gray-900 inline-block py-2 px-3 mr-2   rounded-lg text-white  border-2   hover:bg-red-800  border-orange-800"
                      href="/Projects"
                    >
                      Projects
                    </a>

                    <a
                      class="bg-gray-900 inline-block py-2 px-3 mr-2   rounded-lg text-white  border-2   hover:bg-red-800  border-orange-800"
                      href="/"
                      target="_blank"
                    >
                      Blog
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Navbar;
