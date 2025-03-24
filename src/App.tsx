import React from 'react';
import Hero from './components/Hero/Hero';

const App: React.FC = () => {
  // Sample project data
  const projects = [
    {
      id: 'project1',
      title: 'E-commerce Dashboard',
      thumbnailSrc: 'https://via.placeholder.com/600x400/4a90e2/ffffff?text=E-commerce+Dashboard',
    },
    {
      id: 'project2',
      title: 'Travel App',
      thumbnailSrc: 'https://via.placeholder.com/600x400/50c878/ffffff?text=Travel+App',
    },
    {
      id: 'project3',
      title: 'Finance Tracker',
      thumbnailSrc: 'https://via.placeholder.com/600x400/f08080/ffffff?text=Finance+Tracker',
    },
    {
      id: 'project4',
      title: 'Social Media Platform',
      thumbnailSrc: 'https://via.placeholder.com/600x400/9370db/ffffff?text=Social+Media',
    },
  ];

  return (
    <div>
      <Hero 
        title="Hello, I'm Your Name"
        subtitle="Frontend Developer & UI/UX Designer"
        description="I build modern, responsive web applications with React, TypeScript, and cutting-edge CSS solutions."
        projects={projects}
      />
    </div>
  );
};

export default App;
