import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h3 className="text-accent text-lg font-semibold mb-2">{subtitle}</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      <div className={`h-1 w-16 bg-primary mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;