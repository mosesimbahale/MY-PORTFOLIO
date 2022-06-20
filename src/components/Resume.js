import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

function Resume() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
<>

    <div className='bg-gray-900 p-10 text-white flex flex-col justify-center'>

<h2 class="text-2xl font-bold text-center text-gray-400 m-5">Resume</h2>

      <div mx-20>
      <Document file="./Moses's Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      </div>

      <p className='text-sm  text-center text-gray-400 m-5'>
        Page {pageNumber} of {numPages}
      </p>


    </div>


<div className='bg-white text-center p-40'><p>Download file icon</p></div>

</>
  )
};

export default Resume;