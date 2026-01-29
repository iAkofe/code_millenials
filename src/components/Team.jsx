import React from 'react';
import styles from '../style';
import {people01, people02, people03} from '../assets';
import {FaMailBulk, FaConnectdevelop,  FaBlenderPhone, FaFacebook, FaTwitter, FaGithub, FaBehance } from 'react-icons/fa';

const Team = () => (
  <section className="section reveal" id='team'>
    <div className="container-shell">
      <div className="text-center mb-14">
        <p className={`chip ${styles.paragraph} inline text-center mb-4`}>
          Our team members
        </p>
        <h2 className={`${styles.heading3} mt-5 text-center`}>
          Awesome team members, 
          <br className="sm:block hidden" />  great products.
        </h2>
      </div>

      <div className="reveal-group grid-4 team-mobile">
        <div className="card team-card reveal-item text-white">
          <div className="team-social">
            <a href='#'> <FaFacebook/> </a>
            <a href='#'> <FaTwitter/> </a>
            <a href='#'> <FaBehance/> </a>
            <a href='#'> <FaGithub/> </a>
          </div>
          <img src={people01} alt='image' className='w-[120px] h-[120px] mb-5' />
          <h3 className={`${styles.heading4} mt-2`}>
            Mark Anthony
          </h3>
          <p className='font-[10px] text-[#ED05F2]'>App Developer</p>
          <p className='flex gap-3 mt-5'><FaBlenderPhone /> 121-3245-214 </p>
          <p className='flex gap-3 mt-2'> <FaMailBulk /> sample@mail.com </p>
        </div>

        <div className="card team-card reveal-item text-white">
          <div className="team-social">
            <a href='#'> <FaFacebook/> </a>
            <a href='#'> <FaTwitter/> </a>
            <a href='#'> <FaBehance/> </a>
            <a href='#'> <FaGithub/> </a>
          </div>
          <img src={people02} alt='image' className='w-[120px] h-[120px] mb-5' />
          <h3 className={`${styles.heading4} mt-2`}>
            Lifeo Nion Fro
          </h3>
          <p className='font-[10px] text-[#ED05F2]'>UI/UX Designer</p>
          <p className='flex gap-3 mt-5'><FaBlenderPhone /> 121-3245-214 </p>
          <p className='flex gap-3 mt-2'> <FaMailBulk /> sample@mail.com </p>
        </div>

        <div className="card team-card reveal-item text-white">
          <div className="team-social">
            <a href='#'> <FaFacebook/> </a>
            <a href='#'> <FaTwitter/> </a>
            <a href='#'> <FaBehance/> </a>
            <a href='#'> <FaGithub/> </a>
          </div>
          <img src={people03} alt='image' className='w-[120px] h-[120px] mb-5' />
          <h3 className={`${styles.heading4} mt-2`}>
            Niofar Titir
          </h3>
          <p className='font-[10px] text-[#ED05F2]'>Software Developer</p>
          <p className='flex gap-3 mt-5'><FaBlenderPhone /> 121-3245-214 </p>
          <p className='flex gap-3 mt-2'> <FaMailBulk /> sample@mail.com </p>
        </div>

        <div className="card team-card reveal-item text-white">
          <div className="team-social">
            <a href='#'> <FaFacebook/> </a>
            <a href='#'> <FaTwitter/> </a>
            <a href='#'> <FaBehance/> </a>
            <a href='#'> <FaGithub/> </a>
          </div>
          <img src={people01} alt='image' className='w-[120px] h-[120px] mb-5' />
          <h3 className={`${styles.heading4} mt-2`}>
            Liona Venchi
          </h3>
          <p className='font-[10px] text-[#ED05F2]'>Graphics Designer</p>
          <p className='flex gap-3 mt-5'><FaBlenderPhone /> 121-3245-214 </p>
          <p className='flex gap-3 mt-2'> <FaMailBulk /> sample@mail.com </p>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
