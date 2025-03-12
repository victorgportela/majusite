import { useState, useEffect } from 'react';
import { UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<UpOutlined />}
            onClick={scrollToTop}
            className="bg-accent hover:bg-accent/90 shadow-lg"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
