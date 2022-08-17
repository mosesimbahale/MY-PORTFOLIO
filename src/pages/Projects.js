import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { BiStar } from "react-icons/bi";
import { FaAndroid } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { MdDataExploration } from "react-icons/md";
import { GiVintageRobot } from "react-icons/gi";
import { FaApple } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

const today = new Date();
const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-600 to-orange-300">
      <Navbar />

      <div className=" pt-20 border-b border-gray-400 ">
        <div className="">
          {/* Code block starts */}
          <div className="py-4 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-200  ">
            <div>
              <h4 className="text-2xl font-bold leading-tight text-indigo-500">
                Complete Projects - Maintainance-phase
              </h4>
            
            
            </div>
           
            {/* Code block ends */}
          </div>
        </div>

        <div className="py-8 px-10 w-full ">
          <div className="lg:flex items-center justify-center w-full">
            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-indigo-white  p-6   rounded shadow-2xl shadow-indigo-500/50 ">
              <div className="flex items-center  mb-6">



                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-2xl font-bold leading-5 text-indigo-500">
                      SmartP.A
                    </p>
                    <p className="text-xs leading-normal pt-2 text-gray-400">
                      Manage your daily tasks and routines.
                    </p>
                  </div>

                  <div className="flex flex-row justify-between ">
                    <a
                      href="https://www.buymeacoffee.com/mosesimbahale"
                      target="blank"
                    >
                      <div className="flex items-center p-2 bg-yellow-100 rounded-3xl mr-2 ">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.9447 3.04697C12.5376 1.65101 10.2563 1.65101 8.84926 3.04697L8 4L7.15074 3.04699C5.74368 1.65102 3.46237 1.65102 2.0553 3.04699C0.648234 4.44295 0.648232 6.70626 2.0553 8.10222L7.99998 14L13.9447 8.10221C15.3518 6.70625 15.3518 4.44294 13.9447 3.04697Z"
                            fill="#FFE03E"
                            stroke="#FFE03E"
                            stroke-width="2"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </a>

                    <a
                      href="https://github.com/mosesimbahale/SmartPA"
                      target="blank"
                    >
                      <div className="flex items-center p-2 bg-indigo-200 rounded-3xl">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.0137 2.76683C11.379 1.89022 12.6208 1.89022 12.9861 2.76683L14.9102 7.38462C15.0654 7.75726 15.4295 8 15.8332 8H20.893C21.8234 8 22.2893 9.12483 21.6314 9.78268L17.5391 13.875C17.2823 14.1318 17.185 14.5076 17.2847 14.8568L18.9076 20.5369C19.1816 21.496 18.1122 22.2767 17.2822 21.7234L12.5546 18.5716C12.2187 18.3477 11.7811 18.3477 11.4452 18.5717L6.72544 21.7182C5.89284 22.2732 4.81988 21.49 5.09479 20.5279L6.71509 14.8568C6.81486 14.5076 6.71747 14.1318 6.46068 13.875L2.38859 9.8029C1.72328 9.13758 2.19448 8 3.13538 8H8.16658C8.57028 8 8.93438 7.75726 9.08965 7.38462L11.0137 2.76683Z"
                            fill="#4B1EFF"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div class="">
                  <img class="w-full" src="./todo.jfif" alt="diary" />

                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      The Best Virtual Assistant
                    </div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="flex flex-wrap">
                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #React
                    </div>
                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #Tailwind
                    </div>
                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #Firebase
                    </div>

                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #nano encryption
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    class=" shadow-lg  shadow-indigo-500/50 inline-flex items-center flex-justify-between  my-10 px-6 py-3 bg-indigo-500 text-white font-medium  leading-tight rounded-3xl hover:bg-indigo-600  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">
                      <FaGithub size="16px" />

                      <span className="px-2"> SOURCECODE</span>
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
                    </div>
                  </button>

                  <button
                    type="button"
                    class=" shadow-lg  shadow-indigo-500/50 inline-flex items-center flex-justify-between  my-10 px-6 py-3 bg-indigo-500 text-white font-medium  leading-tight rounded-3xl hover:bg-indigo-600  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">
                      <span className="px-2"> DEMO</span>
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
                    </div>
                  </button>
                </div>
              </div>
            </div>







            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-indigo-white  p-6   rounded shadow-2xl shadow-indigo-500/50 ">
              <div className="flex items-center  mb-6">
                
              <svg width="51" height="51" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.9338 18.1525C24.96 18.1038 24.9813 18.0525 24.9988 18.0012C25.6438 16.4612 26 14.7713 26 13C26 8.62 23.8225 4.73875 20.4937 2.3825C20.4387 2.335 20.3788 2.29375 20.315 2.25875C18.23 0.83375 15.71 0 13 0C5.83125 0 0 5.83125 0 13C0 15.7575 0.86375 18.3163 2.33375 20.4225C2.3375 20.43 2.34125 20.4363 2.345 20.4438C2.37375 20.49 2.405 20.5325 2.44 20.5725C4.80125 23.8563 8.655 26 13 26C15.9613 26 18.6925 25.005 20.8813 23.3312C20.9575 23.2875 21.03 23.235 21.095 23.17C21.1012 23.1638 21.1062 23.1575 21.1125 23.1513C22.7625 21.83 24.0837 20.1162 24.935 18.1537L24.9338 18.1525ZM20.4363 21.0975L19.7437 20.405C19.4975 20.1588 19.19 19.98 18.855 19.8862L18.8388 19.8813L16.1625 19.1838L16.4487 17.1725C16.4512 17.1663 16.455 17.16 16.46 17.1588L20.2612 15.5737L22.8312 17.9275C22.2287 19.125 21.4138 20.1975 20.4363 21.0963V21.0975ZM13 2C15.1525 2 17.1637 2.6225 18.8612 3.69625L18.9737 6.23125L16.2075 9.42125L16.205 9.425L12.3038 9.9575C12.29 9.955 12.275 9.95375 12.2638 9.94625L9.81875 8.175C9.795 8.1575 9.77125 8.14125 9.745 8.125C8.8125 7.5225 7.565 7.79 6.95875 8.72875L4.48875 12.6088C4.28125 12.9238 4.16875 13.29 4.165 13.6737L4.14625 18.1863L3.5175 18.5675C2.555 16.9337 2.0025 15.0325 2.0025 13.0037C2.0025 6.93875 6.9375 2.00375 13.0025 2.00375L13 2ZM4.685 20.1938L5.1875 19.8888C5.78125 19.5225 6.1375 18.8862 6.1375 18.1925L6.1625 13.6962C6.1625 13.6962 6.16625 13.69 6.16875 13.6862L8.64 9.805L8.65125 9.79625L11.1012 11.5712C11.1012 11.5712 11.1113 11.5788 11.1163 11.5813C11.5238 11.865 12.0212 11.9938 12.5162 11.9438C12.5275 11.9438 12.5375 11.9412 12.5487 11.94L16.4875 11.4025C16.97 11.3363 17.4087 11.0963 17.7225 10.725L20.4937 7.53C20.4937 7.53 20.5 7.5225 20.5025 7.52C20.83 7.13125 20.9988 6.63625 20.975 6.13L20.9412 5.39625C22.835 7.3725 24 10.0538 24 13C24 14.0125 23.8625 14.9925 23.605 15.9237L21.615 14.1025C21.0425 13.575 20.2075 13.4275 19.49 13.7275L15.6875 15.3162C15.045 15.5875 14.5925 16.16 14.4775 16.8475C14.4762 16.8562 14.475 16.8637 14.4738 16.8725L14.1875 18.89C14.0375 19.8912 14.6612 20.8475 15.6375 21.115L15.65 21.1187L18.3237 21.815C18.3237 21.815 18.33 21.8187 18.3325 21.82L18.835 22.3225C17.1425 23.385 15.1437 24 13.0025 24C9.685 24 6.70625 22.5238 4.6875 20.1938H4.685Z" fill="#0007AF"/>
</svg>

                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-2xl font-bold leading-5 text-indigo-500 ">
                      MATT
                    </p>
                    <p className="text-xs leading-normal pt-2 text-gray-400">
                      Web application for managing your daily tasks and
                      routines.
                    </p>
                  </div>
                  
                  <div className="flex flex-row justify-between ">
                    <a
                      href="https://www.buymeacoffee.com/mosesimbahale"
                      target="blank"
                    >
                      <div className="flex items-center p-2 bg-yellow-100 rounded-3xl mr-2 ">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.9447 3.04697C12.5376 1.65101 10.2563 1.65101 8.84926 3.04697L8 4L7.15074 3.04699C5.74368 1.65102 3.46237 1.65102 2.0553 3.04699C0.648234 4.44295 0.648232 6.70626 2.0553 8.10222L7.99998 14L13.9447 8.10221C15.3518 6.70625 15.3518 4.44294 13.9447 3.04697Z"
                            fill="#FFE03E"
                            stroke="#FFE03E"
                            stroke-width="2"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </a>

                    <a
                      href="https://github.com/mosesimbahale/SmartPA"
                      target="blank"
                    >
                      <div className="flex items-center p-2 bg-indigo-200 rounded-3xl">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.0137 2.76683C11.379 1.89022 12.6208 1.89022 12.9861 2.76683L14.9102 7.38462C15.0654 7.75726 15.4295 8 15.8332 8H20.893C21.8234 8 22.2893 9.12483 21.6314 9.78268L17.5391 13.875C17.2823 14.1318 17.185 14.5076 17.2847 14.8568L18.9076 20.5369C19.1816 21.496 18.1122 22.2767 17.2822 21.7234L12.5546 18.5716C12.2187 18.3477 11.7811 18.3477 11.4452 18.5717L6.72544 21.7182C5.89284 22.2732 4.81988 21.49 5.09479 20.5279L6.71509 14.8568C6.81486 14.5076 6.71747 14.1318 6.46068 13.875L2.38859 9.8029C1.72328 9.13758 2.19448 8 3.13538 8H8.16658C8.57028 8 8.93438 7.75726 9.08965 7.38462L11.0137 2.76683Z"
                            fill="#4B1EFF"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>

                </div>
              </div>

              <div className="px-2">
                <div class="">
                  <img class="w-full" src="./blog.png" alt="diary" />

                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      The Smart Ecommerce
                    </div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="flex flex-wrap">
                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #React
                    </div>
                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #Tailwind
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    class=" shadow-lg  shadow-indigo-500/50 inline-flex items-center flex-justify-between  my-10 px-6 py-3 bg-indigo-500 text-white font-medium  leading-tight rounded-3xl hover:bg-indigo-600  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">
                      <FaGithub size="16px" />

                      <span className="px-2"> SOURCECODE</span>
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
                    </div>
                  </button>

                  <button
                    type="button"
                    class=" shadow-lg  shadow-indigo-500/50 inline-flex items-center flex-justify-between  my-10 px-6 py-3 bg-indigo-500 text-white font-medium  leading-tight rounded-3xl hover:bg-indigo-600  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">
                      <span className="px-2"> DEMO</span>
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
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
















        <div className="py-8 px-10 w-full ">
          <div className="lg:flex items-center justify-center w-full">
            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-indigo-white  p-6   rounded shadow-2xl shadow-indigo-500/50 ">
              <div className="flex items-center  mb-6">
           
              <svg width="51" height="51" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.9338 18.1525C24.96 18.1038 24.9813 18.0525 24.9988 18.0012C25.6438 16.4612 26 14.7713 26 13C26 8.62 23.8225 4.73875 20.4937 2.3825C20.4387 2.335 20.3788 2.29375 20.315 2.25875C18.23 0.83375 15.71 0 13 0C5.83125 0 0 5.83125 0 13C0 15.7575 0.86375 18.3163 2.33375 20.4225C2.3375 20.43 2.34125 20.4363 2.345 20.4438C2.37375 20.49 2.405 20.5325 2.44 20.5725C4.80125 23.8563 8.655 26 13 26C15.9613 26 18.6925 25.005 20.8813 23.3312C20.9575 23.2875 21.03 23.235 21.095 23.17C21.1012 23.1638 21.1062 23.1575 21.1125 23.1513C22.7625 21.83 24.0837 20.1162 24.935 18.1537L24.9338 18.1525ZM20.4363 21.0975L19.7437 20.405C19.4975 20.1588 19.19 19.98 18.855 19.8862L18.8388 19.8813L16.1625 19.1838L16.4487 17.1725C16.4512 17.1663 16.455 17.16 16.46 17.1588L20.2612 15.5737L22.8312 17.9275C22.2287 19.125 21.4138 20.1975 20.4363 21.0963V21.0975ZM13 2C15.1525 2 17.1637 2.6225 18.8612 3.69625L18.9737 6.23125L16.2075 9.42125L16.205 9.425L12.3038 9.9575C12.29 9.955 12.275 9.95375 12.2638 9.94625L9.81875 8.175C9.795 8.1575 9.77125 8.14125 9.745 8.125C8.8125 7.5225 7.565 7.79 6.95875 8.72875L4.48875 12.6088C4.28125 12.9238 4.16875 13.29 4.165 13.6737L4.14625 18.1863L3.5175 18.5675C2.555 16.9337 2.0025 15.0325 2.0025 13.0037C2.0025 6.93875 6.9375 2.00375 13.0025 2.00375L13 2ZM4.685 20.1938L5.1875 19.8888C5.78125 19.5225 6.1375 18.8862 6.1375 18.1925L6.1625 13.6962C6.1625 13.6962 6.16625 13.69 6.16875 13.6862L8.64 9.805L8.65125 9.79625L11.1012 11.5712C11.1012 11.5712 11.1113 11.5788 11.1163 11.5813C11.5238 11.865 12.0212 11.9938 12.5162 11.9438C12.5275 11.9438 12.5375 11.9412 12.5487 11.94L16.4875 11.4025C16.97 11.3363 17.4087 11.0963 17.7225 10.725L20.4937 7.53C20.4937 7.53 20.5 7.5225 20.5025 7.52C20.83 7.13125 20.9988 6.63625 20.975 6.13L20.9412 5.39625C22.835 7.3725 24 10.0538 24 13C24 14.0125 23.8625 14.9925 23.605 15.9237L21.615 14.1025C21.0425 13.575 20.2075 13.4275 19.49 13.7275L15.6875 15.3162C15.045 15.5875 14.5925 16.16 14.4775 16.8475C14.4762 16.8562 14.475 16.8637 14.4738 16.8725L14.1875 18.89C14.0375 19.8912 14.6612 20.8475 15.6375 21.115L15.65 21.1187L18.3237 21.815C18.3237 21.815 18.33 21.8187 18.3325 21.82L18.835 22.3225C17.1425 23.385 15.1437 24 13.0025 24C9.685 24 6.70625 22.5238 4.6875 20.1938H4.685Z" fill="#0007AF"/>
</svg>

                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-2xl font-bold leading-5 text-indigo-500">
                      BLOG
                    </p>
                    <p className="text-xs leading-normal pt-2 text-gray-400">
                      Manage your daily tasks and routines.
                    </p>
                  </div>

                  <div className="flex flex-row justify-between ">
                    <a
                      href="https://www.buymeacoffee.com/mosesimbahale"
                      target="blank"
                    >
                      <div className="flex items-center p-2 bg-yellow-100 rounded-3xl mr-2 ">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.9447 3.04697C12.5376 1.65101 10.2563 1.65101 8.84926 3.04697L8 4L7.15074 3.04699C5.74368 1.65102 3.46237 1.65102 2.0553 3.04699C0.648234 4.44295 0.648232 6.70626 2.0553 8.10222L7.99998 14L13.9447 8.10221C15.3518 6.70625 15.3518 4.44294 13.9447 3.04697Z"
                            fill="#FFE03E"
                            stroke="#FFE03E"
                            stroke-width="2"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </a>

                    <a
                      href="https://github.com/mosesimbahale/SmartPA"
                      target="blank"
                    >
                      <div className="flex items-center p-2 bg-indigo-200 rounded-3xl">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.0137 2.76683C11.379 1.89022 12.6208 1.89022 12.9861 2.76683L14.9102 7.38462C15.0654 7.75726 15.4295 8 15.8332 8H20.893C21.8234 8 22.2893 9.12483 21.6314 9.78268L17.5391 13.875C17.2823 14.1318 17.185 14.5076 17.2847 14.8568L18.9076 20.5369C19.1816 21.496 18.1122 22.2767 17.2822 21.7234L12.5546 18.5716C12.2187 18.3477 11.7811 18.3477 11.4452 18.5717L6.72544 21.7182C5.89284 22.2732 4.81988 21.49 5.09479 20.5279L6.71509 14.8568C6.81486 14.5076 6.71747 14.1318 6.46068 13.875L2.38859 9.8029C1.72328 9.13758 2.19448 8 3.13538 8H8.16658C8.57028 8 8.93438 7.75726 9.08965 7.38462L11.0137 2.76683Z"
                            fill="#4B1EFF"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div class="">
                  <img class="w-full" src="./todo.jfif" alt="diary" />

                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      The Best Virtual Assistant
                    </div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="flex flex-wrap">
                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #React
                    </div>
                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #Tailwind
                    </div>
                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #Firebase
                    </div>

                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #nano encryption
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    class=" shadow-lg  shadow-indigo-500/50 inline-flex items-center flex-justify-between  my-10 px-6 py-3 bg-indigo-500 text-white font-medium  leading-tight rounded-3xl hover:bg-indigo-600  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">
                      <FaGithub size="16px" />

                      <span className="px-2"> SOURCECODE</span>
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
                    </div>
                  </button>

                  <button
                    type="button"
                    class=" shadow-lg  shadow-indigo-500/50 inline-flex items-center flex-justify-between  my-10 px-6 py-3 bg-indigo-500 text-white font-medium  leading-tight rounded-3xl hover:bg-indigo-600  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">
                      <span className="px-2"> DEMO</span>
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
                    </div>
                  </button>
                </div>
              </div>
            </div>







            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-indigo-white  p-6   rounded shadow-2xl shadow-indigo-500/50 ">
              <div className="flex items-center  mb-6">
                
              <svg width="51" height="51" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.9338 18.1525C24.96 18.1038 24.9813 18.0525 24.9988 18.0012C25.6438 16.4612 26 14.7713 26 13C26 8.62 23.8225 4.73875 20.4937 2.3825C20.4387 2.335 20.3788 2.29375 20.315 2.25875C18.23 0.83375 15.71 0 13 0C5.83125 0 0 5.83125 0 13C0 15.7575 0.86375 18.3163 2.33375 20.4225C2.3375 20.43 2.34125 20.4363 2.345 20.4438C2.37375 20.49 2.405 20.5325 2.44 20.5725C4.80125 23.8563 8.655 26 13 26C15.9613 26 18.6925 25.005 20.8813 23.3312C20.9575 23.2875 21.03 23.235 21.095 23.17C21.1012 23.1638 21.1062 23.1575 21.1125 23.1513C22.7625 21.83 24.0837 20.1162 24.935 18.1537L24.9338 18.1525ZM20.4363 21.0975L19.7437 20.405C19.4975 20.1588 19.19 19.98 18.855 19.8862L18.8388 19.8813L16.1625 19.1838L16.4487 17.1725C16.4512 17.1663 16.455 17.16 16.46 17.1588L20.2612 15.5737L22.8312 17.9275C22.2287 19.125 21.4138 20.1975 20.4363 21.0963V21.0975ZM13 2C15.1525 2 17.1637 2.6225 18.8612 3.69625L18.9737 6.23125L16.2075 9.42125L16.205 9.425L12.3038 9.9575C12.29 9.955 12.275 9.95375 12.2638 9.94625L9.81875 8.175C9.795 8.1575 9.77125 8.14125 9.745 8.125C8.8125 7.5225 7.565 7.79 6.95875 8.72875L4.48875 12.6088C4.28125 12.9238 4.16875 13.29 4.165 13.6737L4.14625 18.1863L3.5175 18.5675C2.555 16.9337 2.0025 15.0325 2.0025 13.0037C2.0025 6.93875 6.9375 2.00375 13.0025 2.00375L13 2ZM4.685 20.1938L5.1875 19.8888C5.78125 19.5225 6.1375 18.8862 6.1375 18.1925L6.1625 13.6962C6.1625 13.6962 6.16625 13.69 6.16875 13.6862L8.64 9.805L8.65125 9.79625L11.1012 11.5712C11.1012 11.5712 11.1113 11.5788 11.1163 11.5813C11.5238 11.865 12.0212 11.9938 12.5162 11.9438C12.5275 11.9438 12.5375 11.9412 12.5487 11.94L16.4875 11.4025C16.97 11.3363 17.4087 11.0963 17.7225 10.725L20.4937 7.53C20.4937 7.53 20.5 7.5225 20.5025 7.52C20.83 7.13125 20.9988 6.63625 20.975 6.13L20.9412 5.39625C22.835 7.3725 24 10.0538 24 13C24 14.0125 23.8625 14.9925 23.605 15.9237L21.615 14.1025C21.0425 13.575 20.2075 13.4275 19.49 13.7275L15.6875 15.3162C15.045 15.5875 14.5925 16.16 14.4775 16.8475C14.4762 16.8562 14.475 16.8637 14.4738 16.8725L14.1875 18.89C14.0375 19.8912 14.6612 20.8475 15.6375 21.115L15.65 21.1187L18.3237 21.815C18.3237 21.815 18.33 21.8187 18.3325 21.82L18.835 22.3225C17.1425 23.385 15.1437 24 13.0025 24C9.685 24 6.70625 22.5238 4.6875 20.1938H4.685Z" fill="#0007AF"/>
</svg>

                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-2xl font-bold leading-5 text-indigo-500 ">
                      SmartP.A
                    </p>
                    <p className="text-xs leading-normal pt-2 text-gray-400">
                      Web application for managing your daily tasks and
                      routines.
                    </p>
                  </div>
                  <BiStar size="30px" color="" />
                </div>
              </div>

              <div className="px-2">
                <div class="">
                  <img class="w-full" src="./blog.png" alt="diary" />

                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                      The Modern Ecommerce
                    </div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>

                  <div className="flex flex-wrap">
                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #React
                    </div>
                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #Tailwind
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    class=" shadow-lg  shadow-indigo-500/50 inline-flex items-center flex-justify-between  my-10 px-6 py-3 bg-indigo-500 text-white font-medium  leading-tight rounded-3xl hover:bg-indigo-600  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">
                      <FaGithub size="16px" />

                      <span className="px-2"> SOURCECODE</span>
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
                    </div>
                  </button>

                  <button
                    type="button"
                    class=" shadow-lg  shadow-indigo-500/50 inline-flex items-center flex-justify-between  my-10 px-6 py-3 bg-indigo-500 text-white font-medium  leading-tight rounded-3xl hover:bg-indigo-600  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">
                      <span className="px-2"> DEMO</span>
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
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
























































        <div className="pb-8 px-10 w-full ">
          <div className="lg:flex items-center justify-center w-full">
            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-600 text-white rounded shadow-lg">
              <div className="flex items-center border-b border-indigo-500 mb-6">
                <FaApple size="50" color="brown" />
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-xl font-bold leading-5 ">Booking App</p>
                    <p className="text-xs leading-normal pt-2 text-gray-400">
                      Web application for managing your daily tasks and
                      routines.
                    </p>
                  </div>
                  <BiStar size="30px" color="" />
                </div>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Descriprion</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Specs</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>

                <div className="flex flex-wrap">
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #React
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Tailwind
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Firebase
                  </div>

                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #React
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">
                      <FaGithub size="12px" /> Sourcecode
                    </div>
                  </button>

                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Playstore
                  </button>

                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    apple store
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-600 text-white rounded shadow-lg">
              <div className="flex items-center border-b border-indigo-500 mb-6">
                <FaAndroid size="50" color="brown" />
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-xl font-bold leading-5 ">BLOG app</p>
                    <p className="text-xs leading-normal pt-2 text-gray-400">
                      Web application for managing your daily tasks and
                      routines.
                    </p>
                  </div>
                  <BiStar size="30px" />
                </div>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Descriprion</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Specs</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>

                <div className="flex flex-wrap">
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #React
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Tailwind
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Firebase
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">
                      <FaGithub size="12px" /> Sourcecode
                    </div>
                  </button>

                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Playstore
                  </button>

                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Apple store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8 px-10 w-full ">
          <div className="lg:flex items-center justify-center w-full">
            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-600 text-white rounded shadow-lg">
              <div className="flex items-center border-b border-indigo-500 mb-6">
                <GiVintageRobot size="50" color="brown" />
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-xl font-bold leading-5 ">
                      Smart Booking
                    </p>
                    <p className="text-xs leading-normal pt-2 text-gray-400">
                      Web application for managing your daily tasks and
                      routines.
                    </p>
                  </div>
                  <BiStar size="30px" color="" />
                </div>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Descriprion</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Specs</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>

                <div className="flex flex-wrap">
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #React
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Tailwind
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Firebase
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #nano encryption
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #React
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Tailwind
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Firebase
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #nano encryption
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">
                      <FaGithub size="12px" /> Sourcecode
                    </div>
                  </button>

                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-600 text-white rounded shadow-lg">
              <div className="flex items-center border-b border-indigo-500 mb-6">
                <GiVintageRobot size="50" color="brown" />
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-xl font-bold leading-5 ">
                      Smart Car Lease
                    </p>
                    <p className="text-xs leading-normal pt-2 text-gray-400">
                      Web application for managing your daily tasks and
                      routines.
                    </p>
                  </div>
                  <BiStar size="30px" />
                </div>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Descriprion</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Specs</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>

                <div className="flex flex-wrap">
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #React
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Tailwind
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Firebase
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #nano encryption
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #React
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Tailwind
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Firebase
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #nano encryption
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">
                      <FaGithub size="12px" /> Sourcecode
                    </div>
                  </button>

                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8 px-10 w-full ">
          <div className="lg:flex items-center justify-center w-full">
            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-700 text-white rounded shadow-xl">
              <div className="flex items-center border-b border-indigo-500 mb-6">
                <MdDataExploration size="50" color="brown" />
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-xl font-bold leading-5 ">
                      Stock prediction model
                    </p>
                    <p className="text-xs leading-normal pt-2 text-gray-400">
                      Web application for predicting future stock price from the
                      past trends.
                    </p>
                  </div>
                  <BiStar size="30px" color="" />
                </div>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Problem statement</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Specs</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>
                <h2 className="font-medium">Dataset</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>

                <div className="flex flex-wrap">
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #React
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Tailwind
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Firebase
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Python
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">Kaggle Note book</div>
                  </button>

                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-700 text-white rounded shadow-xl">
              <div className="flex items-center border-b border-indigo-500 mb-6">
                <MdDataExploration size="50" color="brown" />
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-xl font-bold leading-5 ">
                      Weather prediction model
                    </p>
                    <p className="text-xs leading-normal pt-2 text-gray-400">
                      Web application for predicting weather patterns.
                    </p>
                  </div>
                  <BiStar size="30px" />
                </div>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Descriprion</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Specs</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>
                <h2 className="font-medium">Dataset</h2>
                <p className="text-sm leading-5 py-4 text-gray-300">
                  A group of people interested in dogecoin, the currency and a
                  bit of side for the meme and dof that we all know and love.
                  These cases are perfectly simple and easy to distinguish.
                </p>

                <div className="flex flex-wrap">
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #React
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Tailwind
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #Firebase
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                    #R
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <div className="flex  flex-row">kaggle Note book</div>
                  </button>

                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4  bg-gray-800 w-full text-gray-400">
        <div className="text-gray-400 md:mx-40 mx-4">
          <p>Moses Imbahale, All rights reserved</p>
          <p>Copyright &copy; {today.getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
