import React from 'react';

const FooterSection = () => {

  return (
    <div className="relative bg-cover bg-center p-40"
      style={{ 
        backgroundImage: 'url("https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/6205de33ec584ca2ce3d153f_Rectangle-2.jpg")',
        backgroundRepeat: 'no-repeat',
        paddingBottom: '4rem',
      }}>
      
      {/* Main CTA Section */}
      <div className="flex flex-col items-center justify-center bg-white text-center w-full p-4">
        <h2 className="text-3xl text-wrap font-bold text-gray-900 mb-6">
          Let's Talk About Your Project And Start Building!
        </h2>
        <button className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-700 transition">
          CONTACT US
        </button>
        {/* Footer Section */}
        <footer className="bg-white text-gray-900 py-10 mx-auto mt-8 max-w-screen-lg w-full">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
            {/* Logo and Address */}
            <div className="text-center md:text-left md:flex-1">
              <img
                src="https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/61f0ce6fe8161c72f61be858_logo-blue.svg"
                alt="TLC Modular Logo"
                className="h-12 mb-4 mx-auto md:mx-0"
              />
              <p className="text-sm font-semibold">ADDRESS</p>
              <p className="text-sm text-gray-700">
                Samco Building, 4th FL, 326 Vo Van Kiet Street, Co Giang Ward, District 1, Ho Chi Minh City, Vietnam
              </p>
            </div>
            {/* Email */}
            <div className="text-center md:flex-1">
              <p className="text-sm font-semibold">EMAIL</p>
              <p className="text-sm text-gray-700">
                <a href="mailto:enquiry@tlcmodular.com" className="text-blue-900 hover:underline">
                  enquiry@tlcmodular.com
                </a>
              </p>
            </div>
            {/* Navigation Links */}
            <div className="text-center md:text-right md:flex-1 space-y-2">
              <nav className="space-x-4">
                <a href="#projects" className="text-sm text-gray-700 hover:text-blue-900 transition">
                  PROJECTS
                </a>
                <a href="#facilities" className="text-sm text-gray-700 hover:text-blue-900 transition">
                  FACILITIES
                </a>
                <a href="#about" className="text-sm text-gray-700 hover:text-blue-900 transition">
                  ABOUT US
                </a>
                <a href="#locations" className="text-sm text-gray-700 hover:text-blue-900 transition">
                  LOCATIONS
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterSection;
