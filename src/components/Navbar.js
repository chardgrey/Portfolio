import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Navbar({home, projects, expertise, contact}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-gr3y">
      <nav className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center h-16">
          <div className="flex items-center justify-center space-x-8 text-xl bg-inherit text-gray-300 font-markazi">
            <a href={home} className="px-4 py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blu3 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-gray-400 transition-colors duration-300">Home</a>
            <a href={expertise} className="px-4 py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blu3 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-gray-400 transition-colors duration-300">Expertise</a>
            <a href={projects} className="px-4 py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blu3 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-gray-400 transition-colors duration-300">Projects</a>
            <a href={contact} className="px-4 py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blu3 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-gray-400 transition-colors duration-300">Contact</a>
            <a href="/CardosaRichard CV.pdf" download className="px-4 py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blu3 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-gray-400 transition-colors duration-300">Resume <FontAwesomeIcon icon={faDownload} className='text-base pr-2'/></a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center h-16">
          <div className="text-xl font-markazi text-gray-300">ChardGrey</div>
          <button onClick={toggleMenu} className="text-gray-300 text-2xl">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gr3y border-t border-gray-700">
            <div className="flex flex-col space-y-2 py-4 text-lg text-gray-300 font-markazi">
              <a href={home} onClick={toggleMenu} className="px-4 py-2 hover:text-gray-400 transition-colors duration-300">Home</a>
              <a href={expertise} onClick={toggleMenu} className="px-4 py-2 hover:text-gray-400 transition-colors duration-300">Expertise</a>
              <a href={projects} onClick={toggleMenu} className="px-4 py-2 hover:text-gray-400 transition-colors duration-300">Projects</a>
              <a href={contact} onClick={toggleMenu} className="px-4 py-2 hover:text-gray-400 transition-colors duration-300">Contact</a>
              <a href="/CardosaRichard CV.pdf" download onClick={toggleMenu} className="px-4 py-2 hover:text-gray-400 transition-colors duration-300">Resume <FontAwesomeIcon icon={faDownload} className='text-base ml-2'/></a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar