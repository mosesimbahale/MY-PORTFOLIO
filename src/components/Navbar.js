import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {FaDiscord} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md';


import { DiCode } from "react-icons/di";


const Navbar = () => {
  return (
<>

    <section class="relative py-2 bg-white text-gray-900 shadow-lg  w-full">

    





      <div class="container px-4 mx-auto ">
        <div class="flex flex-wrap items-center justify-between -mx-5">

        <div  className="inline-block p-3 ml-40 -mt-6 text-white   bg-gray-900" >
            <DiCode size="30px" color="rose" />         
          </div>


          <div class="p-">
                <img src="./" class="" alt=""/>
            </div>
            


            <div className="flex text-sm leading-normal mt-0 mb-2 text-gray-900 font-bold uppercase">                   
                   <MdLocationOn size ='20px' color="black"/>{" "}
                   Nairobi, Kenya
                 </div>
          <div class="w-full md:w-auto px-4 mb-14 md:mb-0">


                 

            <h2 class=""> kenyan based software engineer</h2>
            <h2 clas ="">Quote quote quote quote quote quote quote </h2>


          </div>

          <div class="w-full md:w-auto px-4">
            <div class="flex items-start flex-wrap">
              
            <a
                class="bg-gray-900 inline-block py-2 px-2 mr-3  rounded-3xl text-white  border-2   hover:bg-red-800  border-orange-800 "
                href="#"
              >
                <FaLinkedin />
              </a>
              
              <a
                class="bg-gray-900 inline-block py-2 px-2 mr-3  rounded-3xl text-white  border-2   hover:bg-red-800  border-orange-800 "
                href="#"
              >
                <FaGithub />
              </a>

              <a
                class="bg-gray-900 inline-block py-2 px-2 mr-3  rounded-3xl text-white  border-2   hover:bg-red-800  border-orange-800 "
                href="#"
              >
                <FaDribbble />
              </a>

              <a
                class="bg-gray-900 inline-block py-2 px-2 mr-3  rounded-3xl text-white  border-2   hover:bg-red-800  border-orange-800 "
                href="#"
              >
                <FaTwitter />
              </a>
              <a
                class="bg-gray-900 inline-block py-2 px-2 mr-3  rounded-3xl text-white  border-2   hover:bg-red-800  border-orange-800 "
                href="#"
              >
                <FaYoutube />
              </a>
              <a
                class="bg-gray-900 inline-block py-2 px-2 mr-3  rounded-3xl text-white  border-2   hover:bg-red-800  border-orange-800 "
                href="#"
              >
                <FaDiscord />
              </a>
          

              <a
                class=" bg-gray-900 inline-block py-2 px-2 mr-3  rounded-3xl text-white  border-2   hover:bg-red-800  border-orange-800 "
                href="#"
              >
                <FaFacebook />
              </a>


              <a
                class="bg-gray-900 inline-block py-1 px-2 mr-2   rounded-lg text-white  border-2   hover:bg-red-800  border-orange-800 "
                href="#"
              >
                Blog
              </a>

        

            </div>
          </div>
        </div>
      </div>



    </section>





</>
  );
};

export default Navbar;
