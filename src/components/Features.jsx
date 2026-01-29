import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`card flex gap-4 items-start ${index !== features.length - 1 ? "mb-6" : "mb-0"} reveal-item`}>
    <div className={`w-[64px] h-[64px] rounded-2xl ${styles.flexCenter} bg-white border border-[#96d6ab]`}>
      <div className={`w-[48px] h-[48px] rounded-xl ${styles.flexCenter} bg-[#3644c241]`}>
        <img src={icon} alt="icons" className="feature-icon w-[45%] h-[45%] object-contain" />
      </div>
    </div>
    <div className="flex-1 flex flex-col">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Features = () =>  (
  <section id="features" className="section reveal">
    <div className="container-shell grid-2">
      <div>
        <p className={`chip ${styles.paragraph} mb-4`}>Who we really are</p>
        <h2 className="title-lg font-poppins text-white">
          Dataless, Seamless
          <br className="sm:block hidden" /> way <span className="font-[200]">  to Collaborate </span>
        </h2>
        <p className={`${styles.paragraph} max-w-[520px] my-5`}>
          At Mintranet, we understand the importance of efficient and effective communication within your organization. That's why we've developed a powerful platform that helps streamline internal communication, enhance collaboration, and boost productivity.
        </p>
        <Button/>
      </div>

      <div className="reveal-group">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
