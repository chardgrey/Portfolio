import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import github from '../images/github.png';
import fb from '../images/fb1.png';
import ig from '../images/ig.png';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-20 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a 
            href="mailto:cardosarichard@gmail.com"
            className="group p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-blue-400 mb-4" />
            </motion.div>
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">cardosarichard@gmail.com</p>
          </motion.a>

          <motion.a 
            href="https://github.com/chardgrey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800/80 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.img 
              src={github} 
              alt="GitHub" 
              className="w-12 h-12 mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">chardgrey</p>
          </motion.a>

          <motion.a 
            href="https://facebook.com/chard.cardosa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-blue-600/50 hover:bg-gray-800/80 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.img 
              src={fb} 
              alt="Facebook" 
              className="w-12 h-12 mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">chard.cardosa</p>
          </motion.a>

          <motion.a 
            href="https://instagram.com/chardgrey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-pink-500/50 hover:bg-gray-800/80 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.img 
              src={ig} 
              alt="Instagram" 
              className="w-12 h-12 mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">chardgrey</p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
