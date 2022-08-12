import React from "react";
//Icons
import {MdOutlineWork} from 'react-icons/md';
import {IoMdSchool} from 'react-icons/io';
import {AiFillStar} from 'react-icons/ai';

//Vertical Timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";



const Experience = () => {
  return (
    <div class="bg-gray-900  py-10 mx-24">

      
<div className="flex flex-wrap justify-center pb-10  ">
      <svg width="51" height="51" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 15.2929C5.68342 14.9024 6.31658 14.9024 6.70711 15.2929L16 24.5858L25.2929 15.2929C25.6834 14.9024 26.3166 14.9024 26.7071 15.2929C27.0976 15.6834 27.0976 16.3166 26.7071 16.7071L16.7071 26.7071C16.3166 27.0976 15.6834 27.0976 15.2929 26.7071L5.29289 16.7071C4.90237 16.3166 4.90237 15.6834 5.29289 15.2929Z" fill="#0007AF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L16 14.5858L25.2929 5.29289C25.6834 4.90237 26.3166 4.90237 26.7071 5.29289C27.0976 5.68342 27.0976 6.31658 26.7071 6.70711L16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0007AF"/>
</svg>

</div>

        
<h2 class="text-center text-2xl font-bold mb-20  text-white">My Experience</h2>

        <VerticalTimeline>
        
    


          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2018 - 2022"
            iconStyle={{ background: "black", color: "white" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Software Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              KCA UNIERSITY
            </h4>
            <p>Nairobi, Kenya</p>
          </VerticalTimelineElement>



        


          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - Present"
            iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
            Master Agile Development Scrum 
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Projects
            </h4>
            <p>Personal projects</p>
          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title">Attachment</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kadana
            </h4>
            <p>Nairobi, Kenya</p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title">Developer intern</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kadana
            </h4>
            <p>Nairobi, Kenya</p>
          </VerticalTimelineElement>


          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2022 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdOutlineWork />}
          >
            <h3 className="vertical-timeline-element-title">TensorflowJs</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online
            </h4>
            <p>Nairobi, Kenya</p>
          </VerticalTimelineElement>



          
          <VerticalTimelineElement
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<AiFillStar />}
          />
        </VerticalTimeline>
 
    </div>
  );
};

export default Experience;
