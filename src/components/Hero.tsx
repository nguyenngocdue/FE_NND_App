import React from 'react';

const Hero = () => {
    return (
        <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/61e52058abc83b0e8416a425/6396988b34667b6c62ea3c2e_tlc-home-hero%20(1).jpg")' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-3xl font-bold md:text-5xl">GREENER, SMARTER & FASTER</h1>
                <p className="mt-4 text-sm md:text-lg">Modular Construction is the new way of building better.</p>
                <button className="px-6 py-2 mt-6 text-xs font-semibold bg-blue-900 rounded-full hover:bg-blue-700">
                    SEND US A MESSAGE
                </button>
            </div>
        </div>
    );
};

export default Hero;
