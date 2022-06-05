//common imports
import React from "react";

//components imports
import Skills from "./Skills";

import Certification from "./Certification";
import Footer from "./Footer";
import Avatar from "./Avatar";
import Experience from "./Experience";
import Testimonials from "./Testimonials";
import Resume from "./Resume";

const Combine = () => {
  return (
    <div className="App">
      <div className="flex flex-col justify-center ">
        <Avatar />

        <Skills />

        <Certification />

        <Experience />

        <Testimonials />

        <Resume />
  

      
        <Footer />
      </div>
    </div>
  );
};

export default Combine;
