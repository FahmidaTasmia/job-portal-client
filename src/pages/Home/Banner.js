import React from 'react'
import { Link } from 'react-router-dom';

function Banner() {
    const myStyle={
       
        height:'100vh',
        marginTop:'-70px',
       
        backgroundColor:'#edf8f5',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <div  style={myStyle} className='hidden md:block' >
    <div className='grid grid-cols-2'>
    <div className='m-auto md:p-10'>
     <h2 className='md:text-6xl text-2xl font-bold
      text-primary'>Find the perfect job <br className='my-3' /> that you deserve.</h2>
      <p className='py-5'>If we wait for the moment when everything, absolutely everything is ready, we shall never begin. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative to</p>
       <Link className='btn btn-primary px-10 '  to="/login">Apply Now</Link>
     </div>
     <div>
        <img src="https://i.ibb.co/80SZD48/globe-pattern.png" alt="" className='img-fluid min-w-full min-h-full' />
     </div>
    </div>
    </div>
  )
}

export default Banner
