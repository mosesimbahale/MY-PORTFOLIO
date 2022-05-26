//common imports
import React from "react";

//components imports
import Skills from "./Skills";
import Project from "./Project";
import Certification from "./Certification";
import Footer from "./Footer";
import Avatar from "./Avatar";
import Experience from "./Experience";
import Testimonials from "./Testimonials";
import Resume from "./Resume";

const Combine = () => {
  return (
    <div className="App m-20">
      <div className="flex flex-col justify-center ">
        <Avatar />

        <Skills />

        <Certification />

        <Experience />

        <Testimonials />

        <Resume />


        <Project />

      

        

        <Footer />
      </div>
    </div>
  );
};

export default Combine;
