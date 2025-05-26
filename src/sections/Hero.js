import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import profile from '../images/profile.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  useEffect(() => {
    // Typing animation
    const text = "Backend Web Developer + Frontend Web Developer";
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20 md:py-16 lg:py-0 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 3 }}
      />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 itemss-center relative z-10">
        <motion.div 
          className="space-y-6 lg:space-y-8 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h1 
              className="text-xl md:text-2xl text-gray-300 font-light"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.h1>
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 text-transparent bg-clip-text"
              variants={itemVariants}
            >
              Richard
            </motion.h2>
            <motion.div 
              className="text-xl md:text-3xl lg:text-4xl text-gray-200 min-h-[80px] md:min-h-[120px]"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text font-semibold">
                {typedText}
              </span>
              {isTyping && <motion.span 
                className="animate-pulse"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >|</motion.span>}
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            Passionate about creating reliable, secure, and efficient solutions for web applications. 
            Experienced in building scalable systems with modern technologies and clean architecture.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <motion.div
                animate={{ rotate: [0, 12, 0] }}
                transition={{ duration: 0.3 }}
              >
                <FontAwesomeIcon icon={faPhoneAlt} />
              </motion.div>
            </motion.button>
            <motion.button 
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-20"
              animate={{ 
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <img 
              src={profile} 
              alt="Richard's profile" 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-gray-700 shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-4 md:bottom-8 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.a 
          href='#expertise' 
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium">Discover My Skills</span>
          <FontAwesomeIcon icon={faAnglesDown} className="text-xl" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
