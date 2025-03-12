import { Button } from 'antd';
import { motion, useScroll, useTransform } from 'framer-motion';
import { InstagramOutlined } from '@ant-design/icons';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={containerRef} className="h-screen relative overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
      {/* Background Video/Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale, y }}
      >
        <img 
          src="/fundo.png" 
          alt="Background" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      
      {/* Gradientes modernos */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/public/pattern.png')] opacity-10" />
      
      {/* Content Container */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-center relative"
        >
          {/* Subtle accent line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"
          />

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-poppins tracking-tight drop-shadow-xl"
          >
            Maria Julia <span className="text-gold-400">Portela</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg"
          >
            Transformando sonhos em realidade através da moda, beleza e influência digital
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button
              type="primary"
              size="large"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[180px] h-12 text-sm bg-white/10 hover:bg-white/20 text-white font-medium tracking-wide rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm border border-white/20 transform hover:-translate-y-1 transition-all duration-300 ease-out group overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-500 ease-out"></span>
              <span className="relative">Entre em Contato</span>
            </Button>

            {/* Social Links */}
            <motion.a
              href="https://instagram.com/maju.portela_" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <InstagramOutlined className="text-lg text-white" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
