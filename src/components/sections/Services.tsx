import React from 'react';
import { Home, Hammer, Building2, Paintbrush, Pipette as Pipe, ClipboardCheck } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { services } from '../../data/services';

const iconMap: Record<string, React.ReactNode> = {
  home: <Home className="h-10 w-10" />,
  hammer: <Hammer className="h-10 w-10" />,
  'building-2': <Building2 className="h-10 w-10" />,
  paintbrush: <Paintbrush className="h-10 w-10" />,
  pipe: <Pipe className="h-10 w-10" />,
  'clipboard-check': <ClipboardCheck className="h-10 w-10" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <SectionTitle 
          subtitle="Nasze usługi" 
          title="Kompleksowe rozwiązania budowlane" 
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-50 rounded-lg p-8 shadow-md border-b-4 border-primary hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={service.id * 100}
            >
              <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Potrzebujesz indywidualnej wyceny?</h3>
              <p className="text-primary-100 mb-6 text-white">
                Skontaktuj się z nami, aby otrzymać bezpłatną wycenę Twojego projektu. 
                Nasi eksperci są gotowi odpowiedzieć na wszystkie pytania.
              </p>
              <div>
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-primary hover:bg-gray-100 py-3 px-6 rounded-md font-medium transition-colors duration-300"
                >
                  Darmowa wycena
                </a>
              </div>
            </div>
            <div className="h-64 lg:h-auto relative">
              <img 
                src="https://images.pexels.com/photos/8961001/pexels-photo-8961001.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Wycena projektu" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;