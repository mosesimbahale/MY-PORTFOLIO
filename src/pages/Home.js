import React from 'react';

import Skills from '../components/Skills';
import Project from '../components/Project';
import Navbar from '../components/Navbar';
import Certification from '../components/Certification';
import Footer from '../components/Footer';
import Avatar from '../components/Avatar';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';








const Home = () => {
  return (
    <div className='App'>
    <Navbar />
    
    
    <Avatar />
    
    <Skills />
    
    <Project />
    
    <Experience />
    
    <Certification />
    
    <Testimonials />
    
    <Footer />
    
    
    
    
    </div>
    
  )
}

export default Home;