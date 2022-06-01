//common imports
import React from "react";

//components imports

import Navbar from "../components/Navbar";
import Combine from "../components/Combine";

const Home = () => {
  return (
    <div className="App">
      <div className="relative">   
      
            <div class="sticky top-0 ">

              <Navbar />
            </div>
            
       
            <Combine />
            </div>
        </div>
      
  );
};

export default Home;
