import React, { useState } from 'react';
import { HiOutlineFolderDownload } from 'react-icons/hi'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';



import { Document, Page } from 'react-pdf';




const Resume = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }





  return (


    
<div className='p-10  bg-gray-400 text-center'>
  

    <div>
      <Document file="./assets/doc/Moses's Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>






<h2 class=" text-2xl font-bold text-center text-white m-5">DownLoad Resume</h2>
       





<div class="p-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 min-w-full"  >
<a href="#">
<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
<a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Download


<HiOutlineFolderDownload size="20px"/>



</a>
</div>


</div>
  )
}

export default Resume;