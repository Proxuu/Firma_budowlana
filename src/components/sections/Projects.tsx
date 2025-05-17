import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/projects';

const CATEGORIES = ['wszystkie', ...Array.from(new Set(projects.map(p => p.category)))];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('wszystkie');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'wszystkie' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle 
          subtitle="Nasze realizacje" 
          title="Projekty, które budują zaufanie" 
          centered={true}
        />
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProject === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm font-medium mb-1 text-gray-200">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)} | {project.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`text-sm text-gray-200 transition-all duration-300 max-h-0 overflow-hidden ${
                    hoveredProject === project.id ? 'max-h-20 opacity-100' : 'opacity-0'
                  }`}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA block */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Masz projekt, który chcesz z nami zrealizować?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-md font-medium transition-colors duration-300"
          >
            Skontaktuj się z nami
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;