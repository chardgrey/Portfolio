import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import Expertise from '../sections/Expertise';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
      <Navbar 
        home='#home'
        expertise='#expertise'
        projects='#projects'
        contact='#contact' 
      />
      
      <Hero />
      <Expertise />
      <Projects />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default Home;