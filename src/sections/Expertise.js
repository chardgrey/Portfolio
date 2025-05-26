import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import node from '../images/node.png';
import mysql from '../images/mysql.png';
import tailwind from '../images/tailwind.png';
import react from '../images/react.png';
import nextjs from '../images/nextjs.svg';

const Expertise = () => {
  const [activeSkill, setActiveSkill] = useState('react');

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

  const skillCardVariants = {
    inactive: {
      scale: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    active: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.03,
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const skillDescriptions = {
    react: "Building modern and responsive user interfaces with React.js, utilizing hooks, context API, and state management solutions for seamless user experiences.",
    node: "Developing scalable backend services with Node.js, creating RESTful APIs and handling server-side operations with excellent performance.",
    mysql: "Managing relational databases with MySQL, designing efficient schemas and writing optimized queries for robust data management.",
    tailwind: "Creating beautiful and responsive designs using Tailwind CSS utility-first framework with custom configurations and modern aesthetics.",
    nextjs: "Building full-stack React applications with Next.js, leveraging server-side rendering, static site generation, and API routes for optimal performance and SEO.",
    mongodb: "Working with NoSQL databases using MongoDB, handling document-based data structures and aggregation pipelines for flexible data solutions."
  };

  const skills = [
    { id: 'react', name: 'React.js', icon: react, color: 'from-blue-400 to-cyan-400' },
    { id: 'nextjs', name: 'Next.js', icon: nextjs, color: 'from-gray-400 to-gray-600' },
    { id: 'node', name: 'Node.js', icon: node, color: 'from-green-400 to-emerald-400' },
    { id: 'mysql', name: 'MySQL', icon: mysql, color: 'from-orange-400 to-red-400' },
    { id: 'tailwind', name: 'Tailwind CSS', icon: tailwind, color: 'from-cyan-400 to-blue-400' },
    { id: 'mongodb', name: 'MongoDB', icon: react, color: 'from-green-500 to-green-400' }
  ];

  return (
    <section id="expertise" className="py-20 px-6 lg:px-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized in modern web development technologies with a focus on creating scalable and efficient solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.id}
              variants={skillCardVariants}
              initial="inactive"
              animate={activeSkill === skill.id ? "active" : "inactive"}
              whileHover="hover"
              className={`group cursor-pointer p-8 rounded-2xl border border-gray-700/50 hover:border-transparent transition-all duration-300 ${
                activeSkill === skill.id 
                  ? `bg-gradient-to-br ${skill.color} bg-opacity-10 border-transparent shadow-lg` 
                  : 'bg-gray-800/50 hover:bg-gray-800/80'
              }`}
              onClick={() => setActiveSkill(skill.id)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div 
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    activeSkill === skill.id 
                      ? `bg-gradient-to-br ${skill.color} shadow-lg` 
                      : 'bg-gray-700 group-hover:bg-gray-600'
                  }`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                </motion.div>
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                  activeSkill === skill.id ? 'text-white' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSkill}
            className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              {skills.find(skill => skill.id === activeSkill)?.name}
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              {skillDescriptions[activeSkill]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Expertise;
