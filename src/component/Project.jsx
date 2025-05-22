import React from 'react';

const Project = () => {
  const projects = [
    {
      title: 'To-do List App',
      description: 'A simple to-do app using local storage crud system.',
      github: 'https://github.com/sureshjoshi88/todo-list-project/tree/main/todolist',
    },
    {
      title: 'Portfolio Website',
      description: 'This website is built using React and Tailwind CSS.',
      github: 'https://github.com/sureshjoshi88/Protfoliou-website',
    },
  ];

  return (
  <div className='mt-16'>
      <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>My Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {projects.map((project, index) => (
          <div key={index} className='shadow p-4 rounded bg-white'>
            <h2 className='text-xl font-semibold'>{project.title}</h2>
            <p className='text-gray-700 my-2'>{project.description}</p>
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 underline'
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Project;
