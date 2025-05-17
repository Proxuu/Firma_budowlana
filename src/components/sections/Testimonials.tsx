import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 8000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      <Container className="relative z-10">
        <SectionTitle 
          subtitle="Opinie klientów" 
          title="Co mówią o nas nasi klienci" 
          centered={true}
          className="text-white"
        />
        
        <div className="max-w-4xl mx-auto mt-12 relative">
          <div 
            className="bg-gray-800 rounded-xl p-8 md:p-12 shadow-xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <Quote className="h-20 w-20 text-primary opacity-20" />
            </div>
            
            <div className="mb-6 md:flex items-center">
              <div className="md:mr-6 mb-4 md:mb-0 flex justify-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary">
                  <img 
                    src={testimonials[activeIndex].avatarUrl} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">{testimonials[activeIndex].name}</h3>
                <p className="text-gray-400">{testimonials[activeIndex].role}</p>
              </div>
            </div>
            
            <div className="min-h-[120px]">
              <p className="text-lg text-gray-300 italic">
                "{testimonials[activeIndex].content}"
              </p>
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <div className="flex space-x-1">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Przejdź do opinii ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button 
                  className="p-2 rounded-full bg-gray-700 hover:bg-primary text-white transition-colors"
                  onClick={prevTestimonial}
                  aria-label="Poprzednia opinia"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  className="p-2 rounded-full bg-gray-700 hover:bg-primary text-white transition-colors"
                  onClick={nextTestimonial}
                  aria-label="Następna opinia"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;