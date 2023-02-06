import React from 'react';
import approve from '../assets/approve.svg';
import styles from '../style';
import {
   FaMarkdown
} from 'react-icons/fa';

const Cards = () => (
<div className='w-full py-[10rem] px-4 bg-primary'>
<div className= {`mx-auto text-center mb-20`}>
      <p className={`text-white ${styles.paragraph} bg-secondary inline text-center mb-4 px-3 py-2 rounded-[30px]`}>
        Our perfect pricing
      </p>
      <h2 className={`${styles.heading3} mt-5 text-center`}>
      Our best pricing to
give you 
          <br className="sm:block hidden" />  the very best offer!
      </h2>
    </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 pricing-mobile'>
          <div className='w-[350px] bg-gray-100 shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='w-full bg-secondary py-10 rounded-lg flex justify-start items-start '>
                <img className='w-20 mx-10  bg-[white] rounded-md' src={approve} alt="/" />
            <div className='flex items-center text-white justify-center flex-col'>
                <h2 className='text-1xl font-small pt-2'>Single User</h2>
                <p className='text-4xl font-bold'>$149</p>
            </div>
               
            </div>
            <div className='text-center font-medium'>
                <p className='py-2 border-b flex gap-3 items-center justify-center mx-8 mt-8'> <FaMarkdown/> 500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-secondary w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-[350px] bg-gray-100 shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='w-full bg-secondary py-10 rounded-lg flex justify-start items-start '>
                <img className='w-20 mx-10  bg-[white] rounded-md' src={approve} alt="/" />
            <div className='flex items-center text-white justify-center flex-col'>
                <h2 className='text-1xl font-small pt-2'>Single User</h2>
                <p className='text-4xl font-bold'>$149</p>
            </div>
               
            </div>
            <div className='text-center font-medium'>
                <p className='py-2 border-b flex gap-3 items-center justify-center mx-8 mt-8'> <FaMarkdown/> 500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-secondary w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-[350px] bg-gray-100 shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='w-full bg-secondary py-10 rounded-lg flex justify-start items-start '>
                <img className='w-20 mx-10  bg-[white] rounded-md' src={approve} alt="/" />
            <div className='flex items-center text-white justify-center flex-col'>
                <h2 className='text-1xl font-small pt-2'>Single User</h2>
                <p className='text-4xl font-bold'>$149</p>
            </div>
               
            </div>
            <div className='text-center font-medium'>
                <p className='py-2 border-b flex gap-3 items-center justify-center mx-8 mt-8'> <FaMarkdown/> 500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-secondary w-[200px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
)


export default Cards;
