import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-primary text-neutral">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="text-accent font-display text-lg tracking-wider mb-4 block">
              BudEksperts
            </span>
            <h1 className="font-display text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-none">
              Budujemy
              <span className="text-accent block mt-2">przyszłość</span>
            </h1>
            <p className="text-neutral/80 text-xl mb-12 max-w-lg leading-relaxed">
              Tworzymy przestrzenie, które inspirują. Łączymy nowoczesne technologie z rzemieślniczą precyzją.
            </p>
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <a
                href="#contact"
                className="bg-accent hover:bg-accent-dark text-primary px-10 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:-translate-y-1"
              >
                Rozpocznij projekt
              </a>
              <a
                href="#projects"
                className="border-2 border-neutral/20 hover:border-accent text-neutral px-10 py-4 rounded-full font-bold transition-all duration-300 hover:bg-accent/10"
              >
                Zobacz realizacje
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-40 -right-40 w-96 h-96">
              <div className="w-full h-full bg-accent/20 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96">
              <div className="w-full h-full bg-accent/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
                alt="Nowoczesna architektura"
                className="w-full aspect-square object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown className="w-10 h-10 text-accent" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,183,3,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,183,3,0.1),transparent_70%)]"></div>
    </section>
  );
};

export default Hero;