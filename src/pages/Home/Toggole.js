import React, { useState } from 'react'
import Category from '../Category/Category';
import Jobs from '../Jobs/Jobs';

function Toggole() {
    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-5";
  return (
    <div >
      <ul className='bg-gray-200 w-96 p-5 rounded-full m-auto my-8 ' >
      <li className='inline-block   text-primary hover:text-black font-bold '>  <button  onClick={() => {
            setToggle(!toggle);
          }} className="px-4 py-1  font-semibold rounded-full w-full transition-all duration-500 ease-in-out text-2xl   " >
           All Jobs
          </button></li>
        <li className='inline-block hover:text-primary'>
        <button  onClick={() => {
            setToggle(!toggle)}}  className={"px-4 py-1 text-sm md:text-2xl font-semibold rounded-full w-full transition-all duration-500 ease-in-out " +
              (toggle ? null : toggleClass)}>
            Explore Category 
          </button>
         
        </li>
      </ul>

      <div>
      {
         toggle?<Jobs></Jobs>:<Category></Category> 
     }
      </div>
    </div>
  )
}

export default Toggole
