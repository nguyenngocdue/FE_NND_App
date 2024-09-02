import React from 'react';

const FooterSection = () => {
  return (
    <div className="relative bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/6205de33ec584ca2ce3d153f_Rectangle-2.jpg")',
        backgroundRepeat: 'no-repeat'
      }}>
      
      {/* Main CTA Section */}
      <div className="flex flex-col items-center justify-center py-12 bg-white text-center mx-auto md:my-16 w-10/12 md:w-8/12 lg:w-6/12 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Let's Talk About Your Project And Start Building!
        </h2>
        <button className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-700 transition">
          CONTACT US
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-white text-gray-900 py-10 mx-auto w-10/12 md:w-8/12 lg:w-6/12 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
          {/* Logo and Address */}
          <div className="text-center md:text-left">
            <img
              src="/path-to-your-logo.png"
              alt="TLC Modular Logo"
              className="h-12 mb-4 mx-auto md:mx-0"
            />
            <p className="text-sm font-semibold">ADDRESS</p>
            <p className="text-sm text-gray-700">
              Samco Building, 4th FL, 326 Vo Van Kiet Street, Co Giang Ward, District 1, Ho Chi Minh City, Vietnam
            </p>
          </div>
          {/* Email */}
          <div className="text-center">
            <p className="text-sm font-semibold">EMAIL</p>
            <p className="text-sm text-gray-700">
              <a href="mailto:enquiry@tlcmodular.com" className="text-blue-900 hover:underline">
                enquiry@tlcmodular.com
              </a>
            </p>
          </div>
          {/* Navigation Links */}
          <div className="text-center md:text-right space-y-2">
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
        <div className="mt-6 text-center text-xs text-gray-500">
          © 2022 TLC Modular. All rights reserved.
        </div>
      </footer>

      {/* Privacy & Terms Section */}
      <div className="text-center text-xs text-gray-500 mt-4 pb-4">
        <a href="#" className="hover:text-gray-700">PRIVACY</a> | <a href="#" className="hover:text-gray-700">TERMS</a>
      </div>
    </div>
  );
};

export default FooterSection;
