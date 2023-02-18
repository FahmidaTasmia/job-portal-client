import React, { useEffect, useState } from 'react'

import Card from './Card';

function Jobs() {
  const [jobs,setJobs]=useState([]);
  useEffect(() => {
    fetch('https://job-portal-server-mauve.vercel.app/allJob')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
   <div className='grid md:grid-cols-2   gap-8 md:my-12'>
    {
      jobs?.map(job=><Card
      key={job._id}
      job={job}
      ></Card>)
    }
   </div>
  )
}

export default Jobs
