import React from 'react';
import styles from "../style";
import { features, sab2 } from "../assets";

const Feat = () => (
  <div className={`bg-[#971EB5] pr-60 flex justify-center`}>
  
  <div className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.boxWidth} `}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 md:my-0 my-10 ml-20 relative`}>
    <img src={features} alt="features" className="w-[574px] h-[314px] relative z-[5]" />
    </div>

    <div className={` ${styles.paddingY} md:my-0 relative`}>
    <p className={`text-white ${styles.paragraph} mb-4 inline-block bg-secondary px-3 py-2 rounded-[30px]`}>
        Our awesome features
      </p>
      <h2 className={`text-white ${styles.heading3}`}>
      Workflow that works for <br/>
your benefit.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] my-5`}>
      Say goodbye to manual data entry. Integrate with thetools you depend on so your team can get proposals,contracts and quotes out the door fast.
    </p>
    <a className={`${styles.link} my-5 cursor-pointer`}>
      All integrations
    </a>
    </div>
  </div>
</div>
);
export default Feat;