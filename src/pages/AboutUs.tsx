import CompanyInfo from '@/components/CompanyInfo';
import FooterSection from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProjectHistory from '@/components/ProjectHistory';
import SolutionSection from '@/components/SolutionSection';
import TopAboutUs from '@/components/TopAboutUs';
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <>
      <Navbar />
      <TopAboutUs/>
      <CompanyInfo/>
      <SolutionSection/>
      <ProjectHistory/>
      <FooterSection />
    </>
  );
};

export default AboutUs;
