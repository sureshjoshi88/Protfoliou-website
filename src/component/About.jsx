import React from 'react'
import suresh from "../images/suresh-style.jpeg"
const About = () => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-5 p-1 mt-15'>
        <div className='p-2 mt-3'>
            <p className='text-2xl font-semibold'>Hi! I’m Suresh joshi, a passionate web developer/student from Rns it solutions. I love creating clean and user-friendly websites and always enjoy learning new technologies.</p>
            <p className='pt-2 font-semibold'>I have skills in HTML, CSS, Botstrap, Tailwind-CSS, JavaScript, Git, GitHub, c++ and React. I have worked on several projects like to-do apps, portfolios, news-app, eccomerce and responsive websites.</p>
            <p className='pt-2 font-semibold'>Currently, I am studying in backend technologies and continuously working to improve my skills and knowledge.</p>
            <p className='pt-2 font-semibold'>In my free time, I enjoy reading tech blogs, playing sports, and exploring new coding challenges.</p>
            <p className='pt-2 font-semibold'>My goal is to become a full-stack developer and contribute to exciting projects that make a difference.</p>
        </div>
        <div className='p-2 mt-3'>
            <div className=''>
                <img  className='rounded-full h-100 w-100 object-cover' src={suresh} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
