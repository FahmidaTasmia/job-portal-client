
import React, { useRef } from 'react'
import { MdOutgoingMail } from "react-icons/md";
import {SiWhatsapp } from "react-icons/si";
import { FaLinkedinIn,FaFacebookF,FaInstagram } from "react-icons/fa";
function Contact() {

    const form = useRef();

  
  const phone = {
    href: "tel:+9988765",
    target: "_blank",
  };
  const mail = {
    href: "mailto:joblab@gmail.com",
    target: "_blank",
  };

  const facebook = {
    href: "https://www.facebook.com/tasmia.alish.7",
    target: "_blank",
  };
  const linkedin = {
    href: "https://www.linkedin.com/in/fahmida-tasmia/",
    target: "_blank",
  };
  const instagram = {
    href: "https://www.instagram.com/__f.tasmia___/",
    target: "_blank",
  };
  return (
    <div className='min-h-screen min-w-full'>
       <h2 className="font-bold text-6xl  md:text-[120px] text-gray-300 opacity-[0.3] text-center animate-pulse">CONTACT US</h2>
      
      <div className='grid md:grid-cols-2'>
        {/* start rightdiv */}
      <div className="m-auto lg:border-r-2 lg:border-dashed  p-10 ">
      <div className='grid gap-5'>
      <div  style={{ boxShadow: "inset -2px 0px 6px #66cc8a" }} className="duration-150 card cursor-pointer w-96  bg-transparent border border-sky-200 hover:border-2 hover:border-neutral rounded-md shadow-sm  text-primary-content">
          <div className="card-body items-center   md:text-normal text-sm">
            <h2 className="text-center font-bold text-xl"><MdOutgoingMail className='text-4xl  text-primary'></MdOutgoingMail></h2>
             <div className=' '>
             <a {...mail} className=" text-lg">
               
                  <span className="hover:text-primary duration-150  hover:border-b-2 hover:border-neutral  font-bold">
                  
                    tasmia1070@gmail.com
                  </span>
                </a>
             </div>
            </div>
          </div>
          {/* phonme */}
          <div  style={{ boxShadow: "inset -2px 0px 6px #66cc8a" }} className="duration-150 card cursor-pointer w-96  bg-transparent border border-sky-200 hover:border-2 hover:border-neutral rounded-md shadow-sm  text-primary-content">
          <div className="card-body items-center   md:text-normal text-sm">
            <h2 className="text-center font-bold text-xl"><SiWhatsapp className='text-4xl  text-primary'></SiWhatsapp></h2>
             <div className='mt-2 '>
             <a {...phone} className=" text-lg">
               
                  <span className="hover:text-primary duration-150  hover:border-b-2 hover:border-neutral  font-bold">
                  +9988765
                  </span>
                </a>
             </div>
            </div>
          </div>
          {/* facebookmy */}
          <div style={{ boxShadow: "inset -2px 0px 6px #66cc8a" }}  className='flex gap-3  justify-center border rounded-full p-2 shadow-lg'>
          <a {...facebook} className=" text-lg">
               
            <span className='btn btn-circle border-2 bg-transparent hover:bg-transparent hover:shadow-md shadow-lg'><FaFacebookF className='text-2xl text-primary'></FaFacebookF></span>
             </a>
             <a {...linkedin} className=" text-lg">
               
               <span  className='btn btn-circle border-2 bg-transparent hover:bg-transparent hover:shadow-md shadow-lg'><FaLinkedinIn className='text-2xl text-primary'></FaLinkedinIn></span>
                </a>
                <a {...instagram} className=" text-lg">
               
               <span  className='btn btn-circle border-2 bg-transparent hover:bg-transparent hover:shadow-md shadow-lg'><FaInstagram className='text-2xl text-primary'></FaInstagram></span>
                </a>
          </div>
      </div>
               
                
              </div>
              {/* end rightdiv */}
      <div className='border border-dashed p-10  lg:my-8'>
     
      <form ref={form}   className='' >
                        
                        <div className='grid  gap-4'>
                            <input name="firstName" type="text" placeholder="Your Full Name" 
                            className="input  bg-transparent border border-neutral rounded-sm "  style={{ boxShadow: "inset -2px 0px 6px #66cc8a" }}/>
                                    
                            <input name="email" type="text" placeholder="Your Email"   
                            className="input  bg-transparent border border-neutral rounded-sm "  style={{ boxShadow: "inset -2px 0px 6px #66cc8a" }} />

                            <input name="subject" type="text" placeholder="Subject"  
                            className="input  bg-transparent border border-neutral rounded-sm "  style={{ boxShadow: "inset -2px 0px 6px #66cc8a" }} />
                            </div>
                            <textarea name="message" className="textarea bg-transparent border border-neutral rounded-sm  h-40 w-full my-5 "  style={{ boxShadow: "inset -2px 0px 6px #66cc8a" }} 
                            placeholder="Your Message" required></textarea>
        
                            <input className='btn bg-transparent border text-primary hover:bg-transparent rounded-md  ' style={{ boxShadow: "inset -2px 0px 6px #66cc8a" }} type="submit" value="Send Message" />
                    </form>

                    
      </div>
    </div>
    <div className='py-10 lg:visible invisible'></div>
    </div>
  )
}

export default Contact
