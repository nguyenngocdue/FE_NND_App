import React from 'react';
import GuaranteeCard from './GuaranteeCard';

const OurGuarantee = () => {
  return (
    <section className="py-16 bg-blue-900 text-center text-white">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Header */}
        <h2 className="text-xs font-semibold tracking-wider text-orange-400 uppercase">
          Our Guarantee
        </h2>
        <h3 className="mt-4 text-3xl font-bold text-white">
          Robust, On-Time & Reliable
        </h3>
        <p className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">
          Our extensive, proven track record of over two decades demonstrates that we know what we’re doing, and our reputation as industry leaders is well earned.
        </p>

        {/* Guarantee Items */}
        <div className="grid gap-8 mt-12 sm:grid-cols-2 md:grid-cols-4">
          <GuaranteeCard
            icon={<i className="fas fa-infinity"></i>}
            title="Built To Last"
          />
          <GuaranteeCard
            icon={<i className="fas fa-industry"></i>}
            title="Highest Quality Of Manufacturing Facility"
          />
          <GuaranteeCard
            icon={<i className="fas fa-calendar-check"></i>}
            title="Delivery & Scheduling Guaranteed"
          />
          <GuaranteeCard
            icon={<i className="fas fa-heart"></i>}
            title="Expectations Exceeded"
          />
        </div>
      </div>
    </section>
  );
};

export default OurGuarantee;
