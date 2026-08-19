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
              {" "}I'm <span className="text-blue-300 font-bold">Dimitri</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mt-10">
              Hands-on <span className="text-blue-200 font-medium">Robotics Engineer</span> building and integrating robotic systems across software and hardware. Experienced in troubleshooting and solving problems spanning software, hardware, and networking.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-between gap-6 max-w-5xl mx-auto pt-4 pb-12">
        <div className="w-full lg:w-3/4 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-4 font-display pb-2">What I Do</h2>
          <p className="text-base text-gray-300 leading-relaxed">
            I'm a robotics software engineer with a strong interest in systems, control, and hands-on problem-solving. My academic journey at <ExternalLink href="https://www.epfl.ch/en/" label="EPFL" />, <ExternalLink href="https://www.dtu.dk/english/" label="DTU" />, and <ExternalLink href="https://www.berkeley.edu/" label="UC Berkeley" /> has shaped my focus on robotics and given me the opportunity to work across a wide range of platforms and applications.
          </p>
          <p className="text-base text-gray-300 mt-4 leading-relaxed">
            I currently work as a Robotics Research Engineer at the <ExternalLink href="https://www.epfl.ch/labs/lasa/" label="Learning Algorithms and Systems Laboratory (EPFL)" />, where I develop and maintain software frameworks for robot arms, with a focus on control and machine learning. Previously, I worked at <ExternalLink href="https://www.sevensense.ai/" label="Sevensense" />, now part of <ExternalLink href="https://global.abb/group/en" label="ABB" />, on navigation and localization for autonomous mobile robots, and as a visiting researcher at UC Berkeley&apos;s <ExternalLink href="https://hiperlab.berkeley.edu/" label="HiPeRLab" />, where I worked on close-proximity drone flight. I also interned at <ExternalLink href="https://www.tethys-robotics.ch/" label="Tethys Robotics" />, where I designed and programmed an Electronic Speed Controller for Unmanned Underwater Vehicles.
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
    <a href={href} className="text-blue-300 hover:text-blue-200 transition-colors underline decoration-dotted underline-offset-2" target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a href={href} className="w-full text-blue-300 hover:text-blue-200 hover:bg-gray-700/50 flex items-center justify-center p-3 rounded-lg transition-all duration-200 group">
      {icon}
      <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">{label}</span>
    </a>
  );
}