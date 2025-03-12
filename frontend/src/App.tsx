import React, { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import MediaKit from './components/MediaKit';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

// Theme configuration
const theme = {
  token: {
    colorPrimary: '#d4af37',
    fontFamily: 'Poppins, sans-serif',
    borderRadius: 8,
    colorBgContainer: '#ffffff',
    colorText: '#2d3436',
    colorTextSecondary: '#636e72',
  },
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <ConfigProvider theme={theme}>
      <AnimatePresence mode='wait'>
        <div className="min-h-screen bg-gradient-to-b from-background-light to-white text-primary transition-all duration-300 overflow-hidden">
          <Navbar />
          <main className="w-full">
            <Hero />
            <About />
            <Works />
            <Gallery />
            <MediaKit />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#333',
                color: '#fff',
                borderRadius: '8px',
              },
            }}
          />
        </div>
      </AnimatePresence>
    </ConfigProvider>
  );
}

export default App;
