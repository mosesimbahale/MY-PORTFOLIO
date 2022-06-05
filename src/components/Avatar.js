import React from 'react';

import { FaBriefcase } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';

const Avatar = () => {
  return (

<>



<div class="flex items-center justify-center bg-gradient-to-br from-grey-500 to-grey-800">
   <div class="bg-white text-center px-14 py-5">
     <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" 
     
     src="./ms.jfif" alt="me"/>
     
    

     <div className="text-center mt-2">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 ">
                    Moses Imbahale
                  </h3>
              
                  
                  <div className="flex justify-center m-2 text-gray-700 mt-2">
                    < FaBriefcase size="20px"  />
                    <p className='pl-4 font-semibold'>Software Engineer - Ml</p>
                  </div>

                  <div className="flex justify-center m-2 p-2 text-gray-700">
                    <FaUserGraduate  size="20px" />
                    <p className='pl-4 font-semibold'>University of KCA,  B.Sc. Software Engineering</p>
                  </div>
</div>


   
     <p class=" text-gray-700 mt-4 text-left "> 
     
     I have over Five years of experience as a software engineer in development of applications. I excel in every stage of the life cycle of software development, including design creation, coding, debugging, testing, and maintenance. I am an expert in devising innovative and tailored solutions to assist businesses achieve their goals in a variety of industries. I have advanced skills and knowledge of leading programming tools with a strong background in mathematics, algorithms, and data-processing logic."
     I have over Five years of experience as a software engineer in development of applications. I excel in every stage of the life cycle of software development, including design creation, coding, debugging, testing, and maintenance. I am an expert in devising innovative and tailored solutions to assist businesses achieve their goals in a variety of industries. I have advanced skills and knowledge of leading programming tools with a strong background in mathematics, algorithms, and data-processing logic."
      </p>
    


    
    
   </div>
 </div>






</>


    )
}

export default Avatar;