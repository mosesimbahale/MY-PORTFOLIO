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
                  <h3 className="text-4xl font-semibold leading-normal mb-2  ">
                    Moses Imbahale
                  </h3>
              
                  
                  <div className="flex justify-center m-2  mt-2">
                    < FaBriefcase size="20px"  />
                    <p className='pl-4 font-semibold'>Software Engineer</p>
                  </div>

                  <div className="flex justify-center m-2 p-2">
                    <FaUserGraduate  size="20px" />
                    <p className='pl-4 font-semibold'>University of KCA,  B.Sc. Software Engineering</p>
                  </div>
</div>


   
     <p class="mt-4 text-left "> 
     I have been practicing Software Engineering in the past 4 years buy 
     
      I excel in every stage of the life cycle of software development, including design creation, coding, debugging, testing, and maintenance. I am an expert in devising innovative and tailored solutions to assist businesses and industries achieve their goals. I have advanced skills and knowledge of leading programming tools with a strong background in mathematics, algorithms, and data-processing logic."

     </p>

     <p class=" mt-4 text-left "> 
     I have been practicing Software Engineering in the past 4 years buy 
     
      I excel in every stage of the life cycle of software development, including design creation, coding, debugging, testing, and maintenance. I am an expert in devising innovative and tailored solutions to assist businesses and industries achieve their goals. I have advanced skills and knowledge of leading programming tools with a strong background in mathematics, algorithms, and data-processing logic."

     </p>

     <p class=" mt-4 text-left "> 
     I have been practicing Software Engineering in the past 4 years buy 
     
      I excel in every stage of the life cycle of software development, including design creation, coding, debugging, testing, and maintenance. I am an expert in devising innovative and tailored solutions to assist businesses and industries achieve their goals. I have advanced skills and knowledge of leading programming tools with a strong background in mathematics, algorithms, and data-processing logic."

     </p>
    


    
    
   </div>
 </div>






</>


    )
}

export default Avatar;