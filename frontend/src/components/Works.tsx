import { motion, useScroll, useTransform } from 'framer-motion';

const works = [
  {
    title: 'Campanhas Publicitárias',
    description: 'Colaborações com marcas renomadas em campanhas exclusivas',
    bgImage: 'trab1.jpg',
    icon: '📸',
  },
  {
    title: 'Ensaios Fotográficos',
    description: 'Produções profissionais para editoriais e portfólio',
    bgImage: 'trab2.jpg',
    icon: '✨',
  },
  {
    title: 'Produção de Conteúdo',
    description: 'Conteúdo autêntico e engajador para redes sociais',
    bgImage: 'trab3.jpg',
    icon: '📱',
  },
];

const Works = () => {
  return (
    <section id="works" className="py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-gold-200/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-gold-100/10 to-transparent blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-28 h-28 bg-gradient-conic from-gold-300/20 via-gold-200/10 to-gold-300/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="text-gold-500 font-medium tracking-wider mb-2 text-sm"
            >
              PORTFÓLIO
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut' }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5 font-poppins text-gray-900 tracking-tight"
            >
              Trabalhos Realizados
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mb-6 transform origin-center hover:scale-x-110 transition-transform duration-300" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
              className="text-lg text-gray-600 font-light max-w-2xl mx-auto"
            >
              Já tenho o prazer de colaborar com diversas empresas de moda e beleza, 
              participando de campanhas publicitárias, editoriais de moda e eventos exclusivos.
            </motion.p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeInOut' }}
              className="group relative h-[450px] rounded-2xl overflow-hidden"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-1000 group-hover:duration-200" />
              
              <div className="relative h-full rounded-2xl overflow-hidden">
                {/* Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={work.bgImage}
                    alt={work.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-all duration-300" />
                </div>
                
                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <div className="text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
                    {work.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-poppins tracking-tight">
                    {work.title}
                  </h3>
                  <p className="text-white/80 font-light leading-relaxed text-[15px] transform opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {work.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
