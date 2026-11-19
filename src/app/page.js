import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-left px-6 pt-6">
      <section className="max-w-5xl mx-auto mt-6 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-8 bg-gray-800 rounded-xl shadow-lg">
          <div className="w-full md:w-1/3 max-w-[220px] relative">
            <Image
              src="/images/photo_home.jpg"
              alt="Dimitri's photo"
              width={250}
              height={250}
              priority
              className="w-full aspect-square object-cover rounded-full shadow-md ring-2 ring-accent/30"
            />
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              Dimitri Jacquemont
            </h1>
            <p className="text-xl text-gray-100 mt-3">
              Robotics Research Engineer at <ExternalLink href="https://www.epfl.ch/labs/lasa/" label="LASA, EPFL" />
            </p>
            <p className="text-base text-gray-300 leading-relaxed mt-4">
              Hands-on robotics engineer building and integrating robotic systems across software and hardware. Experienced in troubleshooting and solving problems spanning software, hardware, and networking.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-between gap-6 max-w-5xl mx-auto pt-4 pb-12">
        <div className="w-full lg:w-3/4 bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4 pb-2">What I Do</h2>
          <p className="text-base text-gray-300 leading-relaxed">
            I'm a robotics software engineer with a strong interest in systems, control, and hands-on problem-solving. My academic journey at <ExternalLink href="https://www.epfl.ch/en/" label="EPFL" />, <ExternalLink href="https://www.dtu.dk/english/" label="DTU" />, and <ExternalLink href="https://www.berkeley.edu/" label="UC Berkeley" /> has shaped my focus on robotics and given me the opportunity to work across a wide range of platforms and applications.
          </p>
          <p className="text-base text-gray-300 mt-4 leading-relaxed">
            I currently work as a Robotics Research Engineer at the <ExternalLink href="https://www.epfl.ch/labs/lasa/" label="Learning Algorithms and Systems Laboratory (EPFL)" />, where I develop and maintain software frameworks for robot arms, with a focus on control and machine learning. Previously, I worked at <ExternalLink href="https://www.sevensense.ai/" label="Sevensense" />, now part of <ExternalLink href="https://global.abb/group/en" label="ABB" />, on navigation and localization for autonomous mobile robots, and as a visiting researcher at UC Berkeley&apos;s <ExternalLink href="https://hiperlab.berkeley.edu/" label="HiPeRLab" />, where I worked on close-proximity drone flight. I also interned at <ExternalLink href="https://www.tethys-robotics.ch/" label="Tethys Robotics" />, where I designed and programmed an Electronic Speed Controller for Unmanned Underwater Vehicles.
          </p>
        </div>

        <div className="w-full lg:w-1/4 bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-white mb-6 pb-2 w-full text-center">Find me on</h2>
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
    <a href={href} className="text-accent hover:text-accent-soft transition-colors underline decoration-dotted underline-offset-2" target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a href={href} className="w-full text-accent hover:text-accent-soft hover:bg-gray-700/50 flex items-center justify-center p-3 rounded-lg transition-all duration-200 group">
      {icon}
      <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">{label}</span>
    </a>
  );
}