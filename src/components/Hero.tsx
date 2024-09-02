import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Greener, Smarter & Faster</h1>
        <p className="mb-6">Modular Construction is the new way of building better.</p>
        <button className="bg-indigo-600 text-white py-2 px-6 rounded">Send Us a Message</button>
      </div>
    </section>
  );
}

export default Hero;