import React from 'react';
import {logo, send } from "../assets";

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => (
    <div className='w-full mt-24 text-white py-y px-2'>
    <div className='max-w-[1240px] mx-auto gap-10 grid grid-cols-2 md:grid-cols-6 border-b-2 border-white py-8'>
      <di className='col-span-2 pt-8 md:pt-2'> 
      <img src={logo} alt="codecube" className="w-[129px] h-[50px]" />
      <p className='font-[14px] text-white mt-3 text-left'>
        Code cube has you covered for all your web design and development jobs. We take you from ideation to creation. You can trust in us!
        </p>
      </di>
        <div>
            <h6 className='font-bold uppercase pt-2'>Services</h6>
            <ul>
                <li className='py-1'>UI/UX Design</li>
                <li className='py-1'>Branding</li>
                <li className='py-1'>Web Design</li>
                <li className='py-1'>Web/App Development</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Links</h6>
            <ul>
                <li className='py-1'>Pricing</li>
                <li className='py-1'>About</li>
                <li className='py-1'>Blog</li>
                <li className='py-1'>Partners</li>
                <li className='py-1'>Privacy</li>
            </ul>
        </div>
        <div className='col-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to our newsletter</p>
            <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className='flex flex-col sm:flex-row'>
                <input className='w-full p-2 mb-4' type="email" placeholder='Enter email..'/>
                <button className='text-white px-4 py-2 mb-4 bg-secondary'><img className='h-5 w-5' src={send} alt='send'/></button>
            </form>
        </div>
    </div>

    <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white'>
    <p className='py-4'>2023 CodeCube, LLC. All rights reserved</p>
    <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaTwitch />
        <FaGithub />
    </div>
    </div>
</div>
);

export default Footer;