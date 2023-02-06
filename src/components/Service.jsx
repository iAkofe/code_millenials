import React from 'react';
import styles from "../style";
import { timer, documents,} from "../assets";

const Service = () => (
  <div className={`mx-auto py-16 text-white px-20`} id='service'>
    <div className= {`mx-auto text-center`}>
      <p className={`text-white ${styles.paragraph} bg-secondary inline text-center mb-4 px-3 py-2 rounded-[30px]`}>
        Our awesome services
      </p>
      <h2 className={`${styles.heading3} mt-5 text-center`}>
        We give you the
          <br className="sm:block hidden" />   very best!
      </h2>
    </div>
    <div className='flex gap-10 justify-center items-center cards-mobile'>
      <div className='services'>
      <img src={documents } alt='secure' className='w-10 h-10 my-5' />
        <h3 className={`${styles.heading4} text-center` } >
          Faster docs. Faster deals
        </h3>
        <p className='font-[14px] text-gray-500 mt-3 text-center'>
          Get your documents out the door fast to keep deals with automatic notifications, on-the-fly editing, and integrated.
        </p>
      </div>

      <div className='services'>
      <img src={timer} alt='secure' className='w-10 h-10 my-5' />
        <h3 className={`${styles.heading4} text-center` } >
          Faster docs. Faster deals
        </h3>
        <p className='font-[14px] mt-3 text-gray-500 text-center'>
          Get your documents out the door fast to keep deals with automatic notifications, on-the-fly editing, and integrated.
        </p>
      </div>

      <div className='services'>
      <img src={documents} alt='secure' className='w-10 h-10 my-5'/>
        <h3 className={`${styles.heading4} text-center`} >
          Faster docs. Faster deals
        </h3>
        <p className='font-[12px] mt-3 text-gray-500 text-center '>
          Get your documents out the door fast to keep deals with automatic notifications, on-the-fly editing, and integrated.
        </p>
      </div>
  </div>

  <div className='flex gap-10 justify-center items-center pb-20 cards-mobile'>
      <div className='services'>
      <img src={timer} alt='secure' className='w-10 h-10 my-5' />
        <h3 className={`${styles.heading4} text-center` } >
          Faster docs. Faster deals
        </h3>
        <p className='font-[14px] mt-3 text-gray-500 text-center'>
          Get your documents out the door fast to keep deals with automatic notifications, on-the-fly editing, and integrated.
        </p>
      </div>

      <div className='services'>
      <img src={documents} alt='secure' className='w-10 h-10 my-5' />
        <h3 className={`${styles.heading4} text-center`} >
          Faster docs. Faster deals
        </h3>
        <p className='font-[14px] text-gray-500 mt-3 text-center'>
          Get your documents out the door fast to keep deals with automatic notifications, on-the-fly editing, and integrated.
        </p>
      </div>

      <div className='services'>
      <img src={timer} className='w-10 h-10 my-5' alt='secure' />
        <h3 className={`${styles.heading4} text-center` }>
          Faster docs. Faster deals
        </h3>
        <p className='font-[14px] text-gray-500 mt-3 text-center'>
          Get your documents out the door fast to keep deals with automatic notifications, on-the-fly editing, and integrated.
        </p>
      </div>
    </div>
</div>
);

export default Service;