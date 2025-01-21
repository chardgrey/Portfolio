import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import profile from '../images/profile.jpg'
import node from '../images/node.png'
import mysql from '../images/mysql.png'
import tailwind from '../images/tailwind.png'
// import mongodb from '../images/mongodb.png'
import react from '../images/react.png'
import github from '../images/github.png'
import fb from '../images/fb1.png'
import sultan from '../images/sultan.png'
import jayds from '../images/jayds.jpg'
import asrai from '../images/logo.svg'
import communecards from '../images/Communecards.svg'
import ig from '../images/ig.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faAnglesDown,faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Changed to 1 to show full width cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <div className=' bg-gr3y text-gray-200 font-markazi text-2xl'>

      <div className='hidden md:block'>
        <Navbar 
          home='#home'
          expertise='#expertise'
          projects='#projects'
          contact='#contact' 
        />
      </div>

      <div className='block md:hidden h-16'></div>

<div id="home" className='scroll-mt-16 flex flex-col items-start justify-center px-4 md:p-20 lg:p-60 h-screen'>
        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row items-center justify-start gap-5'>
            <div className='text-5xl text-start'>
              <div>
                <h1 className='font-markazi text-3xl tracking-tighter text-gray-200 typewriter'>
                  I am <span className='text-blue-500 text-5xl font-markazi font-bold'>Richard</span><br/>
                </h1>
              </div>
              <div className='text-4xl pt-6 text-gray-200 upward'>
                A <span className='bg-gradient-to-r from-blue-500 via-cyan-400 to-blu3 text-transparent bg-clip-text text-5xl font-markazi font-bold'>Backend Web Developer</span> +
                <br/> <span className='bg-gradient-to-r from-blue-500 via-cyan-400 to-blu3 text-transparent bg-clip-text text-5xl font-markazi font-bold'>Frontend Web Developer</span>
              </div>
              <div className='text-2xl pt-6 text-gray-400 upward2'>
                Focused on creating reliable, secure, and efficient backend for web applications.
                Experienced in building web systems with Node.js, Express.js, and MySQL, and also knowledgeable in ReactJs.
              </div>
              <div className='flex items-center justify-start upward2 pt-6 pr-2'>
                <button className='blink bg-gr3y border border-gray-700 rounded-full 
                                  text-center text-gray-200 font-markazi text-xl 
                                  px-4 py-1 shadow-sky-400 flex items-center gap-2
                                  hover:bg-gradient-to-r hover:bg-sky-800 hover:border-gray-600 hover:text-gray-200
                                  hover:border-transparent transition-all duration-300'>
                  Contact <FontAwesomeIcon icon={faPhoneAlt} className='inline-flex'/>
                </button>
              </div>
            </div>
            <div className='flex-shrink-0 px-6 bounce-in flex flex-col items-center justify-center h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px]'>
              <img src={profile} alt="profile" className='rounded-full profile border border-grey-300' />
            </div>
          </div>
        </div>
        <div className="w-full flex-col items-center justify-center absolute bottom-8 left-1/2 transformh hidden md:block -translate-x-1/2">
          <a href='#expertise' className='upward2 flex flex-col items-center justify-center gap-4'>
            <p className='blink text-center text-xl'>Learn more about me</p> 
            <FontAwesomeIcon 
              icon={faAnglesDown} 
              className='text-blu3 blink w-8 h-8'
            />
          </a>
        </div>
      </div>
          
          <div id="expertise" className="flex flex-col items-center justify-center min-h-screen px-4 md:px-16 lg:px-24">
              <h1 className="text-5xl font-markazi text-gray-200 mb-12" data-aos="fade-down">Expertise</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="flex flex-row items-center gap-8">
                  <div data-aos="fade-right" data-aos-delay="100">
                    <div className="h-[150px] w-[150px] rounded border-gray-700 shadow-lg border 
                                  text-lg flex flex-col items-center justify-center gap-2 
                                  font-markazi bg-gr3y p-4">
                      <img src={react} alt="react" className="h-16 w-auto" />
                      <p className="text-center">React.js</p>
                    </div>
                  </div>
                    <div className="max-w-xl" data-aos="fade-left" data-aos-delay="100">
                      <p className="text-gray-100 text-2xl"><span className='text-blue-300 font-markazi font-extrabold'>ReactJs</span> was the first web development framework I was introduced to. Instead of starting with standard HTML, I learned React due to the preference of the main developer in my school group project.</p>
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-8">
                    <div data-aos="fade-right" data-aos-delay="200">
                      <div className="h-[150px] w-[150px] rounded border-gray-700 shadow-lg border 
                                    text-lg flex flex-col items-center justify-center gap-2 
                                    font-markazi bg-gr3y p-4">
                        <img src={node} alt="node" className="h-16 w-auto" />
                        <p className="text-center">Node.js</p>
                      </div>
                    </div>
                    <div className="max-w-xl" data-aos="fade-left" data-aos-delay="200">
                      <p className="text-gray-100 text-2xl">I used <span className='text-blue-300 font-markazi font-extrabold'>Node.Js</span> with the Express framework for my thesis to create a REST API and implement WebSocket for real-time data exchange. This experience enhanced my skills in asynchronous programming and building scalable web applications.</p>
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-8">
                    <div data-aos="fade-right" data-aos-delay="300">
                      <div className="h-[150px] w-[150px] rounded border-gray-700 shadow-lg border 
                                    text-lg flex flex-col items-center justify-center gap-2 
                                    font-markazi bg-gr3y p-4">
                        <img src={mysql} alt="mysql" className="h-16 w-auto" />
                        <p className="text-center">MySQL</p>
                      </div>
                    </div>
                    <div className="max-w-xl" data-aos="fade-left" data-aos-delay="300">
                      <p className="text-gray-100 text-2xl">I used <span className='text-blue-300 font-markazi font-extrabold'>MySQL</span> for my thesis and backend freelance projects, deepening my understanding of API requests, SQL operations, and data integrity. This hands-on experience improved my skills in designing efficient queries and strengthening my backend development abilities.</p>
                    </div>
                  </div>

                  

                  <div className="flex flex-row items-center gap-8">
                    <div data-aos="fade-right" data-aos-delay="400">
                      <div className="h-[150px] w-[150px] rounded border-gray-700 shadow-lg border 
                                    text-lg flex flex-col items-center justify-center gap-2 
                                    font-markazi bg-gr3y p-4">
                        <img src={tailwind} alt="tailwind" className="h-16 w-auto" />
                        <p className="text-center">Tailwind CSS</p>
                      </div>
                    </div>
                    <div className="max-w-xl" data-aos="fade-left" data-aos-delay="400">
                      <p className="text-gray-100 text-2xl"><span className='text-blue-300 font-markazi font-extrabold'>Tailwind css</span> was the framework I used in both my thesis and freelance projects, which deepened my understanding of utility-first CSS. I’ve continued to build on this knowledge, continually improving my skills with it.</p>
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-8">
                    <div data-aos="fade-right" data-aos-delay="500">
                      <div className="h-[150px] w-[150px] rounded border-gray-700 shadow-lg border 
                                    text-lg flex flex-col items-center justify-center gap-2 
                                    font-markazi bg-gr3y p-4">
                        <img src={react} alt="mongodb" className="h-16 w-auto" />
                        <p className="text-center">MongoDB</p>
                      </div>
                    </div>
                    <div className="max-w-xl" data-aos="fade-left" data-aos-delay="500">
                      <p className="text-gray-100 text-2xl">I’m using <span className='text-blue-300 font-markazi font-extrabold'>MongoDB</span> for my freelance project, gaining hands-on experience with its NoSQL structure. I’m improving my skills in handling unstructured data, optimizing queries, and leveraging MongoDB's flexibility for scalable applications.</p>
                    </div>
                  </div>
                  
                </div>
                <div className="w-full flex-col items-center justify-center mt-16 hidden md:block">
                    <a href='#projects' className='upward2 flex flex-col items-center justify-center gap-4'>
                      <p className='blink text-center text-xl'>View My Past Projects</p> 
                      <FontAwesomeIcon 
                        icon={faAnglesDown} 
                        className='text-blu3 blink w-8 h-8'
                      />
                    </a>
                </div>
                
          </div>


          <div id="projects" className="flex flex-col items-center justify-center min-h-screen px-4 md:px-16 lg:px-24">
              <h1 className="text-5xl font-markazi text-gray-200 mb-12" data-aos="fade-down">Projects</h1>
              <div className="w-full max-w-7xl mx-auto">
                <Slider {...settings} className="project-slider">
                  {/* Template for all project cards - copy this structure for each project */}
                  <div className="px-4">
                    <div className="bg-gray-800/30 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 h-[300px] relative overflow-hidden bg-gray-900/50">
                          <img 
                            src={sultan} 
                            alt="sultan" 
                            className="absolute inset-0 w-full h-full object-contain p-8 hover:scale-110 transition-transform duration-500" 
                          />
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                          <h3 className="text-3xl font-bold text-blue-400 mb-4">RichSultan</h3>
                          <p className="text-gray-300 text-xl mb-6">Developed Offerwall websites with real-time chat using WebSockets, built with Node.js, the Fastify framework, and MongoDB as the databases</p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Node.js</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">MongoDB</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Fastify</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">WebSocket</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                

                  <div className="px-4">
                    <div className="bg-gray-800/30 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 h-[300px] relative overflow-hidden bg-gray-900/50">
                          <img 
                            src={jayds} 
                            alt="jayds" 
                            className="absolute inset-0 w-full h-full object-contain p-8 hover:scale-110 transition-transform duration-500" 
                          />
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                          <h3 className="text-3xl font-bold text-blue-400 mb-4">Jayds E-commerce</h3>
                          <p className="text-gray-300 text-xl mb-6">Developed e-commerce websites with real-time chat using WebSockets, built with Node.js, the Express framework, and MySQL as the databases for a thesis project.</p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Node.js</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">MySQL</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">WebSocket</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4">
                    <div className="bg-gray-800/30 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 h-[300px] relative overflow-hidden bg-gray-900/50">
                          <img 
                            src={asrai} 
                            alt="asrai" 
                            className="absolute inset-0 w-full h-full object-contain p-8 hover:scale-110 transition-transform duration-500" 
                          />
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                          <h3 className="text-3xl font-bold text-blue-400 mb-4">Asrai Dashboard</h3>
                          <p className="text-gray-300 text-xl mb-6">Created a frontend dashboard for a proxy website using HTML, CSS, and JavaScript. The project focused on building a user-friendly interface with interactive features and smooth navigation.</p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">HTML</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">CSS</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4">
                    <div className="bg-gray-800/30 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 h-[300px] relative overflow-hidden bg-gray-900/50">
                          <img 
                            src={communecards} 
                            alt="communecards" 
                            className="absolute inset-0 w-full h-full object-contain p-8 hover:scale-110 transition-transform duration-500" 
                          />
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                          <h3 className="text-3xl font-bold text-blue-400 mb-4">Communecards</h3>
                          <p className="text-gray-300 text-xl mb-6">My web development journey began as a Junior Frontend Developer at Communecards, a school project focused on an interactive quiz-based platform. Starting with HTML and CSS, I quickly transitioned to Tailwind.</p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Tailwind</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </Slider>
                 </div>


            </div>

          <div id="contact" className="flex flex-col items-center text-gray-300 justify-center min-h-screen px-4 md:px-16 lg:px-24">
            <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-16 lg:px-24">
              <h1 className="text-5xl font-markazi text-white mb-12" data-aos="fade-down">Contact</h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center justify-center gap-2">
                  <FontAwesomeIcon className='text-2xl text-gray-300' icon={faEnvelope} />
                  <p className="text-2xl">cardosarichard@gmail.com</p>
                </div>
                <div className="flex items-center justify-center">
                  <a href='_blank' className="text-2xl flex items-center ">
                    <img className='w-[50px] h-[50px]' src={github} alt='github' /> chardgrey
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <a href='_blank' className="text-2xl flex items-center gap-2">
                    <img className='w-[30px] h-[30px]' src={fb} alt='fb' /> chard.cardosa
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <a href='_blank' className="text-2xl flex items-center gap-2">
                    <img className='w-[30px] h-[30px]' src={ig} alt='ig' /> chardgrey
                  </a>
                </div>
              </div>
            </div>
          </div>

          </div>
   
  )
}

export default Home