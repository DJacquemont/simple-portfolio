import { ServerIcon, BookOpenIcon, BriefcaseIcon, BeakerIcon, CodeIcon, GlobeIcon } from 'lucide-react';

export default function About() {
  const educationData = [
    {
      institution: "University of California, Berkeley",
      degree: "Visiting Student Researcher",
      period: "Spring 2025 - Present",
      location: "Berkeley, California, USA",
      description: "Development of a drone-based system with advanced control and perception algorithms to efficiently coat large photovoltaic arrays."
    },
    {
      institution: "École Polytechnique Fédérale de Lausanne",
      degree: "Master's in Robotics",
      period: "September 2022 - Present",
      location: "Lausanne, Switzerland",
      description: "Specializing in advanced robotics systems with focus on autonomous navigation, computer vision, perception, and robotic control systems."
    },
    {
      institution: "Technical University of Denmark",
      degree: "Exchange Program",
      period: "September 2021 - June 2022",
      location: "Copenhagen, Denmark",
      description: "Specialized in autonomous systems and robotics."
    },
    {
      institution: "École Polytechnique Fédérale de Lausanne",
      degree: "Bachelor's in Microengineering",
      period: "September 2019 - June 2022",
      location: "Lausanne, Switzerland",
      description: "Fundamental engineering principles with emphesis in electronics, computer science, robotics."
    }
  ];

  const experienceData = [
    {
      company: "Sevensense Robotics",
      position: "Robotic Systems Engineer Intern",
      period: "July 2024 - December 2024",
      location: "Zürich, Switzerland",
      description: "Working on integration of different software subsystems and implementation of automated tests through CI/CD pipelines for robotics solutions."
    },
    {
      company: "BIOROB Lab (EPFL)",
      position: "EPFL Robotic Competition",
      period: "February 2024 - June 2024",
      location: "Lausanne, Switzerland",
      description: "Development and Integration of the robot ROS2 system, and High-Level FSM."
    },
    {
      company: "DISAL Lab (EPFL)",
      position: "Research Project",
      period: "September 2023 - February 2024",
      location: "Lausanne, Switzerland",
      description: "Developed a ROS C++ package for steel structure segmentation using Time-of-Flight cameras, Point Cloud Library, and Iterative Hough Transform."
    },
    {
      company: "VITA Lab (EPFL)",
      position: "Course Project - Pedestrian Intention Prediction",
      period: "February 2023 - June 2023",
      location: "Lausanne, Switzerland",
      description: "Conducted research on state-of-the-art deep learning model architectures and adapted a leading-edge BERT model for predicting pedestrian crossing intentions."
    },
    {
      company: "Tethys Robotics",
      position: "Robotics Engineering Intern",
      period: "Summer 2022",
      location: "Zürich, Switzerland",
      description: "Designed and programmed an Electronic Speed Controller (ESC) for Unmanned Underwater Vehicles. Implemented robust control algorithms and communication protocols (CAN) for reliable underwater operation."
    }
  ];

  const skillsData = {
    programming: ["Python", "Pytorch", "C++", "MATLAB", "ROS", "Docker", "Linux", "OpenCV", "PCL", "CI/CD"],
    hardware: ["Microcontrollers (PIC, STM32, ATmega)", "PCB Design (KiCad)"],
    cad: ["Creo", "CATIA", "SOLIDWORKS"],
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "C2" },
      { name: "German", level: "A2" }
    ]
  };

  return (
    <div className="bg-gray-900 text-left overflow-hidden">
      <div className="max-w-5xl mx-auto pb-12">
        <h1 className="text-4xl font-semibold text-white mb-6">About Me</h1>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Who I Am 🤖</h2>
          <p className="text-gray-300 mb-4">
            I'm an EPFL Master's student in Robotics, deeply passionate about <span className="text-blue-300 font-medium">Software, Robotics, and Engineering</span>. 
          </p>
          <p className="text-gray-300 mb-4">
            As a dedicated DIY enthusiast, I'm driven by <span className="text-blue-300 font-medium">innovation and hands-on problem-solving</span>. I believe in the power of robotics to transform industries and improve human lives, which drives my commitment to advancing this technology through my work and research.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <BookOpenIcon className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-2xl font-semibold text-white">Education</h2>
          </div>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-4 ml-2">
                <h3 className="text-xl font-medium text-white">{edu.institution}</h3>
                <p className="text-blue-300 font-medium">{edu.degree}</p>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <span>{edu.period}</span>
                  <span className="mx-2">•</span>
                  <span>{edu.location}</span>
                </div>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <BriefcaseIcon className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-2xl font-semibold text-white">Experience</h2>
          </div>
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-4 ml-2">
                <h3 className="text-xl font-medium text-white">{exp.company}</h3>
                <p className="text-blue-300 font-medium">{exp.position}</p>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <span>{exp.period}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <ServerIcon className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-white mb-3">Programming & Tools 💻</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.programming.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">Hardware 🔌</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.hardware.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">CAD Design ✏️</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.cad.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <GlobeIcon className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-2xl font-semibold text-white">Languages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skillsData.languages.map((language, idx) => (
              <div key={idx} className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white">{language.name}</h3>
                <p className="text-gray-300">{language.level}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <CodeIcon className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-2xl font-semibold text-white">Interests & Activities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-2">Do-It-Yourself 🔧</h3>
              <p className="text-gray-300">Building and creating hands-on projects</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-2">Photography 📸</h3>
              <p className="text-gray-300">Capturing moments</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-2">Fitness & Hiking 🏃‍♂️🏔️</h3>
              <p className="text-gray-300">Staying active through regular exercise and exploring nature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}