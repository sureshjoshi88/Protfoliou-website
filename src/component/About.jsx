import React from 'react'
import suresh from "../images/suresh-style.jpeg"
import { memo } from 'react'
const About = () => {
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-5 p-1 mt-17'>
        <div className='p-2 mt-5'>
            <p className='text-2xl font-semibold'>Hi! I’m Suresh joshi, a passionate web developer I love creating clean and user-friendly websites and always enjoy learning new technologies.</p>
            <p className='pt-2 font-semibold'>I have skills in HTML, CSS, Botstrap, Tailwind-CSS, JavaScript, Git, GitHub, c++, React Node.Js MongoDB and Express.Js. I have worked on several projects like to-do apps, portfolios, news-app, eccomerce and responsive websites.</p>
            <p className='pt-2 font-semibold'>Currently, I am studying in backend technologies and continuously working to improve my skills and knowledge.</p>
            <p className='pt-2 font-semibold'>In my free time, I enjoy reading tech blogs, playing sports, and exploring new coding challenges.</p>
            <p className='pt-2 font-semibold'>My goal is to become a full-stack developer and contribute to exciting projects that make a difference.</p>
        </div>
        <div className='p-2 mt-2'>
            <div className=' flex justify-center'>
                <img  className='rounded-full h-100 w-100 object-cover' src={suresh} alt="" />
            </div>
        </div>
      </div>

      <div>
           <section className=" py-15 px-5 md:px-20" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold  mb-6">About Me</h2>

        {/* Skills Summary */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold  mb-2">Skills Summary</h3>
          <p className=" leading-relaxed">
            I am a passionate and self-motivated Frontend Developer with hands-on experience in building responsive and user-friendly websites.
            My technical skill set includes <span className="font-semibold">HTML, CSS, Bootstrap, Tailwind CSS, and JavaScript</span>, along with a solid understanding of <span className="font-semibold">React.js</span> for building dynamic single-page applications.
            <br /><br />
            I focus on writing clean, optimized, and reusable code, and I’m familiar with version control systems like <span className="font-semibold">Git and GitHub</span>. My strengths lie in problem-solving, continuous learning, and effective communication, which help me adapt quickly and contribute efficiently in team environments.
          </p>
        </div>

        {/* My Journey */}
        <div>
          <h3 className="text-2xl font-semibold  mb-2">My Learning Journey</h3>
          <p className=" leading-relaxed">
            My journey into web development started with curiosity and a deep desire to build something of my own on the internet.
            I began with the basics of <span className="font-semibold">HTML and CSS</span>, moved on to <span className="font-semibold">JavaScript</span>, and soon started learning modern tools like <span className="font-semibold">Bootstrap</span> and <span className="font-semibold">Tailwind CSS</span>.
            <br /><br />
            Learning <span className="font-semibold">React.js</span> was a game-changer for me, helping me understand how modern web apps are developed.
            Even without a formal technical background, I stayed consistent, practiced daily, and built projects to apply what I learned.
            Now, I’m exploring backend technologies to become a full-stack developer, with the aim of contributing to real-world projects and constantly evolving as a developer.
          </p>
        </div>
      </div>
    </section>
      </div>
    </div>
  )
}

export default memo(About)
