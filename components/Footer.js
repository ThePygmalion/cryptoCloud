import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import React from "react";

function Footer() {
  return (
    <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
      <div className="p-5">
        <ul>
          <p className="text-gray-800 font-bolt text-[27px] pb-6">
            CRYPTO CLOUD <span classNAme="text-blue-600 text-align align-center"></span>
          </p>
          <div className="flex gap-6 pb-5">
            <FaInstagram className="text-3xl cursor-pointer hover:text-yellow-600" />
            <FaTwitter className="text-3xl cursor-pointer hover:text-yellow-600" />
            <FaLinkedin className="text-3xl cursor-pointer hover:text-yellow-600" />
            <FaYoutube className="text-3xl cursor-pointer hover:text-yellow-600" />
          </div>
        </ul>
      </div>
      <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-4'>Made By :</p>
          <li className='text-gray-500 text-md pb-2 font-semibold hover-text-blue-600'>Chirag Agarwal</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover-text-blue-600'>Anshul Shekhar</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover-text-blue-600'>Harsh Tyagi</li>
        </ul>
      </div>
      <div className='p-5'>
      <ul>
        <p className='text-gray-800 font-bold text-2xl pb-4'>Company</p>
        <li className='text-gray-500 text-md pb-2 font-semibold hover-text-blue-600'>About</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover-text-blue-600'>Services</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover-text-blue-600'>Contact Us</li>
      </ul>
      </div>
    </div>
  );
}

export default Footer;
