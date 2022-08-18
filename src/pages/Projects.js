import React from "react";
import Navbar from "../components/Navbar";


import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-600 to-orange-300 min-h-screen">
      <Navbar />

      <div className=" pt-20 ">
        <div className="">
          {/* Code block starts */}
          <div className="py-4 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 bg-gray-800 rounded-2xl ">
            <div>
              <h4 className="text-2xl font-bold leading-tight text-white text-center">
                Personal projects
              </h4>
            </div>

            {/* Code block ends */}
          </div>
        </div>

        <div className="py-8 px-10 w-full ">
          <div className="lg:flex items-center justify-center w-full">
            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6   rounded-2xl shadow-2xl shadow-gray-500/50 text-white ">
              <div className="flex items-center  mb-6">
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-2xl font-bold leading-5 text-white">
                      Blog with React and Firebase
                    </p>
                    <p className="text-xs leading-normal pt-2 text-gray-400">
                      Performing CRUD operations on Firestore database
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


                  </div>
                </div>
              </div>

              <div className="px-2">
                <div class="">
                  <img class="w-full" src="./todo.jfif" alt="diary" />


                  <div className="flex flex-wrap">
                    <div className="py-2 px-4 m-2 text-xs leading-3 rounded-full bg-indigo-300">
                      #React
                    </div>
                    <div className="py-2 px-4 m-2 text-xs leading-3 rounded-full bg-indigo-300">
                      #Tailwind
                    </div>
                    <div className="py-2 px-4 m-2 text-xs leading-3 rounded-full bg-indigo-300">
                      #Firebase
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <a
                      href="https://github.com/mosesimbahale/machineLearning/blob/main/positon_salary_predictor0.ipynb"
                      target="blank"
                    >
                      <div className="flex  flex-row">
                        <FaGithub size="12px" /> Sourcecode
                      </div>
                    </a>
                  </button>

                 
                </div>
              </div>
            </div>

            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-indigo-white  p-6   rounded-2xl bg-gray-800 shadow-2xl shadow-gray-500/50 ">
              <div className="flex items-center  mb-6">
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-2xl font-bold leading-5 text-white ">
                      Blog with NextJs and hygraph CMS
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
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div class="">
                  <img class="w-full" src="./blog.png" alt="diary" />


                  <div className="flex flex-wrap">
                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #React
                    </div>
                    <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                      #Tailwind
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between mt-4">
                <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <a
                      href="https://github.com/mosesimbahale/machineLearning/blob/main/positon_salary_predictor0.ipynb"
                      target="blank"
                    >
                      <div className="flex  flex-row">
                        <FaGithub size="12px" /> Sourcecode
                      </div>
                    </a>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8 px-10 w-full ">
          <div className="lg:flex items-center justify-center w-full">
            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 text-white rounded-2xl shadow-2xl shadow-gray-500/50">
              <div className="flex items-center border-b border-orange-500 mb-6">
     
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-xl font-bold leading-5 ">
                      The IBM Research Africa Technical Challenge 2022
                    </p>
                    <p className="text-xs leading-normal pt-2 text-gray-400"></p>
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


                  </div>
                </div>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Problem Statement</h2>
                <p className="text-sm leading-5 py-4 text-white">
                  The public transportation demand prediction dataset comprises
                  information about tickets purchased from Mobiticket for 14
                  routes from “up country” into Nairobi for 7 months. You’ll
                  need a Zindi account to access the data and you can read more
                  about the dataset from the challenge page. Your task is not to
                  participate in the Zindi challenge but answer a series of
                  questions below using the data from (train_revised.csv) file.
                </p>
              </div>

              <div className="px-2">
                <div className="flex flex-wrap">
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-white rounded-full bg-indigo-300">
                    #React
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-white rounded-full bg-indigo-300">
                    #Tailwind
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-white rounded-full bg-indigo-300">
                    #Firebase
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-white rounded-full bg-indigo-300">
                    #nano encryption
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <a
                      href="https://github.com/mosesimbahale/machineLearning/blob/main/IBM_research_ATC_2022.ipynb"
                      target="blank"
                    >
                      <div className="flex  flex-row">
                        <FaGithub size="12px" /> Sourcecode
                      </div>
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 text-white rounded-2xl shadow-2xl shadow-gray-500/50">
              <div className="flex items-center border-b border-orange-500 mb-6">
             
                <div className="flex items-start justify-between w-full">
                  <div className="pl-3 w-full">
                    <p className="text-xl font-bold leading-5 ">
                      Position Salary Prediction Challenge
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


                  </div>
                </div>
              </div>

              <div className="px-2">
                <h2 className="font-medium">Objectives</h2>
                <p className="text-sm leading-5 py-4 text-white">
                  To determine what salary to ofer to new employees in a firm.
                  In order to gain useful insights into the job recruitment To
                  make better decisions on salary increment- one can decide
                  precisely what is unknown and unexpected(salary increment for
                  certain positions) To create models - To forecast future
                  trends in salary icrements with accordance to position in a
                  given firm (This enables firms to maintain motivated
                  employees) To develop a system that will predict the salary
                  based on different parameters used in company
                </p>
              </div>

              <div className="px-2">
                <div className="flex flex-wrap">
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-white rounded-full bg-indigo-300">
                    #Python
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-white rounded-full bg-indigo-300">
                    #Model Training
                  </div>
                  <div className="py-2 px-4 m-2 text-xs leading-3 text-white rounded-full bg-indigo-300">
                    #colab
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <a
                      href="https://github.com/mosesimbahale/machineLearning/blob/main/positon_salary_predictor0.ipynb"
                      target="blank"
                    >
                      <div className="flex  flex-row">
                        <FaGithub size="12px" /> Sourcecode
                      </div>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
