

import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-gray-800 h-auto w-full text-white py-4">
     

        <div className="flex flex-col justify-between items-center w-full ">
            <div className='my-2  flex justify-between items-center w-full'>

                <div className='border-[1px] w-[30%]'>

                </div>
                <div className='w-[30%] flex justify-evenly text-white text-xl'>
                    <FaFacebookF />
                <FaInstagram />
                <FaYoutube />
                <FaXTwitter />
                <FaLinkedinIn />
                </div>

                <div className='w-[30%] border-[1px] '>

                </div>
            </div>

        <div className='my-6 w-[90%] text-center sm:w-full flex flex-col justify-center items-center'>
        <Link to="/"><spna className=" text-2xl font-bold">THE</spna><span className="text-[#0dcaf0] text-2xl font-bold">FRAMES</span></Link>
            <p>&copy; 2024 Your News Website. All rights reserved.</p>
         </div>

          <div className="flex w-full sm:w-[90%] md:w-[80%] justify-evenly items-center ">
            <Link className="hover:text-gray-400 border-b-[1px] font-semibold">About</Link>
            <Link className="hover:text-gray-400 border-b-[1px] font-semibold">Contact</Link>
            <Link className="hover:text-gray-400 border-b-[1px] font-semibold">Privacy Policy</Link>
            <Link className="hover:text-gray-400 border-b-[1px] font-semibold">Terms of Service</Link>
           
          </div>

         



        </div>

      
    </footer>
  );
};

export default Footer;
