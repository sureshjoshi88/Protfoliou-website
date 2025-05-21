import React from 'react'
import suresh from "../images/suresh-style.jpeg"
const About = () => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-5 p-1 mt-5'>
        <div className='p-2'>
            <p>Hi! I’m Suresh joshi, a passionate web developer/student from Rns it solutions. I love creating clean and user-friendly websites and always enjoy learning new technologies.</p>
            <p>I have skills in HTML, CSS, Botstrap, Tailwind-CSS, JavaScript, Git, GitHub, c++ and React. I have worked on several projects like to-do apps, portfolios, news-app, eccomerce and responsive websites.</p>
            <p>Currently, I am studying in backend technologies and continuously working to improve my skills and knowledge.</p>
            <p>In my free time, I enjoy reading tech blogs, playing sports, and exploring new coding challenges.</p>
            <p>My goal is to become a full-stack developer and contribute to exciting projects that make a difference.</p>
        </div>
        <div className='p-2'>
            <div>
                <img  src={suresh} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
