import { motion } from 'framer-motion';
import { StarFilled } from '@ant-design/icons';
import { useState } from 'react';

// Dados de depoimentos
const testimonials = [
  {
    text: "Maria Julia é uma profissional incrível! Sua dedicação e profissionalismo fizeram toda a diferença em nossa campanha. Recomendo fortemente seus serviços para quem busca resultados excepcionais.",
    author: "Vell Rezende",
    role: "Founder e CEO da Vellbiz",
    image: './vell.jpg',
    rating: 5
  },
  {
    text: "Trabalhar com a Maria Julia foi uma experiência transformadora para nossa marca. Sua visão estratégica e criatividade elevaram nosso posicionamento no mercado.",
    author: "Eduardo",
    role: "Founder e CEO Rifi Agência",
    image: './edu.jpg',
    rating: 5
  },
  {
    text: "A Maria Julia tem um talento único para captar a essência de uma marca e transformá-la em comunicação efetiva. Nossos resultados melhoraram significativamente após sua consultoria.",
    author: "Katrine",
    role: "Founder e Ceo da UseVeronissima",
    image: './vernoi.jpg',
    rating: 5
  }
];

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background-light to-gray-50 dark:from-background-dark dark:to-[#0f172a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent dark:text-accent-dark font-medium uppercase tracking-wider text-sm mb-2 inline-block">
            Experiências Reais
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary dark:text-primary-dark mb-4 font-poppins">
            O Que Dizem Sobre Mim
          </h2>
          <p className="text-lg text-secondary dark:text-secondary-dark max-w-2xl mx-auto font-inter">
            Conheça a opinião de quem já trabalhou comigo e os resultados alcançados
          </p>
        </motion.div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`card p-6 transition-all duration-300 ${
                  hoveredIndex === index ? 'transform -translate-y-2 shadow-xl dark:shadow-accent-dark/5' : ''
                }`}
              >
                {/* Aspas decorativas */}
                <div className="absolute top-6 right-6 text-accent dark:text-accent-dark opacity-10">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20L10 0H18L12 20H18V40H0V20ZM22 20L32 0H40L34 20H40V40H22V20Z" fill="currentColor"/>
                  </svg>
                </div>

                {/* Avaliação em estrelas */}
                <div className="flex mb-4 text-accent dark:text-accent-dark">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarFilled key={i} className="text-lg" />
                  ))}
                </div>

                {/* Texto do depoimento */}
                <p className="text-secondary dark:text-secondary-dark mb-8 leading-relaxed font-inter min-h-[120px]">
                  "{testimonial.text}"
                </p>

                {/* Linha divisória */}
                <div className="w-16 h-1 bg-accent/30 dark:bg-accent-dark/30 mb-4"></div>

                {/* Informações do autor */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-border-light dark:border-border-dark shadow-sm">
                    <img 
                      src={testimonial.image} 
                      alt="Foto"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNFNUU3RUIiLz48dGV4dCB4PSI1MCIgeT0iNTAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM2QjcyODAiPkltYWdlbTwvdGV4dD48L3N2Zz4=';
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary dark:text-primary-dark font-poppins">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-secondary dark:text-secondary-dark font-inter">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Elemento decorativo de fundo */}
              <div 
                className={`absolute -z-10 rounded-xl bg-accent/5 dark:bg-accent-dark/10 transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'top-3 left-3 right-3 bottom-1 opacity-100' 
                    : 'top-0 left-0 right-0 bottom-0 opacity-0'
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA abaixo dos depoimentos */}

      </div>
    </section>
  );
};

export default Testimonials;
