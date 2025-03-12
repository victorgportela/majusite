import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const MediaKit = () => {
  // Dados de faixa etária
  const ageData = [
    { name: '18-24 anos', value: 27.3, color: '#eab308' },      // Dourado principal
    { name: '25-34 anos', value: 38.9, color: '#d97706' },     // Dourado escuro
    { name: '35-44 anos', value: 19.5, color: '#f59e0b' },      // Dourado médio
    { name: '45-54 anos', value: 7.4, color: '#fbbf24' },       // Dourado claro
  ];

  // Dados de alcance
  const reachData = [
    { name: 'Seguidores', value: 63.2, color: '#eab308' },      // Dourado principal
    { name: 'Não seguidores', value: 36.8, color: '#d97706' }, // Dourado escuro
  ];

  // Formata o número com separador de milhares
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section id="mediakit" className="py-8 sm:py-12 lg:py-14 bg-white text-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-1 font-poppins tracking-tight">
            Métricas Instragram
          </h2>
          <p className="text-base text-secondary mb-1.5">Últimos 30 dias</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col items-center justify-center">
          {/* Visualizações - Número Grande */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center mb-8 sm:mb-10"
          >
            <div className="text-4xl sm:text-5xl font-bold mb-1.5 text-primary tracking-tight">
              {formatNumber(254308)}
            </div>
            <div className="text-base sm:text-lg text-secondary font-medium">
              Visualizações
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 w-full mt-4 sm:mt-5">
            {/* Faixa Etária */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full px-0 sm:px-2 lg:px-3"
            >
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-lg sm:text-xl font-bold mb-1">
                  Principais faixas etárias
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-5 max-w-sm mx-auto">
                {ageData.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="text-sm font-medium mb-1 text-secondary">
                      {item.name.split(' ')[0]}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
                          className="absolute top-0 left-0 h-full rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></motion.div>
                      </div>
                      <div className="ml-3 text-lg sm:text-xl font-bold whitespace-nowrap text-primary">
                        {item.value}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gráfico de Alcance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full px-0 sm:px-2 lg:px-3"
            >
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-lg sm:text-xl font-bold mb-1">
                  Alcance do Perfil
                </div>
              </div>
              
              <div className="flex flex-col items-center max-w-sm mx-auto">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 mb-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={reachData}
                        cx="50%"
                        cy="50%"
                        innerRadius={32}
                        outerRadius={48}
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                        strokeWidth={0}
                      >
                        {reachData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Legenda */}
                <div className="grid grid-cols-2 gap-x-10 sm:gap-x-14 mt-2">
                  {reachData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 text-primary">
                        {item.value}%
                      </div>
                      <div className="flex items-center text-secondary text-xs">
                        <div 
                          className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full mr-1" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span>{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaKit;
