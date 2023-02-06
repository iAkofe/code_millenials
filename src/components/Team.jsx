import React from 'react';
import styles from '../style';
import {people01, people02, people03} from '../assets';
import {FaMailBulk, FaConnectdevelop,  FaBlenderPhone, FaFacebook, FaTwitter, FaGithub, FaBehance } from 'react-icons/fa';

const Team = () => (
<div className="wx-auto py-40" id='team'>
      <div className= {`mx-auto text-center mb-20`}>
        <p className={`text-white ${styles.paragraph} bg-secondary inline text-center mb-4 px-3 py-2 rounded-[30px]`}>
        Our team members
        </p>
        <h2 className={`${styles.heading3} mt-5 text-center`}>
          Awesome team members, 
        <br className="sm:block hidden" />  great products.
        </h2>
      </div>

      <div className='flex gap-10 w-full justify-center mt-[100px] items-center team-mobile'>
        <div className='bg-secondary min-w-[280px] px-5 rounded-lg pb-7 relative text-white socialPop'>
          <div className='flex justify-between items-start'>
            <div>
            <img src={people01} alt='image' className='w-[120px] h-[120px] mt-[-60px]' />
            <h3 className= {`${styles.heading4} mt-2`}>
            Mark Anthony
            </h3>
            <p className='font-[10px] text-[#ED05F2]' >App Developer</p>
            <p className='flex gap-3 mt-5'><FaBlenderPhone /> 121-3245-214 </p>
            <p className='flex gap-3 mt-2'> <FaMailBulk /> sample@mail.com </p>
            </div>
            <div className='absolute right-5 bottom-14 hidden socialTrigger'>
                <div className='flex flex-col gap-5 bg-white rounded-lg py-6 px-3 text-black z-0 '>
                  <a href='#'> <FaFacebook/> </a>
                  <a href='#'> <FaTwitter/> </a>
                  <a href='#'> <FaBehance/> </a>
                  <a href='#'> <FaGithub/> </a>
                  <a href='#'> </a>
                </div>
                </div>
                <div>
                  <FaConnectdevelop className='w-10 h-10 absolute right-5 bottom-7 bg-primary p-2 rounded-full'/>
                </div>
          </div>
          
        </div>

        <div className='bg-secondary min-w-[280px] px-5 rounded-lg pb-7 relative text-white socialPop'>
          <div className='flex justify-between items-start'>
            <div>
            <img src={people02} alt='image' className='w-[120px] h-[120px] mt-[-60px]' />
            <h3 className= {`${styles.heading4} mt-2`}>
            Lifeo Nion Fro
            </h3>
            <p className='font-[10px] text-[#ED05F2]' >UI/UX Designer</p>
            <p className='flex gap-3 mt-5'><FaBlenderPhone /> 121-3245-214 </p>
            <p className='flex gap-3 mt-2'> <FaMailBulk /> sample@mail.com </p>
            </div>
            <div className='absolute right-5 bottom-14 hidden socialTrigger'>
                <div className='flex flex-col gap-5 bg-white rounded-lg py-6 px-3 text-black z-0 '>
                  <a href='#'> <FaFacebook/> </a>
                  <a href='#'> <FaTwitter/> </a>
                  <a href='#'> <FaBehance/> </a>
                  <a href='#'> <FaGithub/> </a>
                  <a href='#'> </a>
                </div>
                </div>
                <div>
                  <FaConnectdevelop className='w-10 h-10 absolute right-5 bottom-7 bg-primary p-2 rounded-full'/>
                </div>
          </div>
          
        </div>

        <div className='bg-secondary min-w-[280px] px-5 rounded-lg pb-7 relative text-white  socialPop'>
          <div className='flex justify-between items-start'>
            <div>
            <img src={people03} alt='image' className='w-[120px] h-[120px] mt-[-60px]' />
            <h3 className= {`${styles.heading4} mt-2`}>
            Niofar Titir
            </h3>
            <p className='font-[10px] text-[#ED05F2]' >Software Developer</p>
            <p className='flex gap-3 mt-5'><FaBlenderPhone /> 121-3245-214 </p>
            <p className='flex gap-3 mt-2'> <FaMailBulk /> sample@mail.com </p>
            </div>
            <div className='absolute right-5 bottom-14 hidden socialTrigger'>
                <div className='flex flex-col gap-5 bg-white rounded-lg py-6 px-3 text-black z-0 '>
                  <a href='#'> <FaFacebook/> </a>
                  <a href='#'> <FaTwitter/> </a>
                  <a href='#'> <FaBehance/> </a>
                  <a href='#'> <FaGithub/> </a>
                  <a href='#'> </a>
                </div>
                </div>
                <div>
                  <FaConnectdevelop className='w-10 h-10 absolute right-5 bottom-7 bg-primary p-2 rounded-full'/>
                </div>
          </div>
          
        </div>

        <div className='bg-secondary min-w-[280px] px-5 rounded-lg pb-7 relative text-white socialPop'>
          <div className='flex justify-between items-start'>
            <div>
            <img src={people01} alt='image' className='w-[120px] h-[120px] mt-[-60px]' />
            <h3 className= {`${styles.heading4} mt-2`}>
              Liona Venchi
            </h3>
            <p className='font-[10px] text-[#ED05F2]' >Graphics Designer</p>
            <p className='flex gap-3 mt-5'><FaBlenderPhone /> 121-3245-214 </p>
            <p className='flex gap-3 mt-2'> <FaMailBulk /> sample@mail.com </p>
            </div>
              <div className='absolute right-5 bottom-14 hidden socialTrigger'>
                <div className='flex flex-col gap-5 bg-white rounded-lg py-6 px-3 text-black z-0 '>
                  <a href='#'> <FaFacebook/> </a>
                  <a href='#'> <FaTwitter/> </a>
                  <a href='#'> <FaBehance/> </a>
                  <a href='#'> <FaGithub/> </a>
                  <a href='#'> </a>
                </div>
                </div>
                <div>
                  <FaConnectdevelop className='w-10 h-10 absolute right-5 bottom-7 bg-primary p-2 rounded-full'/>
                </div>
                
              
          </div>
          
        </div>
      </div>
    </div>
);

export default Team;