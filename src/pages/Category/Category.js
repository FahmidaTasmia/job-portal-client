import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';

function Category() {
    const [categories,setCategories]=useState([]);

    useEffect(() => {
        fetch('https://job-portal-server-dusky.vercel.app/category')
          .then((res) => res.json())
          .then((data) => {
            setCategories(data);
          });
      }, []);
  return (
    <div className='grid md:grid-cols-3 gap-5'>
    {
                    categories?.map(category=> <CategoryCard
                    key={category._id}
                    category={category}
                    >

                    </CategoryCard>)
                }
    </div>
  )
}

export default Category
