import React from 'react';
import styles from "../style";
import { sab1, sab2, timer } from "../assets";

const About = () => (
  <div className={`${styles.boxWidth} ml-20 py-20`}>


  <div className={`flex justify-center md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexCenter} ml-20 flex-col xl:px-0 sm:px-16 px-6`}>
      <div>
        <img src={timer} alt='icon' className="w-20 h-20" />
        <h2 className={`text-white ${styles.heading3}`}>
          Don’t just engage, make it <br/>
damn engaging.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] my-5`}>
      Sales teams use PandaDoc to improve deal workflow, insights, and speed while delivering an amazing buying experience. Get your documents out the door fast to keep deals.
      </p>
      <a className={`${styles.link} my-5 cursor-pointer`}>
        Explore this now
      </a>
      </div>
    </div>

      <div className={` flex ${styles.flexCenter} md:my-0 my-10 ml-20 relative`}>
        <img src={sab1} alt="illustration" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
    </div>
    
    <div className={`flex justify-center md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 md:my-0 my-10 ml-20 relative`}>
      <img src={sab2} alt="illustration" className="w-[457px] h-[392px] relative z-[5]" />
      </div>

      <div className={` ${styles.paddingY} md:my-0 ml-20 my-10 relative`}>
      <img src={timer} alt='icon' className="w-20 h-20" />
        <h2 className={`text-white ${styles.heading3}`}>
        Workflow that works for <br/>
your benefit.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] my-5`}>
      Sales teams use PandaDoc to improve deal workflow, insights, and speed while delivering an amazing buying experience. Get your documents out the door fast to keep deals.
      </p>
      <a className={`${styles.link} my-5 cursor-pointer`}>
        Explore this now
      </a>
      </div>
    </div>
  </div>
  
  
);

export default About;