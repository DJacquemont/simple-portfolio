import { Github, Linkedin, Mail } from 'lucide-react';  // Using lucide-react instead of heroicons

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-left px-6 pt-6">
      {/* Main Section */}
      <div className="flex items-center justify-start space-x-6 p-6 bg-gray-800 rounded-xl shadow-lg max-w-5xl mx-auto mt-6 mb-4">
        {/* Image */}
        <div className="w-1/3">
          <img
            src="/images/photo_pro.jpg"
            alt="Dimitri's photo"
            className="w-full h-auto rounded-full shadow-md"
          />
        </div>

        {/* Text */}
        <div className="w-2/3">
          <h1 className="text-4xl font-semibold text-white mb-2">Hi There!</h1>
          <h1 className="text-4xl font-semibold text-white mb-4">I'm Dimitri Jacquemont</h1>
          <p className="text-lg text-gray-300 mt-6">
            Passionate about Software, Robotics, and Engineering, I am driven by innovation and hands-on problem-solving.
          </p>
        </div>
      </div>

      {/* About Section + "Find me on" */}
      <div className="flex justify-between max-w-5xl mx-auto pt-6">
        {/* About Section */}
        <div className="w-3/4 bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">A Little More About Me</h2>
          <p className="text-base text-gray-300 mb-3">
            I specialize in software development for robotics, with a strong passion for systems and hands-on problem-solving. My academic journey at <a href="https://www.epfl.ch/en/" className="text-blue-400 hover:underline">EPFL</a>, <a href="https://www.dtu.dk/english/" className="text-blue-400 hover:underline">DTU</a> and <a href="https://www.berkeley.edu/" className="text-blue-400 hover:underline">UC Berkeley</a> led me to focus on robotics, where I've worked on various exciting projects.
          </p>
          <p className="text-base text-gray-300 mb-3">
            I had the opportunity to intern at <a href="https://www.tethys-robotics.ch/" className="text-blue-400 hover:underline">Tethys Robotics</a>, designing and programming an ESC for Unmanned Underwater Vehicles, and also at <a href="https://www.sevensense.ai/" className="text-blue-400 hover:underline">Sevensense</a> now part of <a href="https://global.abb/group/en" className="text-blue-400 hover:underline">ABB</a>, working on state-of-the-art navigation and localization solutions for autonomous mobile robots.
          </p>
          <p className="text-base text-gray-300 mb-3">
            Driven by a passion for robotics, I'm eager to continue advancing in this exciting field.
          </p>
        </div>

        {/* Find Me On Section */}
        <div className="w-1/5 bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Find me on</h2>
          <div className="flex flex-col space-y-4 items-center"> {/* Adjust space between icons */}
            <a href="https://github.com/DJacquemont" className="text-blue-400 hover:text-blue-300 flex flex-col items-center">
              <Github className="h-8 w-8" />  {/* Adjust icon size */}
              <span className="mt-2">GitHub</span> {/* Center text below icon */}
            </a>
            <a href="https://www.linkedin.com/in/dimitri-jacquemont/" className="text-blue-400 hover:text-blue-300 flex flex-col items-center">
              <Linkedin className="h-8 w-8" />
              <span className="mt-2">LinkedIn</span>
            </a>
            <a href="mailto:jacquemont.dim@gmail.com" className="text-blue-400 hover:text-blue-300 flex flex-col items-center">
              <Mail className="h-8 w-8" />
              <span className="mt-2">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
