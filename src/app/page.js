import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-left px-6 pt-6">
      <section className="max-w-5xl mx-auto mt-6 mb-8">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="w-full md:w-1/3 max-w-[250px] relative">
            <Image
              src="/images/photo_home.jpg"
              alt="Dimitri's photo"
              width={250}
              height={250}
              className="w-full h-auto rounded-full shadow-md"
            />
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-semibold text-white mb-2 font-display">
              <span className="inline-block animate-[wave_2.5s_ease_infinite] origin-[70%_70%]">👋</span> 
              {" "}<span className="inline-block animate-[fadeIn_0.8s_ease_forwards]">Hi There!</span>
              {" "}I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 font-bold">Dimitri</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mt-10">
              Passionate about <span className="text-blue-300 font-medium">Software, Robotics, and Engineering</span>, I am driven by <span className="text-blue-300 font-medium">innovation</span> and <span className="text-blue-300 font-medium">hands-on problem-solving</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-between gap-6 max-w-5xl mx-auto pt-4 pb-12">
        <div className="w-full lg:w-3/4 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-4 font-display pb-2">A Little More About Me 🤖</h2>
          <p className="text-base text-gray-300 leading-relaxed">
            I specialize in <span className="text-blue-300 font-medium">software development for robotics</span>, with a strong passion for <span className="text-blue-300 font-medium">systems</span> and <span className="text-blue-300 font-medium">hands-on problem-solving</span>. My academic journey at <ExternalLink href="https://www.epfl.ch/en/" label="EPFL" />, <ExternalLink href="https://www.dtu.dk/english/" label="DTU" />, and <ExternalLink href="https://www.berkeley.edu/" label="UC Berkeley" /> led me to focus on robotics, where I've worked on various exciting projects.
          </p>
          <p className="text-base text-gray-300 mt-4 leading-relaxed">
          I interned at <ExternalLink href="https://www.tethys-robotics.ch/" label="Tethys Robotics" />, designing and programming an ESC for Unmanned Underwater Vehicles. I also interned at <ExternalLink href="https://www.sevensense.ai/" label="Sevensense" />, now part of <ExternalLink href="https://global.abb/group/en" label="ABB" />, working on state-of-the-art navigation and localization solutions for autonomous mobile robots.
          </p>
          <p className="text-base text-gray-300 mt-4 leading-relaxed">
            Driven by a <span className="text-blue-300 font-medium">passion for robotics</span>, I'm eager to continue advancing in this exciting field.
          </p>
        </div>

        <div className="w-full lg:w-1/4 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-6 font-display pb-2 w-full text-center">Find me on</h2>
          <div className="flex flex-col space-y-6 items-center w-full">
            <SocialLink href="https://github.com/DJacquemont" icon={<Github className="h-8 w-8 mr-3" />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/dimitri-jacquemont/" icon={<Linkedin className="h-8 w-8 mr-3" />} label="LinkedIn" />
            <SocialLink href="mailto:jacquemont.dim@gmail.com" icon={<Mail className="h-8 w-8 mr-3" />} label="Email" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ExternalLink({ href, label }) {
  return (
    <a href={href} className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2" target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a href={href} className="w-full text-blue-400 hover:text-blue-300 hover:bg-gray-700/50 flex items-center justify-center p-3 rounded-lg transition-all duration-200 group">
      {icon}
      <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">{label}</span>
    </a>
  );
}