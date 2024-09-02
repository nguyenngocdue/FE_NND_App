import React from 'react';

function SolutionSection() {
  return (
    <div className="bg-white py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-bold text-gray-500 uppercase">Our Solution</h3>
        <h2 className="text-4xl font-bold">A Solution You Can Trust</h2>
      </div>

      {/* Image and Text Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <img src="https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/61f27fe28d1179512d7566f8_Image-2.jpg" alt="Solution 1" className="w-full rounded-lg mb-4" />
          <p className="text-center text-gray-600">
            Our modules are constructed on-site under controlled facility conditions designed to meet and surpass the same codes and standards as conventionally built structures.
          </p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <img src="https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/61f27fe358147e21f89375e6_Image-1.jpg" alt="Solution 2" className="w-full rounded-lg mb-4" />
          <p className="text-center text-gray-600">
            All structures are designed to withstand their freight and lifting cycles, resulting in a high-tech building that will exceed acoustic and structural durability standards.
          </p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <img src="https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/61f27fe28d1179c4027566f9_Image.jpg" alt="Solution 3" className="w-full rounded-lg mb-4" />
          <p className="text-center text-gray-600">
            All structures are designed to withstand their freight and lifting cycles, resulting in a high-tech building that will exceed acoustic and structural durability standards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;
