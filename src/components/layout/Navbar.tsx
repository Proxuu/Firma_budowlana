import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const navItems = [
  { name: 'Strona główna', href: '#home' },
  { name: 'O nas', href: '#about' },
  { name: 'Usługi', href: '#services' },
  { name: 'Realizacje', href: '#projects' },
  { name: 'Opinie', href: '#testimonials' },
  { name: 'Kontakt', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold text-primary">
            <span className="text-accent">Bud</span>Eksperts
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              {item.name}
            </a>
          ))}
          <Button 
            variant="primary" 
            size="sm" 
            className="ml-4"
            onClick={() => window.location.href = '#contact'}
          >
            Darmowa wycena
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className={`inline-flex items-center justify-center p-2 rounded-md ${
              scrolled ? 'text-gray-700' : 'text-gray-700'
            } hover:text-primary focus:outline-none`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Otwórz menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        } bg-white shadow-lg absolute w-full`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center text-gray-700 hover:bg-gray-100 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
              <ChevronRight className="ml-auto h-4 w-4" />
            </a>
          ))}
          <div className="pt-2 pb-2">
            <Button 
              variant="primary" 
              size="sm" 
              className="w-full"
              onClick={() => {
                window.location.href = '#contact';
                setIsOpen(false);
              }}
            >
              Darmowa wycena
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;