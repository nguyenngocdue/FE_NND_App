import React from 'react';

function CompanyInfo() {
  return (
    <div className="bg-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold">ABOUT TLC MODULAR</h2>
        <h1 className="text-4xl font-bold mt-2">We Are A Proudly International Company</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          As an International company, we are proud of our valued team of global staff and the vast array of industrial capabilities we offer.
        </p>
      </div>

      <div className="flex justify-center space-x-10 mb-12">
        <div className="text-center">
          <h3 className="text-4xl font-bold">100+</h3>
          <p className="text-gray-600 mt-2">MODULES A MONTH</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">25,000</h3>
          <p className="text-gray-600 mt-2">M² PRODUCTION FACILITY</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">45,000</h3>
          <p className="text-gray-600 mt-2">M² WAREHOUSING & STORAGE</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <img src="https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/61e7909758241536a2521b96_scabout-about-img.png" alt="Team" className="w-full rounded-lg mb-8" />
        
        <div className="grid grid-cols-3 gap-6 text-gray-600">
          <p>
            From first family homes to large multi-level hotels, we provide our customers from all around the world with the chance to own a safer, greener, more economically sound structure to last a lifetime.
          </p>
          <p>
            We manufacture at-scale with a operating multiple projects simultaneously meeting clients’ needs and delivery schedules, from our two factory facilities in Viet Nam. This new addition will drastically upscale present operations and increase production to meet global demands in upcoming years.
          </p>
          <p>
            Most importantly our team of designers, engineers and managers will ensure you get the best-for-project outcomes from TLC, where quality, compliance and reliability is the key to our modular and prefabricated solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
