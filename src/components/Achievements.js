import React from 'react'

const Achievements = () => {
  return (

<>
    <section class=" mt-40 overflow-hidden mx-24  ">

<h2 class="text-4xl font-bold text-center text-indigo-600 mb-10">
          My Achievements
        </h2>

<div className="2xl:container 2xl:mx-auto md:py-12 py-9">
            <div className=" bg-indigo-50 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
                {/* Delivery grid Card */}
                <div>
                
                <div className="h-20 w-20">
                  <img src='./achievements.png' alt=''/>
                </div>

                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Perticipation in GADS</h3>
                    <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Free worldwide delivery over orders above $100</p>
                </div>

                {/* customer Grid Card */}

                <div>
                <div className="h-20 w-20">
                  <img src='./achievements.png' alt=''/>
                </div>

                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Google Developer </h3>
                    <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
                       <a href='https://developers.google.com/profile/u/mosesimbahale'>Here's a link to my Google developer profile</a> <span className=" font-semibold cursor-pointer">+495-589-509</span> and <span className=" font-semibold cursor-pointer">customercare@gmail.com</span>
                    </p>
                </div>

                {/* Recycle Grid Card */}

                <div>
                <div className="h-20 w-20">
                  <img src='./achievements.png' alt=''/>
                </div>
                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Recycle</h3>
                    <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">All out products are 100 percent recycable</p>
                </div>

                {/* Secure Payment Card */}

                <div>
                <div className="h-20 w-20">
                  <img src='./achievements.png' alt=''/>
                </div>
                    <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Secure Payment</h3>
                    <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Transaction process has end to end encryption</p>
                </div>
            </div>
        </div>


    </section>

    {/*Section 2*/}
    <section class="pt-20 2xl:pt-40 pb-40 2xl:pb-80 overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="max-w-xl mx-auto mb-16 lg:mb-28 text-center">
            <span class="text-lg font-bold text-blue-500">How it works</span>
            <h2 class="mt-6 mb-12 text-6xl font-bold font-heading">
              Build and launch without problems
            </h2>
            <p class="text-lg text-gray-500">
              The brown fox jumps over the lazy dog.
            </p>
          </div>
          <div class="flex flex-wrap items-center -mx-10">
            <div class="relative w-full lg:w-1/2 px-10 mb-16 lg:mb-0">
              <div class="relative lg:max-w-md lg:ml-auto z-10">
                <img
                  class="object-cover w-full lg:w-112 h-160"
                  src="https://images.pexels.com/photos/7148031/pexels-photo-7148031.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450&amp;w=940"
                  alt=""
                />
                <div class="absolute bottom-0 left-0 w-full px-12">
                  <div class="flex pt-10 pb-16 w-full border-t border-gray-200">
                    <a
                      class="inline-flex mr-10 w-20 h-20 items-center justify-center bg-white rounded-lg"
                      href="#"
                    >
                      <svg
                        class="-mb-2 -mr-2"
                        width="38"
                        height="38"
                        viewbox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.791667 6.33333C0.354667 6.33333 0 5.97867 0 5.54167V3.95833C0 1.7765 1.7765 0 3.95833 0H5.54167C5.97867 0 6.33333 0.354667 6.33333 0.791667C6.33333 1.22867 5.97867 1.58333 5.54167 1.58333H3.95833C2.64892 1.58333 1.58333 2.64892 1.58333 3.95833V5.54167C1.58333 5.97867 1.22867 6.33333 0.791667 6.33333Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M30.8747 6.33333C30.4377 6.33333 30.083 5.97867 30.083 5.54167V3.95833C30.083 2.64892 29.0174 1.58333 27.708 1.58333H26.1247C25.6877 1.58333 25.333 1.22867 25.333 0.791667C25.333 0.354667 25.6877 0 26.1247 0H27.708C29.8898 0 31.6664 1.7765 31.6664 3.95833V5.54167C31.6664 5.97867 31.3117 6.33333 30.8747 6.33333Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M19.7914 1.58333H11.8747C11.4377 1.58333 11.083 1.22867 11.083 0.791667C11.083 0.354667 11.4377 0 11.8747 0H19.7914C20.2284 0 20.583 0.354667 20.583 0.791667C20.583 1.22867 20.2284 1.58333 19.7914 1.58333Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M16.6247 31.6667H11.8747C11.4377 31.6667 11.083 31.312 11.083 30.875C11.083 30.438 11.4377 30.0834 11.8747 30.0834H16.6247C17.0617 30.0834 17.4163 30.438 17.4163 30.875C17.4163 31.312 17.0617 31.6667 16.6247 31.6667Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M5.54167 31.6667H3.95833C1.7765 31.6667 0 29.8902 0 27.7084V26.125C0 25.688 0.354667 25.3334 0.791667 25.3334C1.22867 25.3334 1.58333 25.688 1.58333 26.125V27.7084C1.58333 29.0178 2.64892 30.0834 3.95833 30.0834H5.54167C5.97867 30.0834 6.33333 30.438 6.33333 30.875C6.33333 31.312 5.97867 31.6667 5.54167 31.6667Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M0.791667 20.5833C0.354667 20.5833 0 20.2286 0 19.7916V11.8749C0 11.4379 0.354667 11.0833 0.791667 11.0833C1.22867 11.0833 1.58333 11.4379 1.58333 11.8749V19.7916C1.58333 20.2286 1.22867 20.5833 0.791667 20.5833Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M30.8747 17.4166C30.4377 17.4166 30.083 17.0619 30.083 16.6249V11.8749C30.083 11.4379 30.4377 11.0833 30.8747 11.0833C31.3117 11.0833 31.6663 11.4379 31.6663 11.8749V16.6249C31.6663 17.0619 31.3117 17.4166 30.8747 17.4166Z"
                          fill="#1F40FF"
                        ></path>
                        <path
                          d="M22.0118 38C21.4418 38 20.9795 37.5377 20.9795 36.9677V15.2823C20.9795 14.7123 21.4418 14.25 22.0118 14.25C22.2873 14.25 22.547 14.3577 22.7417 14.5524L37.6773 29.488C37.8721 29.6812 37.9829 29.9472 37.9829 30.2211C37.9829 30.7911 37.5206 31.2534 36.9506 31.2534H28.9563L22.7544 37.6849C22.5533 37.8908 22.2921 38 22.0118 38ZM22.5628 16.6123V35.6044L28.0507 29.9139C28.1995 29.7587 28.4053 29.6717 28.6207 29.6717H35.6206L22.5628 16.6123ZM36.5658 30.6153H36.5817H36.5658Z"
                          fill="#1F40FF"
                        ></path>
                      </svg>
                    </a>
                    <div>
                      <p class="mb-1 text-lg font-bold text-blue-500">
                        Zospace
                      </p>
                      <h4 class="text-4xl font-bold text-white">
                        How it works
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <img
                class="hidden lg:block absolute top-0 right-0 mt-52 -mr-40"
                src="zospace-assets/images/blue-eclipse.png"
                alt=""
              />
            </div>
            <div class="w-full lg:w-1/2 px-10">
              <div class="max-w-lg">
                <ul>
                  <li class="flex pb-10 mb-8 border-b border-gray-50">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">
                        1
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-6 text-lg font-bold font-heading">
                        Register account
                      </h3>
                      <p class="text-lg">
                        It&rsquo;s over, maecenas tincidunt malesuada dolor sit
                        amet malesuada.
                      </p>
                    </div>
                  </li>
                  <li class="flex pb-10 mb-8 border-b border-gray-50">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">
                        2
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-6 text-lg font-bold font-heading">
                        Customize tools
                      </h3>
                      <p class="text-lg">
                        The brown me quam, sagittis porttitor lorem vel, commodo
                        fringilla nisl.
                      </p>
                    </div>
                  </li>
                  <li class="flex pb-10 border-b border-gray-50">
                    <div class="mr-8">
                      <span class="flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full">
                        3
                      </span>
                    </div>
                    <div class="max-w-xs">
                      <h3 class="mb-6 text-lg font-bold font-heading">
                        Work with your team
                      </h3>
                      <p class="text-lg">
                        The time, this accumsan augue, posuere posuere elit
                        lorem.
                      </p>
                    </div>
                  </li>
                </ul>
                <div class="mt-10 text-right">
                  <a
                    class="inline-block font-bold text-blue-500 hover:text-blue-600"
                    href="#"
                  >
                    <span>Learn more</span>
                    <span class="inline-block ml-6">
                      <svg
                        width="19"
                        height="20"
                        viewbox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.7383 1.47342L18.7383 10.9304L17.5562 10.9304L17.5562 2.89788L0.834948 19.625L0.00154682 18.7916L16.7228 2.06448L9.28125 2.06448L9.28125 0.882355L18.1472 0.882355C18.4737 0.882355 18.7383 1.14697 18.7383 1.47342Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


</>
  )
}

export default Achievements;







