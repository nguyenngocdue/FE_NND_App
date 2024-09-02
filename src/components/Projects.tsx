import React from 'react';

const Projects = () => {
  return (
    <section className="relative py-16 bg-blue-900 text-white">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-xs font-semibold tracking-wider text-blue-300 uppercase">
              What we do
            </h2>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              At The Forefront Of The Modular Construction Market Si01
            </h3>
            <p className="mt-4 text-sm text-gray-300">
              Our modular system offers effective, efficient, and agile construction solutions at affordable prices for property owners and developers. We tailor the project execution plan, design, and engineering to meet the specific needs of each project.
            </p>
            <button className="px-6 py-3 mt-6 font-semibold text-blue-900 bg-white rounded-full hover:bg-gray-200">
              VIEW ALL PROJECTS
            </button>
          </div>
          <div className="relative mt-8 md:mt-0 md:w-1/2 md:ml-16">
            <div className="relative w-full overflow-hidden">
              <div className="flex space-x-4 overflow-x-auto snap-x">
                <div className="snap-center flex-shrink-0 w-64 md:w-80 h-60 bg-cover bg-center" style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/61e5a018c77163b89e26febf/61e656d62c19d6a388757497_image-cosa-hotel-p-500.png")' }}>
                  <p className="absolute bottom-4 left-4 text-sm">2022</p>
                  <p className="absolute bottom-4 right-4 text-sm">Bellfield Townhouses</p>
                </div>
                <div className="snap-center flex-shrink-0 w-64 md:w-80 h-60 bg-cover bg-center" style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/61e5a018c77163b89e26febf/638f12b020433a1680d27ade_TLC%20Modular%20Home%20Page%20Image-p-500.png")' }}>
                  <p className="absolute bottom-4 left-4 text-sm">2022</p>
                  <p className="absolute bottom-4 right-4 text-sm">Papakura Auckland NZ</p>
                </div>
                <div className="snap-center flex-shrink-0 w-64 md:w-80 h-60 bg-cover bg-center" style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/61e5a018c77163b89e26febf/61f2874481fa4db21bc30bfb_Rectangle-p-500.jpeg")' }}>
                  <p className="absolute bottom-4 left-4 text-sm">2022</p>
                  <p className="absolute bottom-4 right-4 text-sm">Arden Hotel</p>
                </div>
              </div>
            </div>
            {/* Optional: Previous/Next Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button className="w-8 h-8 bg-white text-blue-900 rounded-full hover:bg-gray-300">‹</button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button className="w-8 h-8 bg-white text-blue-900 rounded-full hover:bg-gray-300">›</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
