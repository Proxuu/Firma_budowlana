import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent">Bud</span>Eksperts
            </h3>
            <p className="text-gray-400 mb-4">
              Kompleksowe usługi budowlane dla klientów indywidualnych i firm. Realizujemy projekty na terenie całej Polski, gwarantując najwyższą jakość wykonania i terminowość.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Przydatne linki</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Strona główna</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">O nas</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Usługi</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Realizacje</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Opinie klientów</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Usługi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Budowa domów jednorodzinnych</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Remonty i modernizacje</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Projekty komercyjne</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Wykończenia wnętrz</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Instalacje</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Doradztwo budowlane</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">ul. Budowlana 123, 00-001 Warszawa</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-accent" />
                <a href="tel:+48123456789" className="text-gray-400 hover:text-white transition-colors">+48 123 456 789</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-accent" />
                <a href="mailto:kontakt@budeksperts.pl" className="text-gray-400 hover:text-white transition-colors">kontakt@budeksperts.pl</a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>Pon-Pt: 8:00 - 17:00</p>
                  <p>Sob: 9:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} BudEksperts. Wszelkie prawa zastrzeżone.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;