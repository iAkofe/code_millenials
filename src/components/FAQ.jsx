import React from 'react';
import styles from '../style';

const FAQ = () => (
  <div className={`mx-auto py-20 text-white px-20 bg-[#38145E]`}>
    <div className= {`mx-auto text-center`}>
      <p className={`text-white ${styles.paragraph} bg-secondary inline text-center mb-4 px-3 py-2 rounded-[30px]`}>
        Frequently Asked Questions
      </p>
      <h2 className={`${styles.heading3} mt-5 text-center`}>
      We have some FAQ to
          <br className="sm:block hidden" />   inform you more
      </h2>
    </div>
 <div className="flex items-center gap-20 justify-center faq-mobile">
  <div className="bg-transparent text-white">
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

  <div className=" text-white">
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
 
);

export default FAQ;