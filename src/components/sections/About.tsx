import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Building2, CheckCircle2 } from 'lucide-react';
import Container from '../ui/Container';

const statItems = [
  {
    value: "15+",
    label: "Lat doświadczenia",
    icon: <Building2 className="h-8 w-8 text-accent" />,
  },
  {
    value: "200+",
    label: "Projektów",
    icon: <CheckCircle2 className="h-8 w-8 text-accent" />,
  },
  {
    value: "45+",
    label: "Ekspertów",
    icon: <Users className="h-8 w-8 text-accent" />,
  },
  {
    value: "12",
    label: "Nagród",
    icon: <Award className="h-8 w-8 text-accent" />,
  },
];

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-32 bg-primary text-neutral" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg"
                alt="Zespół BudEksperts"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl">
              <div className="text-primary text-center">
                <div className="text-4xl font-bold font-display">15+</div>
                <div className="text-sm font-medium mt-1">lat doświadczenia</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <span className="text-accent font-display text-lg tracking-wider mb-4 block">
              O nas
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8">
              Innowacyjne podejście do budownictwa
            </h2>
            <p className="text-neutral/80 text-lg mb-8 leading-relaxed">
              Od 15 lat przekształcamy wizje w rzeczywistość, łącząc nowoczesne technologie z rzemieślniczą precyzją. Nasz zespół ekspertów specjalizuje się w tworzeniu wyjątkowych przestrzeni, które wyprzedzają trendy i spełniają najwyższe standardy jakości.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-neutral/80">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>Certyfikowani specjaliści i nowoczesny sprzęt</p>
              </div>
              <div className="flex items-center space-x-4 text-neutral/80">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>Innowacyjne rozwiązania i materiały premium</p>
              </div>
              <div className="flex items-center space-x-4 text-neutral/80">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>Kompleksowa realizacja i wsparcie techniczne</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24"
        >
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary-light rounded-2xl p-8 text-center border border-neutral/10"
            >
              {item.icon}
              <div className="mt-4 font-display text-3xl font-bold">{item.value}</div>
              <div className="mt-2 text-neutral/60">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default About;