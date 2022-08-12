import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Navbar />


      <div class="flex justify-center  bg-white  pr-8 rounded-xl my-4 ml-auto pt-40">

       

        <div class="block rounded-lg shadow-2xl bg-white max-w-3xl text-center shadow-indigo-500/50">
          <div class="py-3 px-6 border-b border-gray-300">Featured</div>
          <div class="p-6">
            <div>
              <Document
                file="./Moses's Resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>

              <p className="text-sm  text-center text-gray-400 m-5">
                Page {pageNumber} of {numPages}
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Resume;
