import React from 'react';
import Hero from './components/Hero/Hero';

const App: React.FC = () => {
  return (
    <div>
      <Hero 
        title="Hello, I'm Your Name"
        subtitle="Frontend Developer & UI/UX Designer"
        description="I build modern, responsive web applications with React, TypeScript, and cutting-edge CSS solutions."
        ctaText="View My Work"
        ctaLink="#projects"
      />
    </div>
  );
};

export default App;
