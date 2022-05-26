//common imports
import React from "react";

//components imports
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Combine from "../components/Combine";

const Home = () => {
  return (
    <div className="App">
      <div className="relative">   
      
            <div class="fixed top-0 w-full ">
              <Navbar />
            </div>
            
            <Sidebar />
            <Combine />
            </div>
        </div>
      
  );
};

export default Home;
