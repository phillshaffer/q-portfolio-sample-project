import React from 'react';
import Button from '../Button/Button';
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
} from './Hero.css';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  imageSrc,
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
          <Button href={ctaLink} variant="primary">
            {ctaText}
          </Button>
        </div>
        {imageSrc && (
          <div className={heroImageContainer}>
            <img src={imageSrc} alt="Hero" className={heroImage} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
