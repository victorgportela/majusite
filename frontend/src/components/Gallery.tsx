import { useState } from 'react';
import { Image } from 'antd';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EyeOutlined } from '@ant-design/icons';

const images = [
  { 
    src: '/miss2.jpg', 
    alt: 'Desfile na Passarela',
    category: 'Concurso'
  },
  { 
    src: '/blue.jpg', 
    alt: 'Concurso de Beleza',
    category: 'Eventos'
  },
  { 
    src: '/SaveClip.App_453054381_1005678604535918_8622879948685809835_n.jpg', 
    alt: 'Editorial de Moda',
    category: 'Editorial'
  },
  { 
    src: '/….jpg', 
    alt: 'Campanha de Marca',
    category: 'Publicidade'
  },
  { 
    src: '/verao.jpg', 
    alt: 'Ensaio Verão',
    category: 'Editorial'
  },
  { 
    src: '/natal.jpg', 
    alt: 'Ensaio Natalino',
    category: 'Editorial'
  }
];

const Gallery = () => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-gold-100/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-gold-200/10 to-transparent blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-gradient-conic from-gold-300/20 via-gold-200/10 to-gold-300/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-gold-500 font-medium tracking-wider mb-2 text-sm"
            >
              PORTFÓLIO FOTOGRÁFICO
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5 font-poppins text-gray-900 tracking-tight"
            >
              Galeria de Fotos
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mb-6 transform origin-center hover:scale-x-110 transition-transform duration-300" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg text-gray-600 font-light max-w-2xl mx-auto"
            >
              Uma seleção cuidadosa de fotos profissionais que capturam a essência do meu trabalho como modelo.
            </motion.p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => {
                setCurrentImage(image.src);
                setVisible(true);
              }}
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-1000 group-hover:duration-200" />
              
              <div className="relative h-full rounded-2xl overflow-hidden">
                {/* Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-all duration-300" />
                </div>
                
                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit mb-3 transform transition-all duration-300 group-hover:translate-x-2">
                    <span className="text-white/90 text-sm font-medium">{image.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-poppins tracking-tight">
                    {image.alt}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/80 transform opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <EyeOutlined className="text-base" />
                    <span className="text-sm font-light">Visualizar</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Image
        style={{ display: 'none' }}
        preview={{
          visible,
          src: currentImage,
          onVisibleChange: (vis) => setVisible(vis),
        }}
      />
    </section>
  );
};

export default Gallery;
