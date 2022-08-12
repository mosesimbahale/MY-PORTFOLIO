import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="p-40 m-40">
      
      <h1 className='text-7lg'>Page not found</h1>


      <Link to="/">
        <button className="border border-red-500 m-3 bg-gray-700 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-900 text-white dark:hover:bg-gray-700 dark:text-white px-5 py-2 text-sm ">
          back to Profile
        </button>
      </Link>





    </div>
  )
}

export default ErrorPage;