import { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Início', href: '#' },
  { label: 'Sobre', href: '#about' },
  { label: 'Trabalhos', href: '#works' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar seção ativa
      const sections = navItems.map(item => item.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-lg py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between relative">
          <motion.div 
            className="flex-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#" 
              className={`text-2xl font-bold font-poppins tracking-tight ${
                isScrolled 
                  ? 'text-primary bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600' 
                  : 'text-white'
              }`}
            >
              MJP
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex-auto hidden md:flex items-center justify-center gap-12">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`relative font-medium text-sm tracking-wide transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        isScrolled ? 'bg-primary' : 'bg-white'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-6 h-10 font-medium tracking-wide rounded-full ${
                  isScrolled
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 border-none'
                    : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30'
                }`}
              >
                Contato
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden p-2 focus:outline-none transition-all duration-300"
            aria-label="Abrir menu"
          >
            <MenuOutlined className={`text-xl ${
              isScrolled ? 'text-primary' : 'text-white'
            }`} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsDrawerOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-primary font-poppins">Menu</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <CloseOutlined className="text-xl text-gray-600" />
                  </motion.button>
                </div>
                
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{ x: 4 }}
                      className="text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
