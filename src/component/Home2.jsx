import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import suresh from '../images/suresh.jpg'


const Home2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-6">
      {/* Profile Image */}
      <img
        src={suresh}
        alt="Suresh Joshi"
        className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
      />

      {/* Intro Text */}
      <h1 className="text-3xl font-bold mb-2">My name is Suresh Joshi</h1>
      <p className="text-xl text-gray-300 mb-4">I am a Full Stack Developer</p>

      {/* Short Bio */}
      <p className="text-center max-w-xl text-gray-400 mb-6">
        I build modern web applications using React, Node.js, and MongoDB. I'm passionate about coding and love solving real-world problems with efficient solutions.
      </p>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <p className="text-gray-300">
          HTML | CSS | JavaScript | React | Node.js | Express | MongoDB | Git | GitHub
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mb-6 text-2xl">
        <a
          href="https://github.com/sureshjoshi88"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/suresh-joshi-17a886314"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:joshisuresh123u@gmail.com"
          className="hover:text-red-400"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-blue-600 px-5 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          View Resume
        </a>
        <a
          href="#projects"
          className="bg-gray-700 px-5 py-2 rounded-xl hover:bg-gray-800 transition"
        >
          View Projects
        </a>
      </div>
    </div>
  );
};

export default Home2;
