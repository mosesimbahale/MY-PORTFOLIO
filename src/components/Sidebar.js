import React from "react";
import { Link } from "react-router-dom";

import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";


export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden  bg-gray-900 shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black md:hidden px-3 py-1 text-xl leading-none  rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"><FaBars/></i>
          </button>

          {/* Brand */}
          <Link
            className="md:block text-left md:pb-8 text-white mr-0 inline-block whitespace-nowrap font-bold p-4 px-0"
            to="/"
          >

               {/*Kenyan flag
               <div class=" w-10 h-10 ml-2 -mt-8">
                  <img src="./flag.jfif" class="" alt="" />
                </div>
              */}
     
          </Link>
         
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
           
            <li className="inline-block relative text-white pr-1">
             <p>Notifications dropdown</p>
            </li>
            
            <li className="inline-block relative text-white">
              <p>Userdropdown</p>
            </li>
          </ul>



          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
           
           
           
           
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Tailwind Starter Kit
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"><AiOutlineClose />  </i>
                  </button>
                </div>
              </div>
            </div>
           
           
           
           
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className=" px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
          
          
          
          
          
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className="   text-white hover:text-white uppercase py-3 font-bold block"
                  to="/dashboard"
                >
                  <i className="fas fa-tv opacity-75 mr-2 "></i> Me
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-indigo-500 hover:text-white  uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-newspaper text-blueGray-400 mr-2 "></i> Skills
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-indigo-500 hover:text-white uppercase py-3 font-bold block"
                  to="/account"
                >
                  <i className="fas fa-user-circle text-blueGray-400 mr-2"></i> Certifications
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-indigo-500 hover:text-white  uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-fingerprint text-indigo-500 hover:text-indigo-900 mr-2 "></i> Experience
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-indigo-500 hover:text-white uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 "></i> Achievements
                </Link>
              </li>

              
              <li className="items-center">
                <Link
                  className="text-indigo-500 hover:text-white uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-fingerprint text-indigo-500 hover:text-indigo-900 mr-2 "></i> Resume
                </Link>
              </li>


              <li className="items-center">
                <Link
                  className="text-indigo-500 hover:text-white uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-fingerprint text-indigo-500 hover:text-indigo-900 mr-2 "></i> CONTACT
                </Link>
              </li>



            </ul>


           
           
            {/* Divider */}
            <hr className="my-6 md:min-w-full " />
            {/* Heading */}
            <h6 className="md:min-w-full text-indigo-500 hover:text-white  uppercase font-bold block pt-1 pb-4 no-underline">
              Projects
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <Link
                  className="text-indigo-500 hover:text-white  block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fab fa-css3-alt mr-2 text-blueGray-400 text-base"></i> Web Projects
                </Link>
              </li>

         
         
             <li className="inline-flex">
                <Link
                  className="text-indigo-500 hover:text-white  block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fab fa-vuejs mr-2 text-blueGray-400 text-base"></i> Mobile Projects
                </Link>
              </li>



              <li className="inline-flex">
                <Link
                  className="text-indigo-500 hover:text-white  block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fab fa-vuejs mr-2 text-blueGray-400 text-base"></i> Data science projects
                </Link>
              </li>


              <li className="inline-flex">
                <Link
                  className="text-indigo-500 hover:text-white  block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fab fa-vuejs mr-2 text-blueGray-400 text-base"></i> ML Integration projects
                </Link>
              </li>









            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}