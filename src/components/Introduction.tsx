import React from 'react';

const Introduction = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl px-4 mx-auto text-center">
        <h2 className="text-2xl font-semibold md:text-4xl">
          Introducing A Greener, Smarter & Faster Way To Build Homes, Hotels & Developments
        </h2>
        <div className="grid gap-4 mt-12 md:grid-cols-4">
          <div className="space-y-4">
            <img src="https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/61ea93dc166607c1437af772_faci-prj-img-1.jpg" alt="Development 1" className="w-full h-auto" />
            <p className="text-sm text-gray-700">TLC’s Modular construction method leads to community friendly and sustainable buildings.</p>
          </div>
          <div className="space-y-4">
            <img src="https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/61ea95ba01d3b2432a2af176_faci-prj-img-3.jpg" alt="Development 2" className="w-full h-auto" />
            <p className="text-sm text-gray-700">Our modular builds provide on-site, minimizing neighborhood impact.</p>
          </div>
          <div className="space-y-4">
            <img src="https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/61ea95bb7ce3bc7d5726c156_faci-prj-img-2.jpg" alt="Development 3" className="w-full h-auto" />
            <p className="text-sm text-gray-700">Our mission is to be a Market Leader, working with local authorities to address housing supply constraints.</p>
          </div>
          <div className="space-y-4">
            <img src="https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/61f263524da54e60887d84da_Image-6.jpg" alt="Development 3" className="w-full h-auto" />
            <p className="text-sm text-gray-700">Our mission is to be a Market Leader, working with local authorities to address housing supply constraints.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
