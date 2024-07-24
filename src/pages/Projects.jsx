import React from 'react';
import { FaLink } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import mesaverde from '../assets/mesaverde.png'

const projects = [
  {
    title: 'Mesaverde Real Estate Website',
    description: 'A real estate platform with user authentication, allowing users to create and manage property listings for sale or rent. Users can view and search through listings, apply filters, and interact with the platform to find or list properties easily.',
    image: 'https://i.ibb.co/ZVVtq2y/mesaverde.png/300x200', 
    technologies: ['Node.js', 'React', 'JavaScript', 'Tailwind', 'MongoDb'],
    demoLink: 'https://mesa-verde-real-estate.vercel.app/',
  },
  {
    title: 'Blog App',
    description: '',
    image: 'https://via.placeholder.com/300x200', 
    technologies: ['React', 'AppWrite', 'Tailwind'],
    demoLink: '#',
  },
  {
    title: 'Project Coming Soon',
    description: 'Details about this project will be revealed soon.',
    image: 'https://via.placeholder.com/300x200',
    technologies: [],
    demoLink: '#',
  },
];

const Projects = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white p-4">
        <main className="space-y-6 w-full max-w-5xl">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden md:flex md:items-center">
              <div className="md:w-1/2">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover md:h-full" />
              </div>
              <div className="p-6 md:w-1/2">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-gray-300 text-sm px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <FaLink className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Projects;
