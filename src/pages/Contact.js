import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  
  return (
    <div className="App">
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900 via-gray-600 to-orange-300   w-full pt-20">
        <div className="w-full flex items-center justify-center py-12">
          <div className="  bg-gray-600 shadow-lg rounded-2xl py-12 lg:px-28 px-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-100">
              Write a message directly to my Inbox
            </p>
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-100">
                  Name
                </label>
                <input
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input  name"
                />
              </div>


              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-100">
                  Email Address
                </label>
                <input
          
   

                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input email address"
                />
              </div>


            </div>
            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-100">
                  Company name
                </label>
                <input
            
                  role="input"

                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                  placeholder="Please input company name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-100">
                  Country
                </label>
                <input


                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input country name"
                />
              </div>
            </div>


            
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none text-gray-100">
                  Message
                </label>
                <textarea

                  type="name"
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  defaultValue={""}
                />
              </div>
            </div>
      
            <div className="flex items-center justify-center w-full">
              <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-orange-400 hover:bg-orange-300 focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 focus:outline-none rounded-2xl">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
