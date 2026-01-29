import React from 'react';
import styles from "../style";
import { timer, documents,} from "../assets";

const Service = () => (
  <section className="section reveal" id="service">
    <div className="container-shell text-white">
      <div className="text-center max-w-[760px] mx-auto">
        <p className={`chip ${styles.paragraph} inline text-center mb-4`}>
          Exclusive Features
        </p>
        <h2 className="title-lg font-poppins text-white mt-6">
          Mintranet offers a range of features that make it a valuable tool for organizations that 
          <br className="sm:block hidden" /> need to share data within their local network.
        </h2>
      </div>

      <div className="reveal-group grid-3 mt-12">
        <div className="card reveal-item text-center">
          <div className="chip mx-auto mb-4">
            <i className="fa-solid fa-folder-open"></i>
          </div>
          <h3 className={`${styles.heading4} text-center`}>File Sharing</h3>
          <p className="font-[14px] text-dimWhite mt-3 text-center">
            Mintranet allows users to share files of any size and format with each other within the organization's local network.
          </p>
        </div>

        <div className="card reveal-item text-center">
          <div className="chip mx-auto mb-4">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h3 className={`${styles.heading4} text-center`}>Security</h3>
          <p className="font-[14px] mt-3 text-dimWhite text-center">
            Mintranet provides a secure data transfer mechanism by encrypting all data transmitted within the network. This helps to safeguard against data theft, loss, or unauthorized access.
          </p>
        </div>

        <div className="card reveal-item text-center">
          <div className="chip mx-auto mb-4">
            <i className="fa-solid fa-users-gear"></i>
          </div>
          <h3 className={`${styles.heading4} text-center`}>User Management</h3>
          <p className="font-[12px] mt-3 text-dimWhite text-center">
            Mintranet allows the organization's IT department to manage users and their access rights to the network. This ensures that only authorized users can access sensitive data within the network.
          </p>
        </div>

        <div className="card reveal-item text-center">
          <div className="chip mx-auto mb-4">
            <i className="fa-solid fa-comments"></i>
          </div>
          <h3 className={`${styles.heading4} text-center`}>Collaboration Tools</h3>
          <p className="font-[14px] mt-3 text-dimWhite text-center">
            Mintranet comes with collaboration tools, such as chat and video conferencing, which enable users to communicate and collaborate effectively within the organization.
          </p>
        </div>

        <div className="card reveal-item text-center">
          <div className="chip mx-auto mb-4">
            <i className="fa-solid fa-database"></i>
          </div>
          <h3 className={`${styles.heading4} text-center`}>Centralized Storage</h3>
          <p className="font-[14px] text-dimWhite mt-3 text-center">
            Mintranet provides a centralized storage location for data within the organization's local network, which makes it easy for users to access data and collaborate on projects.
          </p>
        </div>

        <div className="card reveal-item text-center">
          <div className="chip mx-auto mb-4">
            <i className="fa-solid fa-plug-circle-bolt"></i>
          </div>
          <h3 className={`${styles.heading4} text-center`}>Easy to Setup</h3>
          <p className="font-[14px] text-dimWhite mt-3 text-center">
            Mintranet can be easily installed and set up within the organization's local network, without requiring any special technical skills or expertise.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Service;
