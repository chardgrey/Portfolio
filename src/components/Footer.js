import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCode, faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="bg-gray-900 border-t border-gray-800"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Richard.dev
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate full-stack developer focused on creating innovative web solutions 
              with modern technologies and best practices.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {/*
                { href: "#home", label: "Home" },
                { href: "#expertise", label: "Expertise" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" }
              */}
              {[
                { href: "#home", label: "Home" },
                { href: "#expertise", label: "Expertise" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <motion.li key={link.label}>
                  <motion.a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-blue-400">Email:</span> cardosarichard@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-blue-400">Available for:</span> Freelance & Full-time
              </p>
              <p className="text-gray-400">
                <span className="text-blue-400">Response time:</span> Within 24 hours
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                color: ["#ef4444", "#f87171", "#ef4444"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FontAwesomeIcon icon={faHeart} className="text-red-500" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FontAwesomeIcon icon={faCode} className="text-blue-400" />
            </motion.div>
            <span>by ChardGrey</span>
          </div>

          <motion.button 
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </motion.div>
          </motion.button>
        </motion.div>

        <motion.div 
          className="text-center mt-6 pt-6 border-t border-gray-800"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Richard Cardosa. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
