import React from 'react';
import Introduction  from '../components/Introduction';
import Hero  from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import OurProcess from '@/components/OurProcess ';
import '../index.css';
import OurGuarantee from '@/components/OurGuarantee';
import FooterSection from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-[#8b7bf3]">
      <Navbar />
      <Hero />
      <Introduction  />
      <Projects />
      <OurProcess />
      <OurGuarantee />
      <FooterSection />
    </div>
  );
}

export default Home;
