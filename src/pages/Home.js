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
import Testimonials from "../components/Testimonials";
import Resume from "../components/Resume";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 ">

        <div className="App">
          <div className="flex flex-col justify-center ">
            <Navbar />

            <Avatar />

            <Skills />

            <Certification />

            <Experience />

            <Testimonials />

            <Resume />

            <Footer />
          </div>
        </div>


      </div>
    </>
  );
};

export default Home;
