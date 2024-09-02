import React from 'react';

function ProjectHistory() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Section: Heading */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            From Unique Homes To <br /> Multilevel Hotels
          </h2>
        </div>

        {/* Right Section: Paragraph */}
        <div className="md:w-1/2">
          <p className="text-gray-600">
            Our project history spans many projects from sprawling homes to multilevel hotels.
            With Goldman Sachs as a major partner and investor in TLC, this will solidify our position in the
            modular market and facilitate growth within existing markets and into new global markets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectHistory;
