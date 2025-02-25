import { Github, Linkedin, Mail } from 'lucide-react';  // Using lucide-react instead of heroicons

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-left px-6 pt-6">
      {/* Main Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start space-y-6 md:space-y-0 md:space-x-8 p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg max-w-5xl mx-auto mt-6 mb-8 transition-all duration-300 hover:shadow-xl">
          {/* Image */}
          <div className="w-full md:w-1/3 max-w-[250px]">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 transform -translate-x-2 translate-y-2"></div>
              <img
                src="/images/photo_pro.jpg"
                alt="Dimitri's photo"
                className="relative w-full h-auto rounded-full shadow-md border-2 border-blue-400/30"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-2 font-display">👋 Hi There!</h1>
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4 font-display">I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 font-bold">Dimitri Jacquemont</span></h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Passionate about <span className="text-blue-300 font-medium">Software, Robotics, and Engineering</span>, I am driven by <span className="text-blue-300 font-medium">innovation</span> and <span className="text-blue-300 font-medium">hands-on problem-solving</span>.
            </p>
          </div>
        </div>

      {/* About Section + "Find me on" */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 max-w-5xl mx-auto pt-4">
          {/* About Section */}
          <div className="w-full lg:w-3/4 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-4 font-display pb-2">A Little More About Me 🤖</h2>
            <p className="text-base text-gray-300 mb-4 leading-relaxed">
              I specialize in <span className="text-blue-300 font-medium">software development for robotics</span>, with a strong passion for <span className="text-blue-300 font-medium">systems</span> and <span className="text-blue-300 font-medium">hands-on problem-solving</span>. My academic journey at <a href="https://www.epfl.ch/en/" className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">EPFL</a>, <a href="https://www.dtu.dk/english/" className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">DTU</a> and <a href="https://www.berkeley.edu/" className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">UC Berkeley</a> led me to focus on robotics, where I've worked on various exciting projects.
            </p>
            <p className="text-base text-gray-300 mb-4 leading-relaxed">
              I had the opportunity to intern at <a href="https://www.tethys-robotics.ch/" className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">Tethys Robotics</a>, designing and programming an ESC for Unmanned Underwater Vehicles, and also at <a href="https://www.sevensense.ai/" className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">Sevensense</a> now part of <a href="https://global.abb/group/en" className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">ABB</a>, working on state-of-the-art navigation and localization solutions for autonomous mobile robots.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              Driven by a <span className="text-blue-300 font-medium">passion for robotics</span>, I'm eager to continue advancing in this exciting field.
            </p>
          </div>

        {/* Find Me On Section */}
        <div className="w-full lg:w-1/4 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-6 font-display pb-2 w-full text-center">Find me on</h2>
            <div className="flex flex-col space-y-6 items-center w-full">
              <a href="https://github.com/DJacquemont" className="w-full text-blue-400 hover:text-blue-300 hover:bg-gray-700/50 flex items-center justify-center p-3 rounded-lg transition-all duration-200 group">
                <Github className="h-8 w-8 mr-3" />
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/dimitri-jacquemont/" className="w-full text-blue-400 hover:text-blue-300 hover:bg-gray-700/50 flex items-center justify-center p-3 rounded-lg transition-all duration-200 group">
                <Linkedin className="h-8 w-8 mr-3" />
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">LinkedIn</span>
              </a>
              <a href="mailto:jacquemont.dim@gmail.com" className="w-full text-blue-400 hover:text-blue-300 hover:bg-gray-700/50 flex items-center justify-center p-3 rounded-lg transition-all duration-200 group">
                <Mail className="h-8 w-8 mr-3" />
                <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">Email</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}
