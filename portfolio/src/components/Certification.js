import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

const Certification = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <section className="mx-24 ">
      <div>
        {" "}
        <div className="flex flex-wrap  pb-10 opacity-5">
          <svg
            width="51"
            height="51"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.29289 15.2929C5.68342 14.9024 6.31658 14.9024 6.70711 15.2929L16 24.5858L25.2929 15.2929C25.6834 14.9024 26.3166 14.9024 26.7071 15.2929C27.0976 15.6834 27.0976 16.3166 26.7071 16.7071L16.7071 26.7071C16.3166 27.0976 15.6834 27.0976 15.2929 26.7071L5.29289 16.7071C4.90237 16.3166 4.90237 15.6834 5.29289 15.2929Z"
              fill="#0007AF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L16 14.5858L25.2929 5.29289C25.6834 4.90237 26.3166 4.90237 26.7071 5.29289C27.0976 5.68342 27.0976 6.31658 26.7071 6.70711L16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="#0007AF"
            />
          </svg>
        </div>
        <h2 class="text-4xl font-bold text-center text-indigo-600 mb-10">
          My Certifications
        </h2>
      </div>

      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={45}
        totalSlides={5}
      >



        <Slider>
          <Slide index={0}>
            <div className="flex flex-row  items-center">
              <div class="flex justify-center  bg-white  pr-8 rounded-xl my-4 ml-auto ">
                <div class="block rounded-lg shadow-2xl bg-white  text-center shadow-indigo-500/50">
                  <div class="py-3 px-8 border-b border-gray-300 text-indigo-400">
                    CodeCademy
                  </div>
                  <div class="p-6">
                    <div>
                      <Document
                        file="./blockchain.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                      >
                        <Page pageNumber={pageNumber} />
                      </Document>

                      <p className="text-sm  text-center text-gray-400 m-5">
                        Page {pageNumber} of {numPages}
                      </p>
                    </div>
                  </div>
                  <div class="py-3 px-6 border-t border-gray-300 text-indigo-400">
                    3 years ago
                  </div>
                </div>
              </div>

              <div className="ml-2">
                <ButtonNext className="inline">
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071L12.7071 26.7071C12.3166 27.0976 11.6834 27.0976 11.2929 26.7071C10.9024 26.3166 10.9024 25.6834 11.2929 25.2929L20.5858 16L11.2929 6.70711C10.9024 6.31658 10.9024 5.68342 11.2929 5.29289Z"
                      fill="#0007AF"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </div>
          </Slide>




          <Slide index={1}>
            <div className="flex flex-row justify-center items-center">
              <div className="mr-2">
                <ButtonBack>
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L11.4142 16L20.7071 25.2929C21.0976 25.6834 21.0976 26.3166 20.7071 26.7071C20.3166 27.0976 19.6834 27.0976 19.2929 26.7071L9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"
                      fill="#0007AF"
                    />
                  </svg>
                </ButtonBack>
              </div>

              <div class="flex justify-center  bg-white  pr-8 rounded-xl my-4 ml-auto ">
                <div class="block rounded-lg shadow-2xl bg-white max-w-6xl text-center shadow-indigo-500/50">
                  <div class="py-3 px-6 border-b border-gray-300 text-indigo-400">DataCamp</div>
                  <div class="p-6">
                    <div>
                      <Document
                        file="./ml.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                      >
                        <Page pageNumber={pageNumber} />
                      </Document>

                      <p className="text-sm  text-center text-gray-400 m-5">
                        Page {pageNumber} of {numPages}
                      </p>
                    </div>
                  </div>
                  <div class="py-3 px-6 border-t border-gray-300 text-indigo-400">
                    1 year ago
                  </div>
                </div>
              </div>

              <div className="ml-2">
                <ButtonNext className="inline">
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071L12.7071 26.7071C12.3166 27.0976 11.6834 27.0976 11.2929 26.7071C10.9024 26.3166 10.9024 25.6834 11.2929 25.2929L20.5858 16L11.2929 6.70711C10.9024 6.31658 10.9024 5.68342 11.2929 5.29289Z"
                      fill="#0007AF"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </div>
          </Slide>

       
       
       
          <Slide index={2}>
            <div className="flex flex-row justify-center items-center">
              <div className="mr-2">
                <ButtonBack>
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L11.4142 16L20.7071 25.2929C21.0976 25.6834 21.0976 26.3166 20.7071 26.7071C20.3166 27.0976 19.6834 27.0976 19.2929 26.7071L9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"
                      fill="#0007AF"
                    />
                  </svg>
                </ButtonBack>
              </div>

              <div class="flex justify-center  bg-white  pr-8 rounded-xl my-4 ml-auto ">
                <div class="block rounded-lg shadow-2xl bg-white max-w-6xl text-center shadow-indigo-500/50">
                  <div class="py-3 px-6 border-b border-gray-300">Featured</div>
                  <div class="p-6">
                    <div>
                      <Document
                        file="./python.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                      >
                        <Page pageNumber={pageNumber} />
                      </Document>

                      <p className="text-sm  text-center text-gray-400 m-5">
                        Page {pageNumber} of {numPages}
                      </p>
                    </div>
                  </div>
                  <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                    2 days ago
                  </div>
                </div>
              </div>

              <div className="ml-2">
                <ButtonNext className="inline">
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071L12.7071 26.7071C12.3166 27.0976 11.6834 27.0976 11.2929 26.7071C10.9024 26.3166 10.9024 25.6834 11.2929 25.2929L20.5858 16L11.2929 6.70711C10.9024 6.31658 10.9024 5.68342 11.2929 5.29289Z"
                      fill="#0007AF"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </div>
          </Slide>





       
       
       
          <Slide index={3}>
            <div className="flex flex-row justify-center items-center">
              <div className="mr-2">
                <ButtonBack>
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L11.4142 16L20.7071 25.2929C21.0976 25.6834 21.0976 26.3166 20.7071 26.7071C20.3166 27.0976 19.6834 27.0976 19.2929 26.7071L9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"
                      fill="#0007AF"
                    />
                  </svg>
                </ButtonBack>
              </div>

              <div class="flex justify-center  bg-white  pr-8 rounded-xl my-4 ml-auto ">
                <div class="block rounded-lg shadow-2xl bg-white max-w-6xl text-center shadow-indigo-500/50">
                  <div class="py-3 px-6 border-b border-gray-300">Featured</div>
                  <div class="p-6">
                    <div>
                      <Document
                        file="./python.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                      >
                        <Page pageNumber={pageNumber} />
                      </Document>

                      <p className="text-sm  text-center text-gray-400 m-5">
                        Page {pageNumber} of {numPages}
                      </p>
                    </div>
                  </div>
                  <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                    4 days ago
                  </div>
                </div>
              </div>

              <div className="ml-2">
                <ButtonNext className="inline">
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L22.7071 15.2929C23.0976 15.6834 23.0976 16.3166 22.7071 16.7071L12.7071 26.7071C12.3166 27.0976 11.6834 27.0976 11.2929 26.7071C10.9024 26.3166 10.9024 25.6834 11.2929 25.2929L20.5858 16L11.2929 6.70711C10.9024 6.31658 10.9024 5.68342 11.2929 5.29289Z"
                      fill="#0007AF"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </div>
          </Slide>






       
       
       
          <Slide index={5}>
            <div className="flex flex-row justify-center items-center">
              <div className="mr-2">
                <ButtonBack>
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L11.4142 16L20.7071 25.2929C21.0976 25.6834 21.0976 26.3166 20.7071 26.7071C20.3166 27.0976 19.6834 27.0976 19.2929 26.7071L9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"
                      fill="#0007AF"
                    />
                  </svg>
                </ButtonBack>
              </div>

              <div class="flex justify-center  bg-white  pr-8 rounded-xl my-4 ml-auto ">
                <div class="block rounded-lg shadow-2xl bg-white max-w-6xl text-center shadow-indigo-500/50">
                  <div class="py-3 px-6 border-b border-gray-300">Featured</div>
                  <div class="p-6">
                    <div>
                      <Document
                        file="./python.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                      >
                        <Page pageNumber={pageNumber} />
                      </Document>

                      <p className="text-sm  text-center text-gray-400 m-5">
                        Page {pageNumber} of {numPages}
                      </p>
                    </div>
                  </div>
                  <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                    2 days ago
                  </div>
                </div>
              </div>

            </div>
          </Slide>















        </Slider>
      </CarouselProvider>
    </section>
  );
};

export default Certification;
