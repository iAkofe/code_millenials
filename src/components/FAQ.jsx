import React from 'react';
import styles from '../style';

const FAQ = () => (
  <section className="section-alt section reveal">
    <div className="container-shell text-white">
      <div className="text-center max-w-[760px] mx-auto">
        <p className={`chip ${styles.paragraph} inline text-center mb-4`}>
          Frequently Asked Questions
        </p>
        <h2 className={`${styles.heading3} mt-5 text-center`}>
          We have some FAQ to
          <br className="sm:block hidden" />   inform you more
        </h2>
      </div>
      <div className="reveal-group grid-2 mt-12 faq-mobile">
        <div className="faq-panel text-white reveal-item">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-4">
              <details className="w-full">
                  <summary className="px-4 py-6">
                      What is React? 
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                      React is a front-end JavaScript library 
                  </p>
              </details>
              <details className="w-full">
                  <summary className="px-4 py-6">
                  What is Props and how to use it give some example?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                  Props is the shorthand for Properties in React.
                  </p>
              </details>
              <details className="w-full">
                  <summary className="px-4 py-6">
                  How to install tailwind css in react js ?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                  What are synthetic events in React?
                  </p>
              </details>
              <details className="w-full">
                  <summary className="px-4 py-6">
                  What is Props and how to use it give some example?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                  Props is the shorthand for Properties in React.
                  </p>
              </details>
            </div>
          </div>
        </div>

        <div className="faq-panel text-white reveal-item">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-4">
              <details className="w-full">
                  <summary className="px-4 py-6">
                      What is React? 
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                      React is a front-end JavaScript library 
                  </p>
              </details>
              <details className="w-full">
                  <summary className="px-4 py-6">
                  What is Props and how to use it give some example?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                  Props is the shorthand for Properties in React.
                  </p>
              </details>
              <details className="w-full">
                  <summary className="px-4 py-6">
                  How to install tailwind css in react js ?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                  What are synthetic events in React?
                  </p>
              </details>
              <details className="w-full">
                  <summary className="px-4 py-6">
                  What is Props and how to use it give some example?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-white">
                  Props is the shorthand for Properties in React.
                  </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
