import styles from "../style";
import { laptop } from "../assets";
import Button from "./Button";

const Hero = () => (
  <section id="home" className={`hero-shell section reveal`}>
    <div className="container-shell grid-2">
      <div className="hero-panel hero-eyebrow">
        <div className="chip mb-6">
          <i className="fa-solid fa-bolt"></i>
          Streamline Your Workflow
        </div>
        <h1 className="hero-title font-poppins font-semibold title-xl text-white">
          Faster PC <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Transfer</span>{" "} App
        </h1>
        <p className={`hero-body ${styles.paragraph} max-w-[520px] mt-6`}>
          The traditional means of sharing data, such as flash drives or cloud servers, can be time-consuming, costly, and insecure. This is where Mintranet comes in. Mintranet is a mini intra-network designed to provide a secure and efficient means for organizations to share large amounts of data within their local network
        </p>
        <div className="cta-row mt-8 hero-cta">
          <Button />
        </div>
      </div>

      <div className="hero-visual relative">
        <div className="hero-burst hero-float"></div>
        <div className="hero-grid hero-float"></div>
        <div className="hero-art hero-float">
          <img src={laptop} alt="laptop" />
        </div>
      </div>
    </div>
  </section>
);
  
export default Hero;
