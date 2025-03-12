import { Form, Input, Button, message } from 'antd';
import { motion } from 'framer-motion';
import { InstagramOutlined, WhatsAppOutlined, MailOutlined, SendOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    message.success('Mensagem enviada com sucesso!');
    form.resetFields();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
              CONTATO
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeInOut' }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-5 font-poppins text-gray-900 tracking-tight"
            >
              Vamos Trabalhar Juntos!
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mb-6 transform origin-center hover:scale-x-110 transition-all duration-300 ease-[0.6,0.01,0,0.9]" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
              className="text-lg text-gray-600 font-light max-w-2xl mx-auto"
            >
              Estou disponível para campanhas publicitárias, desfiles, eventos e parcerias comerciais.
              Entre em contato para mais informações.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border border-gold-200/20 hover:shadow-gold-200/20 transition-all duration-300"
          >
            <h3 className="text-xl lg:text-2xl font-bold mb-6 font-poppins text-primary">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <a
                href="mailto:majunery0103007@gmail.com"
                className="flex items-center space-x-4 text-gray-700 hover:text-accent transition-all duration-300 ease-[0.6,0.01,0,0.9] group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400/10 to-gold-600/10 rounded-full flex items-center justify-center group-hover:from-gold-400/20 group-hover:to-gold-600/20 transition-all duration-300 ease-[0.6,0.01,0,0.9]">
                  <MailOutlined className="text-xl text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <span className="text-gray-600">majunery0103007@gmail.com</span>
                </div>
              </a>
              
              <a
                href="https://wa.me/558699993134"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-700 hover:text-accent transition-all duration-300 ease-[0.6,0.01,0,0.9] group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400/10 to-gold-600/10 rounded-full flex items-center justify-center group-hover:from-gold-400/20 group-hover:to-gold-600/20 transition-all duration-300 ease-[0.6,0.01,0,0.9]">
                  <WhatsAppOutlined className="text-xl text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold mb-1">WhatsApp</p>
                  <span className="text-gray-600">+55 (86) 99999-3134</span>
                </div>
              </a>
              
              <a
                href="https://instagram.com/maju.portela_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-700 hover:text-accent transition-all duration-300 ease-[0.6,0.01,0,0.9] group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400/10 to-gold-600/10 rounded-full flex items-center justify-center group-hover:from-gold-400/20 group-hover:to-gold-600/20 transition-all duration-300 ease-[0.6,0.01,0,0.9]">
                  <InstagramOutlined className="text-xl text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Instagram</p>
                  <span className="text-gray-600">@maju.portela_</span>
                </div>
              </a>
            </div>
            
            <div className="mt-10 p-5 bg-gradient-to-r from-gold-50 to-gold-100/50 rounded-xl border border-gold-200/20">
              <p className="text-gray-700 font-medium">
                Siga-me nas redes sociais para acompanhar meu trabalho e novidades!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border border-gold-200/20 hover:shadow-gold-200/20 transition-all duration-300"
          >
            <h3 className="text-xl lg:text-2xl font-bold mb-6 font-poppins text-primary">
              Envie uma Mensagem
            </h3>
            
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="space-y-6"
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Por favor, insira seu nome' }]}
              >
                <Input 
                  size="large" 
                  placeholder="Nome" 
                  className="py-2.5 px-3.5 rounded-lg border-gold-200 focus:border-gold-400 hover:border-gold-300 transition-all duration-300 ease-[0.6,0.01,0,0.9]"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Por favor, insira seu email' },
                  { type: 'email', message: 'Por favor, insira um email válido' }
                ]}
              >
                <Input 
                  size="large" 
                  placeholder="Email" 
                  className="py-2.5 px-3.5 rounded-lg border-gold-200 focus:border-gold-400 hover:border-gold-300 transition-all duration-300 ease-[0.6,0.01,0,0.9]"
                />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Por favor, insira sua mensagem' }]}
              >
                <TextArea
                  size="large"
                  placeholder="Mensagem"
                  rows={6}
                  className="py-2.5 px-3.5 rounded-lg resize-none border-gold-200 focus:border-gold-400 hover:border-gold-300 transition-all duration-300 ease-[0.6,0.01,0,0.9]"
                />
              </Form.Item>

              <Form.Item className="mb-0">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  icon={<SendOutlined />}
                  className="w-full h-12 text-base bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 rounded-lg flex items-center justify-center gap-1.5 transform hover:-translate-y-0.5 transition-all duration-300 ease-[0.6,0.01,0,0.9] shadow-md hover:shadow-gold-400/20"
                >
                  Enviar Mensagem
                </Button>
              </Form.Item>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
