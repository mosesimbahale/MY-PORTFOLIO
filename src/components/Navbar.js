import React from "react";
import { Link } from "react-router-dom";


import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { DiCode } from "react-icons/di";


const Navbar = () => {

  return (
    <>


          <section class="relative py-2 bg-white text-gray-900 shadow-md  w-full">
            <div class="container px-4 mx-auto ">
              <div class="flex flex-wrap items-center justify-between -mx-6">




                {/*LOGO*/}
                <div className="inline-block p-1 ml-4 -mt-10 text-white   bg-gray-900">
                  <DiCode size="30px" color="red" />
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

                    <Link to="/"
                      class="bg-gray-900 inline-block py-3 px-3 mr-1  rounded-3xl text-white  border-2   hover:bg-indigo-600  border-indigo-600 "
                      target="_blank"
                    >
                      <FaLinkedin />
                    </Link>

                    <Link to="/"
                      class="bg-gray-900 inline-block py-3 px-3 mr-3  rounded-3xl text-white  border-2   hover:bg-indigo-600  border-indigo-600 "
                      target="_blank"
                    >
                      <FaGithub />
                    </Link>

                    <Link to="/"
                      class="bg-gray-900 inline-block py-3 px-3 mr-3  rounded-3xl text-white  border-2   hover:bg-indigo-600  border-indigo-600 "
                      target="_blank"
                    >
                      <FaTwitter />
                    </Link>

                    <Link to="/"
                      class="bg-gray-900 inline-block py-3 px-3 mr-3  rounded-3xl text-white  border-2   hover:bg-indigo-600  border-indigo-600 "
                      target="_blank"
                    >
                      <FaYoutube />
                    </Link>

                    <Link to="/projects"
                      class="bg-gray-900 inline-block py-2 px-3 mr-2 text-white  border-2   hover:bg-indigo-600  border-indigo-600"
                    >
                      Projects
                    </Link>

                    <Link to="/"
                      class="bg-gray-900 inline-block py-2 px-3 mr-2 text-white  border-2   hover:bg-indigo-600  border-indigo-600"
                      target="_blank"
                    >
                      Blog
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}

export default Navbar;
