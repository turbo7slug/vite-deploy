import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiDjango, SiNextdotjs, SiMongodb, SiMysql } from 'react-icons/si';
import Navbar from '../components/Navbar';
import Tooltip from '../components/Tooltip';

const Home = () => {
  const [tooltip, setTooltip] = useState(null);

  const icons = [
    { icon: <FaReact className="text-4xl text-blue-500 m-2" />, name: 'React' },
    { icon: <FaNodeJs className="text-4xl text-green-500 m-2" />, name: 'Node.js' },
    { icon: <SiVite className="text-4xl text-purple-500 m-2" />, name: 'Vite' },
    { icon: <FaHtml5 className="text-4xl text-orange-500 m-2" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-4xl text-blue-500 m-2" />, name: 'CSS3' },
    { icon: <SiTailwindcss className="text-4xl text-teal-500 m-2" />, name: 'Tailwind CSS' },
    { icon: <FaPython className="text-4xl text-blue-500 m-2" />, name: 'Python' },
    { icon: <SiDjango className="text-4xl text-green-700 m-2" />, name: 'Django' },
    { icon: <SiNextdotjs className="text-4xl text-black m-2" />, name: 'Next.js' },
    { icon: <SiMongodb className="text-4xl text-green-500 m-2" />, name: 'MongoDB' },
    { icon: <SiMysql className="text-4xl text-blue-500 m-2" />, name: 'MySQL' },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-white px-4">
        <main className="mt-0 grid grid-cols-1 gap-2 w-full max-w-3xl lg:grid-cols-3 lg:gap-2 lg:grid-rows-[repeat(12, minmax(60px, 1fr))] lg:w-[30cm] lg:h-[17cm]">
          {/* Who Am I Card */}
          <div className="bg-gray-800 rounded-lg p-4 lg:col-span-2 lg:row-span-3">
            <h2 className="text-xl font-semibold mb-2">Who Am I?</h2>
            <p className="text-gray-300">
            I’m a Full Stack Developer and student who loves building software solutions. I enjoy working on new challenges and am always eager to learn and improve my skills. My focus is on creating practical and effective applications that make a difference.
            </p>
          </div>

          {/* Quote Image Card */}
          <div className="hidden lg:block lg:col-span-1 lg:row-span-5">
            <img 
              src="https://i.ibb.co/N7sZ8fK/aurora2.jpg" 
              alt="Inspirational" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Student & Full Stack Developer Card */}
          <div className="bg-sky-900 rounded-lg p-4 flex flex-col items-center justify-center lg:col-span-1 lg:row-span-2">
            <h2 className="text-xl font-semibold text-white text-center">Student & Full Stack Developer</h2>
          </div>

          {/* GitHub Profile Card */}
          <div className="bg-gray-800 rounded-lg p-4 text-center flex flex-col items-center justify-center lg:col-span-1 lg:row-span-4">
            <img 
              src="https://avatars.githubusercontent.com/u/103031231?s=400&u=b1b3ca94bd9e9661f19657edd3cbc925776c2d7b&v=4" 
              alt="Profile" 
              className="w-20 h-20 mx-auto rounded-full mb-2"
            />
            <h2 className="text-xl font-semibold">YUSUF</h2>
          </div>

          {/* Technologies Card */}
          <div className="bg-gray-800 rounded-lg p-4 lg:col-span-1 lg:row-span-7">
            <h2 className="text-xl font-semibold mb-2">Technologies I have worked with</h2>
            <div className="flex justify-around mt-2 flex-wrap">
              {icons.map((tech, index) => (
                <div 
                  key={index} 
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setTooltip(tech.name)}
                  onMouseLeave={() => setTooltip(null)}
                >
                  {tech.icon}
                  {tooltip === tech.name && <Tooltip text={tech.name} />}
                </div>
              ))}
            </div>
          </div>

          {/* Quote Text Card */}
          <div className="bg-sky-900 rounded-lg p-4 flex flex-col items-center justify-center lg:col-span-1 lg:row-span-2">
            <h2 className="text-xl font-semibold text-white text-center">"The only way to do great work is to love what you do."</h2>
          </div>

          {/* Education Card */}
          <div className="bg-gray-800 rounded-lg p-4 lg:col-span-2 lg:row-span-5">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>B.tech in Mechanical (Smart Manufacturing) IIIT Chennai, Expected 2025</li>
              <li>12th MV Convent Prayagraj (CBSE) 88%, 2020</li>
              <li>10th St.Joseph's College Prayagraj (ICSE) 94%, 2018</li>
            </ul>
          </div>
        </main>
        
        {/* <footer className="mt-12 text-center">
          <p className="text-gray-500">&copy; 2024 Yusuf. All rights reserved.</p>
        </footer> */}
      </div>
    </div>
  );
};

export default Home;
