import React from "react";

import { GiAchievement } from 'react-icons/gi';

const Achievements = () => {
  return (
    <>
      <section class="pt-20 2xl:pt-40 pb-40 2xl:pb-80 overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="max-w-xl mx-auto mb-16 lg:mb-28 text-center">
            <span class="text-xl font-bold text-orange-400">
              My Achievements
            </span>
            <h2 class="mt-6 mb-12 text-4xl font-bold font-heading text-white">
            In my career as a growing developer, I have many achievements. 
            </h2>
            <p class="text-lg text-gray-100">
              below are just a few of them.
            </p>
          </div>
          <div class="flex flex-wrap items-center -mx-10">
            
            
            <div class="relative w-full lg:w-1/2 px-10 mb-16 lg:mb-0">
              <div class="relative lg:max-w-md lg:ml-auto z-10">
                <img
                  class="object-cover w-full lg:w-112 h-160"
                  src="./AdobeStock_435635060.jpeg"
                  alt=""
                />
              </div>
            </div>


            <div class="w-full lg:w-1/2 px-10 text-white">
              <div class="max-w-lg">
                <ul>
                  <li class="flex pb-10 mb-8 border-b border-orange-500">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-16 h-16 bg-orange-100 text-lg font-bold rounded-full">
                        <GiAchievement color="orange" size="30px" />
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-6 text-lg font-bold font-heading">
                      Google Africa Developer Scholarship GADS 2019 - Mobile Web
                      </h3>
                     
                    </div>
                  </li>
                  <li class="flex pb-10 mb-8 border-b border-orange-500">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-orange-100 text-lg font-bold rounded-full">
                      <GiAchievement color="orange" size="30px" />
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-6 text-lg font-bold font-heading">
                      Google Africa Developer Scholarship GADS 2021 - Android 
                      </h3>
                      
                    </div>
                  </li>
                 
                  <li class="flex pb-10 border-b border-orange-500">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-orange-100 text-lg font-bold rounded-full">
                      <GiAchievement color="orange" size="30px" />
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-6 text-lg font-bold font-heading">
                      Participation in the Andela Hackathons
                      </h3>
                      
                    </div>
                  </li>


                  <li class="flex pb-10 border-b border-orange-500 py-10">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-orange-100 text-lg font-bold rounded-full">
                      <GiAchievement color="orange" size="30px" />
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-6 text-lg font-bold font-heading">
                       Google Africa Developer Scholarship GADS 2022 - Cloud
                      </h3>
                     
                    </div>
                  </li>


                  
                  <li class="flex py-10">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-orange-100 text-lg font-bold rounded-full">
                      <GiAchievement color="orange" size="30px" />
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-6 text-lg font-bold font-heading">
                      Perticipation in ALX Software Engineering Programme
                      </h3>
                      
                    </div>
                  </li>





                  



                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
