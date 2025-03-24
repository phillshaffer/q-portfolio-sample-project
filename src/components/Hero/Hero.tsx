import React from 'react';
import {
  heroContainer,
  heroContent,
  heroTextContainer,
  heroImageContainer,
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImage,
  heroBackground,
  projectsGrid,
  projectCard,
  projectThumbnail,
  projectTitle,
  projectsSection,
  projectsHeading,
} from './Hero.css';

interface Project {
  id: string;
  title: string;
  thumbnailSrc: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc?: string;
  projects?: Project[];
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  projects = [],
}) => {
  return (
    <section className={heroContainer}>
      <div className={heroBackground}>
        {/* Optional: Add background elements or patterns here */}
      </div>
      <div className={heroContent}>
        <div className={heroTextContainer}>
          <h1 className={heroTitle}>{title}</h1>
          <h2 className={heroSubtitle}>{subtitle}</h2>
          <p className={heroDescription}>{description}</p>
        </div>
        {imageSrc && (
          <div className={heroImageContainer}>
            <img src={imageSrc} alt="Hero" className={heroImage} />
          </div>
        )}
      </div>
      
      {projects.length > 0 && (
        <div className={projectsSection}>
          <h3 className={projectsHeading}>Featured Projects</h3>
          <div className={projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={projectCard}>
                <img 
                  src={project.thumbnailSrc} 
                  alt={project.title} 
                  className={projectThumbnail} 
                />
                <h4 className={projectTitle}>{project.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
