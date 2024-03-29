//common imports
import React from "react";
import Navbar from "../components/Navbar";


//components imports
import Skills from "../components/Skills";

import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";




const Home = () => {
  return (
    <>
     
      <div className=" ">

        <div className="App">
          <div className=" bg-gradient-to-r from-gray-900 via-gray-600 to-orange-300 ">
            <Navbar />

            <Avatar />

            <Skills />

            <Experience />

            <Achievements />

            <Footer />
          </div>
        </div>


      </div>
    </>
  );
};

export default Home;
