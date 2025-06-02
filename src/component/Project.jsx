import React from 'react';

const Project = (props) => {


  const projects = [
  {
    name: "Pretics React",
    url: "https://github.com/sureshjoshi88/pretics-react",
    techStack: ["React.js tailwind-CSS"],
    description: "A React-based app showcasing reusable components and modern UI design."
  },
  {
    name: "Portfolio Website",
    url: "https://github.com/sureshjoshi88/Protfoliou-website",
    techStack: ["React.js"," tailwind-CSS"],
    description: "A personal portfolio site to display projects, skills, and contact information."
  },
  {
    name: "To-do List App",
    url: "https://github.com/sureshjoshi88/todo-list-project",
    techStack: [" HTML"," CSS", " Botstrap", " JavaScript"],
    description: "A to-do list app using DOM manipulation and local storage to manage tasks."
  },
  {
    name: "E-commerce Web UI",
    url: "https://github.com/sureshjoshi88/ecommerce-web",
    techStack: ["HTML ", "CSS ","javascript" ],
    description: "A responsive e-commerce frontend layout with product display sections."
  },
  {
    name: "News App",
    url: "https://github.com/sureshjoshi88/Newsapp",
    techStack: ["React.js", " API Integration"],
    description: "A news fetching application using React and a news API to display headlines by category."
  },
  {
    name: "Weather App",
    url: "https://github.com/sureshjoshi88/weather-app",
    techStack: ["HTML "," CSS"," javascipt", " API Integration"],
    description: "A weather forecasting app using React and OpenWeatherMap API with real-time updates."
  },
  {
    name: "Text Utilities Tool",
    url: "https://github.com/sureshjoshi88/my-first-for-react-in-textutils",
    techStack: ["React.js"," Botstrap"],
    description: "A text analysis tool built with React that can count words, convert case, and more."
  },
  {
    name: "Hotel Website",
    url: "https://github.com/sureshjoshi88/hotel-web",
    techStack: ["HTML", " CSS" ," Botstrap"],
    description: "A stylish hotel website design with sections for rooms, bookings, and contact info."
  },
  {
    name: "Kaira Web UI",
    url: "https://github.com/sureshjoshi88/kaira-web",
    techStack: ["HTML ", "CSS"," Botstrap"],
    description: "A landing page for a modern company, highlighting services and brand identity."
  },
  {
    name: "Education Website",
    url: "https://github.com/sureshjoshi88/education-web",
    techStack: ["HTML ", " CSS" ," Botstrap"],
    description: "An educational website design focusing on learning resources and course info."
  },
  {
    name: "React Starter App",
    url: "https://github.com/sureshjoshi88/my-react-app",
    techStack: ["React.js"],
    description: "A starter React project setup, useful for testing components and experimenting with features."
  }
];


  return (
  <div className='mt-16'>
      <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4 text-center'>My Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {projects.map((project, index) => (
          <div key={index} className={`shadow p-4 rounded ${props.mode==="light"?'bg-blue-300':'bgcolor'}`}>
            <h2  className={`text-xl font-semibold`}>{project.name}</h2>
            <p className=' my-2'>{project.techStack}</p>
            <p className=' my-2'>{project.description}</p>
            <a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              
              className='text-blue-600 underline cursor-pointer'
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
