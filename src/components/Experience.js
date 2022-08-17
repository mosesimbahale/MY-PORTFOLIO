import React from "react";
import { Link } from "react-router-dom";
//Icons
import { MdOutlineWork } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

//Vertical Timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div class="bg-gray-800  py-20 my-20 lg:mx-24 rounded-2xl ">
      <h2 class="text-center text-2xl font-bold mb-20  text-orange-400">
        My Experience
      </h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#fb923c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb( 251,146,60 )" }}
          date="2018 - 2022"
          iconStyle={{ background: "#fb923c", color: "white" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Software Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">KCA UNIERSITY</h4>
          <p>Nairobi, Kenya</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#fb923c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb( 251,146,60 )" }}
          date="2020 - Present"
          iconStyle={{ background: "#fb923c", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Master Agile Development Scrum
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Projects</h4>
          <p>Personal projects</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fb923c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb( 251,146,60 )" }}
          date="2022 - present"
          iconStyle={{ background: "#fb923c", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">Attachment</h3>
          <h4 className="vertical-timeline-element-subtitle">Kadana</h4>
          <p>Nairobi, Kenya</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fb923c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb( 251,146,60 )" }}
          date="2022 - 2023"
          iconStyle={{ background: "#fb923c", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">Developer intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Kadana</h4>
          <p>Nairobi, Kenya</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fb923c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb( 251,146,60 )" }}
          date="2022 - 2023"
          iconStyle={{ background: "#fb923c", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">TensorflowJs</h3>
          <h4 className="vertical-timeline-element-subtitle">Online</h4>
          <p>Nairobi, Kenya</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fb923c", color: "#fff" }}
          icon={<AiFillStar />}
        />
      </VerticalTimeline>

      <div className="flex justify-center pt-20">
        <Link to="/certifications">
          <button
            type="button"
            class=" shadow-lg  shadow-orange-500/50 inline-flex items-center flex-justify-between mx-20 my-10 px-6 py-3 bg-orange-500 text-white font-medium  leading-tight rounded-3xl hover:bg-orange-300  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <span className="px-2"> My Certifications</span>
            <svg
              width="23"
              height="23"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.7071 7.29289C25.0976 7.68342 25.0976 8.31658 24.7071 8.70711L8.70711 24.7071C8.31658 25.0976 7.68342 25.0976 7.29289 24.7071C6.90237 24.3166 6.90237 23.6834 7.29289 23.2929L23.2929 7.29289C23.6834 6.90237 24.3166 6.90237 24.7071 7.29289Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 8C10 7.44772 10.4477 7 11 7H24C24.5523 7 25 7.44772 25 8V21C25 21.5523 24.5523 22 24 22C23.4477 22 23 21.5523 23 21V9H11C10.4477 9 10 8.55228 10 8Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Experience;
