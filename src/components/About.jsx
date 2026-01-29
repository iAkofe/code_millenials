import React from 'react';
import styles from "../style";
import { sab1, sab2, timer } from "../assets";

const About = () => (
  <section id='about' className="section reveal">
    <div className="container-shell">
      <div className="grid-2 reveal-group">
        <div className="reveal-item">
          <div className="card">
            <h2 className="title-lg font-poppins text-white">
              Premier platform for intra <br />
              communication needs.
            </h2>
            <p className={`${styles.paragraph} max-w-[520px] my-5`}>
              We understand that in today's fast-paced business world, effective communication is crucial to success. That's why we've created a centralized hub where you can streamline your company's communications and keep your team on the same page. Our intuitive interface and powerful tools make it easy to send messages, share files, and collaborate with colleagues from anywhere in the world. With Mintranet, you'll never miss an important update or lose track of a critical project
            </p>
            <a className={`${styles.link} my-5 cursor-pointer`}>
              Join Waitlist
            </a>
          </div>
        </div>

        <div className="reveal-item">
          <div className="hero-art">
            <img src={sab1} alt="illustration" />
          </div>
        </div>
      </div>

      <div className="grid-2 mt-12 reveal-group">
        <div className="reveal-item">
          <div className="hero-art">
            <img src={sab2} alt="illustration" />
          </div>
        </div>

        <div className="reveal-item">
          <div className="card">
            <h2 className="title-lg font-poppins text-white">
              We Revolutionize due <br />
              to Passion.
            </h2>
            <p className={`${styles.paragraph} max-w-[520px] my-5`}>
              We believe that effective communication is the key to unlocking success, and our mission is to provide companies of all sizes with the tools they need to streamline their communications and stay ahead of the competition. Our team is dedicated to creating a user-friendly platform that's easy to use, even for those with little to no technical expertise. We're constantly improving our platform and adding new features to ensure that our clients have access to the latest and greatest in internal communication technology. Join us today and take the first step towards transforming the way your team communicates.
            </p>
            <a className={`${styles.link} my-5 cursor-pointer`}>
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
