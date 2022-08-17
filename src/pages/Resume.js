import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import {HiOutlineDownload} from 'react-icons/hi';


import Navbar from "../components/Navbar";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-gray-900 via-gray-600 to-orange-300 p-20">
        <div class="flex justify-center  pr-8 rounded-xl my-4 ml-auto pt-40">
          <div class="block rounded-lg shadow-2xl bg-gray-800 max-w-3xl text-center shadow-gray-300/50">
            <div class="py-3 px-6 border-b text-white border-orange-300">
              My Resume
            </div>
            <div class="p-6">
              <div>
                <Document
                  file="./Moses' Resume.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                </Document>

                <p className="text-sm  text-center text-gray-400 m-5">
                  Page {pageNumber} of {numPages}
                </p>
              </div>
            </div>

            <div class="py-3 px-6 border-t border-orange-500 text-white">
              <a href="./Moses' Resume.pdf" download className="shadow-lg  shadow-orange-500/50 inline-flex items-center flex-justify-between mx-20 my-2 px-6 py-3 bg-orange-400 text-white font-medium  leading-tight rounded-3xl hover:bg-orange-300  focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Download    <HiOutlineDownload className="ml-2" size="20px" /> </a>
             
            </div>


          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
