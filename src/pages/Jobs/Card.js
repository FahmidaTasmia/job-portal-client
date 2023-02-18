import React from 'react'
import {CiLocationOn,CiSignpostDuo1 } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from 'react-router-dom';
function Card({job}) {
    const {Logo,CName,Location,Title,Position,salary} = job;
  return (
    <div className='card border p-10 shadow-sm border-primary'>
      <img className='w-10 h-10' src={Logo} alt="" />
      <p className='text-gray-400 my-2 text-xl'>{CName}</p>
      <h2 className='text-2xl  text-secondary mb-5'>{Title}</h2>
      <div className='flex gap-3'>
        <p className='flex justify-center gap-2 bg-gray-200 p-3 rounded-md'><CiLocationOn className='self-center text-2xl'></CiLocationOn>{Location}</p>
        <p className='flex justify-center gap-2 bg-gray-200 p-3 rounded-md'><CiSignpostDuo1 className='self-center text-2xl'></CiSignpostDuo1>{Position}</p>
        <p className='flex justify-center gap-2 bg-gray-200 p-3 rounded-md'><MdOutlineAttachMoney className='self-center text-2xl'></MdOutlineAttachMoney>{salary}</p>

      </div>
 <div>
 <Link  to="/login" className='btn btn-primary my-5'>Apply Now</Link>
 </div>
    </div>
  )
}

export default Card
