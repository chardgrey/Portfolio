import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import jayds from '../images/jayds.jpg';
import asrai from '../images/logo.svg';
import communecards from '../images/Communecards.svg';

const Projects = () => {
  const projects = [
    {
      id: 'jayds',
      title: 'Jayds E-commerce',
      description: 'Comprehensive e-commerce platform with real-time chat functionality using WebSockets. Built with Node.js, Express framework, and MySQL database for my thesis project, featuring secure payment integration and modern UI/UX design.',
      image: jayds,
      icon: faLaptopCode,
      iconColor: 'text-blue-400',
      borderColor: 'hover:border-blue-500/50',
      shadowColor: 'hover:shadow-blue-500/20',
      technologies: [
        { name: 'Node.js', bgColor: 'bg-green-500/20', textColor: 'text-green-300' },
        { name: 'Express', bgColor: 'bg-blue-500/20', textColor: 'text-blue-300' },
        { name: 'MySQL', bgColor: 'bg-orange-500/20', textColor: 'text-orange-300' },
        { name: 'WebSocket', bgColor: 'bg-purple-500/20', textColor: 'text-purple-300' }
      ],
      link: '#'
    },
    {
      id: 'asrai',
      title: 'Asrai Dashboard',
      description: 'Modern frontend dashboard for a proxy service platform. Features clean, intuitive interface with smooth animations and responsive design. Built with vanilla JavaScript focusing on performance and user experience.',
      image: asrai,
      icon: faCode,
      iconColor: 'text-cyan-400',
      borderColor: 'hover:border-cyan-500/50',
      shadowColor: 'hover:shadow-cyan-500/20',
      technologies: [
        { name: 'HTML5', bgColor: 'bg-orange-500/20', textColor: 'text-orange-300' },
        { name: 'CSS3', bgColor: 'bg-blue-500/20', textColor: 'text-blue-300' },
        { name: 'JavaScript', bgColor: 'bg-yellow-500/20', textColor: 'text-yellow-300' }
      ],
      link: '#'
    },
    {
      id: 'communecards',
      title: 'Communecards',
      description: 'Interactive quiz-based learning platform where I began my web development journey. Started as Junior Frontend Developer, transitioning from HTML/CSS to modern React development with Tailwind CSS for responsive design.',
      image: communecards,
      icon: faLaptopCode,
      iconColor: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/50',
      shadowColor: 'hover:shadow-emerald-500/20',
      technologies: [
        { name: 'React', bgColor: 'bg-blue-500/20', textColor: 'text-blue-300' },
        { name: 'Tailwind CSS', bgColor: 'bg-cyan-500/20', textColor: 'text-cyan-300' },
        { name: 'JavaScript', bgColor: 'bg-yellow-500/20', textColor: 'text-yellow-300' }
      ],
      link: '#'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    dotsClass: "slick-dots custom-dots"
  };

  return (
    <section id="projects" className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and contributions to various web development projects
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Slider {...sliderSettings}>
            {projects.map((project) => (
              <div key={project.id} className="p-4">
                <motion.div 
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 ${project.borderColor} transition-all duration-300 ${project.shadowColor} relative z-10`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="h-80 lg:h-96 relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50">
                      <motion.img 
                        src={project.image} 
                        alt={`${project.title} interface`} 
                        className="w-full h-full object-contain p-8"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <FontAwesomeIcon icon={project.icon} className={`${project.iconColor} text-xl`} />
                        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                      </div>
                      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, index) => (
                          <motion.span 
                            key={index}
                            className={`px-3 py-1 ${tech.bgColor} ${tech.textColor} rounded-full text-sm font-medium`}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech.name}
                          </motion.span>
                        ))}
                      </div>
                      <motion.a 
                        href={project.link}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                        whileHover={{ x: 5 }}
                      >
                        View Project <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
