import React from 'react'

const Sidebar = () => {
  return (
    <>


<div className="w-10% h-100%   px-2 absolute bg-red-500  navbar navbar-expand-lg  " >
        <ul class="relative">
          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-indigo-100 transition duration-300 ease-in-out"
              href="/Home"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              data-bs-toggle="tooltip" data-bs-placement="right" title="Home" 
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
               
               
                  
               />
              </svg>

              
             
            </a>
           
          </li>

          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-indigo-100 transition duration-300 ease-in-out"
              href="ToDo"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
           
              data-bs-toggle="tooltip" data-bs-placement="right" title="list"
           
           >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"

              />
              </svg>

         
            </a>
          </li>

          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-indigo-100 transition duration-300 ease-in-out"
              href="/Timer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"

              data-bs-toggle="tooltip" data-bs-placement="right" title="Timer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

           
            </a>
          </li>

          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-indigo-100 transition duration-300 ease-in-out"
              href="NoteKeeper"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"

              data-bs-toggle="tooltip" data-bs-placement="right" title="Notes"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>

           
            </a>
          </li>

          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-indigo-100 transition duration-300 ease-in-out"
              href="/Calendar"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"

              data-bs-toggle="tooltip" data-bs-placement="right" title="Calendar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

             
            </a>
          </li>

          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-indigo-100 transition duration-300 ease-in-out"
              href="/Event"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"

              data-bs-toggle="tooltip" data-bs-placement="right" title="Events"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              
            </a>
          </li>

          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-indigo-100 transition duration-300 ease-in-out"
              href="Reminder"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"

              data-bs-toggle="tooltip" data-bs-placement="right" title="Reminders"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>

              
            </a>
          </li>

          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-indigo-100 transition duration-300 ease-in-out"
              href="/Timetable"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              data-bs-toggle="tooltip" data-bs-placement="right" title="TimeTables"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>

              
            </a>
          </li>





          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-indigo-100 transition duration-300 ease-in-out"
              href="/Recipe"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"

              data-bs-toggle="tooltip" data-bs-placement="right" title="Recipe"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                />
              </svg>
            
            </a>
          </li>










          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-100 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-indigo-100 transition duration-300 ease-in-out"
              href="/Diary"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              data-bs-toggle="tooltip" data-bs-placement="right"  title="Diary"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>

             
            </a>
          </li>




        </ul>
      </div>










    </>
  )
}

export default Sidebar;