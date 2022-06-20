import React from "react";

import { Link } from 'react-router-dom';

import { FaAndroid } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { MdDataExploration } from "react-icons/md";
import { GiVintageRobot } from "react-icons/gi";
import { FaApple } from "react-icons/fa";



const Header = () => {
  return (

    <>

      <section class=" bg-gray-900 pb-20  ">

        <h2 class="text-2xl font-bold text-center text-gray-100 m-5">My skills</h2>


        <div class=" wrap overflow-hidden p-10 m-10 text-white   border border-gray-700 ">


          <BsCodeSlash size="50px" color="gray" />
          <span class="text-md lg:text-2xl ">
            Full-stack Web Development    -  MERN STACK
          </span>


          <p class="text-gray-300 text-sm text-left">
            Superior development skills

            Include OOD, Agile Development, Solutions Architecture

            Project Management, and Technical Documentation.

            Exceptional ability to work in the following environments: Java Enterprise Edition, UNIX, Linux, and Windows.

            Strong decision maker, critical thinker, and creative designer with the ability to think around problems to unusual yet highly effective solutions.

            Excels in systems evaluation to identify system performance indicators and the best course of action to take to improve or correct performance based upon specific system goals.

            Js Libraries include
            React

            Angular

            Express
          </p>


          <Link to="/ProjectsWeb">
            <button type="button" class="mx-20 my-10 px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-200 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">View Projects</button>
          </Link>

        </div>






        <div class=" wrap overflow-hidden p-10 m-10 text-white border border-indigo-600">

          <div className="flex">
            <FaAndroid size="50px" color="gray" />
            <FaApple size="50px" color="gray" />
          </div>

          <span class="text-md md:text-2xl  ">
            Mobile development  -React Native
          </span>



          <p class=" text-gray-300 text-sm text-left">
            Superior development skills

            Include OOD, Agile Development, Solutions Architecture

            Project Management, and Technical Documentation.

            Exceptional ability to work in the following environments: Java Enterprise Edition, UNIX, Linux, and Windows.

            Strong decision maker, critical thinker, and creative designer with the ability to think around problems to unusual yet highly effective solutions.

            Excels in systems evaluation to identify system performance indicators and the best course of action to take to improve or correct performance based upon specific system goals.

            Js Libraries include
            React

            Angular

            Express
          </p>


          <Link to="/ProjectsMobile">
            <button type="button" class="mx-20 my-10 inline-block px-6 py-2 border-2 border-gray-500 text-gray-300 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-200 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">View projects</button>
          </Link>

        </div>









        <div class=" wrap overflow-hidden p-10 m-10 text-white border border-gray-700">

          <MdDataExploration size="50px" color="gray" />
          <span class="text-md lg:text-2xl ">
            Data science
          </span>


          <p class="text-left text-gray-300 text-sm">
            Superior development skills include Solutions Architecture, Project Management, and Technical Documentation.

            programming languages

            Android development with kotlin

            React native, Angular & Ionic
          </p>

          <Link to ="/ProjectsDS">
            <button type="button" class="mx-20 my-10 px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-medium text-xs leading-tight uppercase rounded hover:bg-indigo-200 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">View Projects</button>
          </Link>

        </div>






        <div class=" wrap overflow-hidden p-10 m-10 text-white     border    border-indigo-600"   >

          <GiVintageRobot size="50px" color="gray" />
          <span class="text-md lg:text-2xl ">
            ML intergration
          </span>


          <p class="text-left text-gray-300 text-sm">
            Superior development skills include Solutions Architecture, Project Management, and Technical Documentation.

            programming languages

            Android development with kotlin

            React native, Angular & Ionic
          </p>

          <Link to ="/ProjectsML">
            <button type="button" class="mx-20 my-10 inline-block px-6 py-2 border-2 border-gray-500 text-gray-300 font-medium text-xs leading-tight uppercase rounded hover:bg-gray-200 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">View projects</button>
          </Link>

        </div>





      </section>
    </>






  );
};

export default Header;
