import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from 'antd';
import { TeamOutlined, InstagramOutlined, TrophyOutlined } from '@ant-design/icons';

const About = () => {
  const stats = [
    { 
      number: '10+', 
      label: 'Anos de Experiência', 
      delay: 0.2,
      icon: <TrophyOutlined className="text-3xl md:text-2xl text-gold-500 group-hover:scale-110 transform transition-all duration-300 animate-pulse-slow" />
    },
    { 
      number: '20+', 
      label: 'Parcerias com Marcas', 
      delay: 0.4,
      icon: <TeamOutlined className="text-3xl md:text-2xl text-gold-500 group-hover:scale-110 transform transition-all duration-300 animate-pulse-slow" />
    },
    { 
      number: '11K+', 
      label: 'Seguidores no Instagram', 
      delay: 0.6,
      icon: <InstagramOutlined className="text-3xl md:text-2xl text-gold-500 group-hover:scale-110 transform transition-all duration-300 animate-pulse-slow" />
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-gold-200/30 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-gold-100/20 to-transparent blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-28 h-28 bg-gradient-conic from-gold-300/30 via-gold-200/20 to-gold-300/30 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.6, 0.01, 0, 0.9] }}
            className="relative"
          >
            <motion.div 
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg relative group"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/Snapinst.app_472610762_28679259705005905_7693654104973135425_n_1080.jpg"
                  alt="Maria Julia Portela"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </motion.div>
            
            {/* Accent elements */}
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full blur-xl opacity-20" />
            <div className="absolute -top-5 -left-5 w-28 h-28 bg-gradient-to-tr from-gold-300 to-gold-500 rounded-full blur-xl opacity-20" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.6, 0.01, 0, 0.9] }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.01, 0, 0.9] }}
                className="text-gold-500 font-medium tracking-wider mb-2 text-sm"
              >
                SOBRE MIM
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.6, 0.01, 0, 0.9] }}
                className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5 font-poppins text-gray-900 tracking-tight"
              >
                Quem Sou Eu?
              </motion.h2>
              <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mb-6 transform origin-left hover:scale-x-110 transition-transform duration-300" />
            </div>
            
            <div className="space-y-5 text-base text-gray-600 leading-relaxed">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.6, 0.01, 0, 0.9] }}
                className="font-light text-[15px]"
              >
                Sou Maria Julia Portela Nery, uma jovem de 18 anos nascida em Teresina
                e atualmente morando em Parnaíba, Piauí. Desde cedo, descobri minha paixão por moda, 
                fotografia e comunicação, o que me levou a trilhar o caminho como modelo e 
                influenciadora digital.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.6, 0.01, 0, 0.9] }}
                className="font-light text-[15px]"
              >
                Através do meu trabalho, busco criar uma relação autêntica e orgânica com o público, 
                transmitindo não apenas ideias, mas também emoções e experiências que possam inspirar 
                e engajar. Acredito que a sinceridade e a empatia são a base para construir laços 
                duradouros.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.6, 0.01, 0, 0.9] }}
                className="font-light text-[15px]"
              >
                Além de Modelo e Influênciadora, minha trajetória inclui títulos importantes no mundo 
                dos concursos de beleza.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.6, 0.01, 0, 0.9] }}
              className="text-gold-500 font-semibold tracking-wide"
            >
              <span className="text-2xl">Modelo • Influenciadora • Miss</span>
            </motion.div>
            
            <div className="flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-5 mt-10">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2, scale: 0.995 }}
whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.6, delay: stat.delay, ease: [0.6, 0.01, 0, 0.9] }}
                  className="flex items-center md:flex-col bg-white/95 backdrop-blur-sm p-6 md:p-6 rounded-2xl shadow-md hover:shadow-xl hover:shadow-gold-200/20 border border-gold-100/50 transition-all duration-300 group relative overflow-hidden hover:bg-white/100"
                >
                  <div className="mr-6 md:mr-0 md:mb-5 relative z-10 flex-shrink-0 bg-gold-50/50 p-3 rounded-xl">{stat.icon}</div>
                  <div className="absolute -right-5 -top-5 w-24 h-24 bg-gradient-to-br from-gold-200/20 to-gold-300/10 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500" />
<div className="flex-1 md:text-center pl-4 md:pl-0">
                  <h3 className="text-3xl md:text-3xl font-bold md:mb-2 bg-gradient-to-r from-gold-500 to-gold-700 bg-clip-text text-transparent leading-none mb-1.5 md:mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-[15px] md:text-base text-gray-500 font-medium group-hover:text-gold-600 transition-colors duration-300 leading-tight">
                    {stat.label}
                  </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
