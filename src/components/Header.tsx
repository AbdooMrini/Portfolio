import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Mrini Abdo
          </span>
          
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-sm p-4 flex-col space-y-4 md:relative md:flex md:flex-row md:space-y-0 md:space-x-8 md:bg-transparent md:p-0 md:top-0`}>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">À propos</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projets</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Compétences</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-64 left-0 right-0 justify-center space-x-4 bg-gray-900/95 backdrop-blur-sm p-4 md:relative md:flex md:top-0 md:bg-transparent md:p-0`}>
            <a href="https://t.me/MBW9_oFFc" className="text-gray-300 hover:text-blue-400 transition-colors" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13"/>
                <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </a>
            <a href="https://wa.me/212677323737" className="text-gray-300 hover:text-blue-400 transition-colors" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>
          </div>

          <button 
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}