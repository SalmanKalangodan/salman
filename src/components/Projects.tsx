import React from 'react';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
  { title: "ShoePro", description: "An e-commerce website for shoes", image: "path_to_shoepro_image" },
  { title: "DriveMate", description: "A service-providing website that connects automobile services with regular people", image: "path_to_drivemate_image" },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <p className="text-center text-gray-600">Things I've built so far</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4 lg:px-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg max-w-xs mx-auto">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-bold mt-2">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="mt-4 text-gray-600">
                <span className="font-bold">Tech stack:</span> HTML, JavaScript, SASS, React
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="flex items-center text-blue-500 hover:underline">
                  <FaExternalLinkAlt className="mr-2" /> Live Preview
                </a>
                <a href="#" className="flex items-center text-blue-500 hover:underline">
                  <FaCode className="mr-2" /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
