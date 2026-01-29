import React from 'react';
import styles from "../style";
import { features, sab2 } from "../assets";

const Feat = () => (
  <section className="section-alt section reveal">
    <div className="container-shell grid-2 reveal-group">
      <div className="reveal-item">
        <div className="hero-art">
          <img src={features} alt="features" />
        </div>
      </div>

      <div className="reveal-item">
        <div className="card">
          <p className={`chip text-white ${styles.paragraph} mb-4 inline-block`}>
            Coming Soon ... 
          </p>
          <h2 className={`text-white ${styles.heading3}`}>
            Project & Task <br/>
            Management System.
          </h2>
          <p className={`${styles.paragraph} max-w-[520px] my-5`}>
            With this new feature, you'll be able to easily create projects and assign tasks to team members, set deadlines and track progress, and communicate with each other through built-in chat and collaboration tools. You'll also have access to a range of project management templates and tools, designed to help you get started quickly and stay on track. Whether you're managing a large team or just trying to stay on top of your own workload, the project and task management system on Mintranet will be your go-to tool for staying organized and productive. 
          </p>
          <a className={`${styles.link} my-5 cursor-pointer`}>
            Stay in the know
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default Feat;
