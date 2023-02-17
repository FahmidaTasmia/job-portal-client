import React from 'react'
import { Link } from 'react-router-dom';

function CategoryCard({category}) {
    const{name,img,_id}=category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full rounded-md">
    <figure><img src={img} alt="Shoes" /></figure>
     <div className="card-body grid justify-items-center">
       <h2 className="card-title text-3xl font-bold text-white ">{name}</h2>
      
         <Link className='btn btn-secondary' to={`/category/${_id}`} >Explore Now</Link>
       </div>
     </div>
  )
}

export default CategoryCard
