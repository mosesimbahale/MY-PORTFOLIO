//common imports
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


//components imports
import Skills from "../components/Skills";
import Certification from "../components/Certification";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";




const Home = () => {
  return (
    <>
     
      <div className=" ">

        <div className="App">
          <div className="flex flex-col justify-center ">
            <Navbar />

            <Avatar />

            <Skills />

            <Certification />

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
