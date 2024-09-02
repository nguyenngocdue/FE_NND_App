import React from 'react';
import StepCard from './StepCard';

const OurProcess = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Header */}
        <h2 className="text-xs font-semibold tracking-wider text-orange-500 uppercase">
          Our Process
        </h2>
        <h3 className="mt-4 text-3xl font-bold text-gray-900">
          We Offer End-To-End Design And Engineering Services
        </h3>
        <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
          At TLC, we fast-track design development, procurement, and project management with our in-house capabilities, using a range of Digital Design Platforms, BIM Modeling and 3DVR.
        </p>

        {/* Process Steps */}
        <div className="grid gap-12 mt-12 md:grid-cols-3">
          <StepCard
            stepNumber="01"
            title="Designed"
            description="From concept architecture through to development and building approvals, our design expertise is the key to achieving the best outcomes for clients and successful project delivery."
            icon={
              <svg height="100%" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.75 85.25V96.875H85.25V38.75H19.375V96.875" stroke="#CCA170" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M118.188 94.9375V25.1875C118.188 21.0766 116.554 17.1342 113.648 14.2273C110.741 11.3205 106.798 9.6875 102.688 9.6875H98.8125V79.4375H102.106C105.745 79.3701 109.296 80.5547 112.165 82.793C115.034 85.0313 117.048 88.1874 117.868 91.7329C118.342 93.9914 118.306 96.3272 117.763 98.5701C117.22 100.813 116.184 102.907 114.73 104.699C113.276 106.49 111.44 107.935 109.357 108.928C107.274 109.921 104.995 110.437 102.688 110.438H5.8125V25.1875H89.125" stroke="#CCA170" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M54.25 38.75V65.875H38.75" stroke="#CCA170" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            }
          />
          <StepCard
            stepNumber="02"
            title="Engineered"
            description="Our in-house engineers and external consultants have a track record of challenges uniquely present in modular engineered buildings, ensuring precision, efficiency, and ingenuity."
            icon={
              <svg height="100%" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M93 87.3638L98.8125 91.0625L120.125 77.5V54.25L98.8125 40.6429L77.5 54.25V60.0625" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M62 90.3146V114.094" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M40.6875 77.5L62 91.0606L83.3125 77.5" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M62 91.0605V114.312" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M40.6875 30.7675L62 44.3281L83.3125 30.7675" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M62 44.3281V54.25" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M46.5 54.25L25.1875 67.8106L3.875 54.25" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M25.1875 67.8105V91.0625" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M77.5 54.25L98.8125 67.8106L120.125 54.25" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M98.8125 67.8105V91.0625" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M83.3125 38.75V30.7675L62 17.1585L40.6875 30.7675V38.75" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M46.4981 62L46.5 54.25L25.1875 40.6429L3.875 54.25V77.5L25.1875 91.0625L31 87.3638" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M83.3125 77.5L62 63.891L40.6875 77.5V100.75L62 114.312L83.3125 100.75V77.5Z" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M102 12.49L105.09 18.75L112 19.754L107 24.628L108.18 31.51L102 28.262L95.82 31.51L97 24.628L92 19.754L98.91 18.75L102 12.49Z" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            }
          />
          <StepCard
            stepNumber="03"
            title="Controlled"
            description="Quality Assurance and Quality Control is at the heart of our delivery promise to clients, meticulously documenting and photo-recording every step in every module."
            icon={
              <svg height="100%" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62 116.25C62 116.25 7.75 93 7.75 23.25L62 7.75L116.25 23.25C116.25 93 62 116.25 62 116.25Z" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M80.3 51.7C80.8 53.4 81 55.1 81 57C81 68 72 77 61 77C50 77 41 68 41 57C41 46 50 37 61 37C64.9 37 68.5 38.1 71.5 40" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M53 53L61 61L83 39" stroke="#CCA170" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
