import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {FaDiscord} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";

const Navbar = () => {
  return (
    <section class="py-2 bg-gray-700 text-white ">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap items-center justify-between -mx-4">
          <div class="w-full md:w-auto px-4 mb-14 md:mb-0">
            <h2 class="">Product analysis</h2>
            <p class="">Achieve your goals and increase profits</p>
          </div>

          <div class="w-full md:w-auto px-4">
            <div class="flex items-start flex-wrap">
              <a
                class="inline-block py-2 px-2 mr-3  rounded-3xl text-white  border border-width: 1px  hover:bg-black focus:ring-2  border-orange-800 "
                href="#"
              >
                <FaGithub />
              </a>

              <a
                class="inline-block py-2 px-2 mr-3  rounded-3xl text-white  border border-width: 1px  hover:bg-black focus:ring-2  border-orange-800 "
                href="#"
              >
                <FaDribbble />
              </a>

              <a
                class="inline-block py-2 px-2 mr-3  rounded-3xl text-white  border border-width: 1px  hover:bg-black focus:ring-2  border-orange-800 "
                href="#"
              >
                <FaTwitter />
              </a>

              <a
                class="inline-block py-2 px-2 mr-3  rounded-3xl text-white  border border-width: 1px  hover:bg-black focus:ring-2  border-orange-800 "
                href="#"
              >
                <FaYoutube />
              </a>

              <a
                class="inline-block py-2 px-2 mr-3  rounded-3xl text-white  border border-width: 1px  hover:bg-black focus:ring-2  border-orange-800 "
                href="#"
              >
                <FaDiscord />
              </a>


              <a
                class="inline-block py-2 px-5 mr-2  rounded-xl text-white font-small tracking-tighter  text-center border border-width: 1px  hover:bg-black focus:ring-2 border-orange-800"
                href="#"
              >
                Link
              </a>

              <a
                class="inline-block py-2 px-5 mr-2  rounded-xl text-white font-small tracking-tighter  text-center border border-width: 1px  hover:bg-black focus:ring-2 border-orange-800"
                href="#"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;