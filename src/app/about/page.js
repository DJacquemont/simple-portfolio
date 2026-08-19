import { ServerIcon, BookOpenIcon, BriefcaseIcon, BeakerIcon, CodeIcon, GlobeIcon } from 'lucide-react';

export default function About() {
  const educationData = [
    {
      institution: "University of California, Berkeley",
      degree: "Visiting Student Researcher",
      period: "February 2025 - August 2025",
      location: "Berkeley, California, USA",
      description: "Development of a drone-based system with advanced control and perception algorithms to efficiently coat large photovoltaic arrays."
    },
    {
      institution: "École Polytechnique Fédérale de Lausanne",
      degree: "Master's in Robotics",
      period: "September 2022 - August 2025",
      location: "Lausanne, Switzerland",
      description: "Specializing in advanced robotics systems with focus on autonomous navigation, computer vision, perception, and robotic control systems."
    },
    {
      institution: "Technical University of Denmark",
      degree: "Exchange Year - Electrical and Mechanical Engineering",
      period: "September 2021 - August 2022",
      location: "Lyngby, Denmark",
      description: "Specialized in autonomous systems and robotics."
    },
    {
      institution: "École Polytechnique Fédérale de Lausanne",
      degree: "Bachelor's in Microengineering",
      period: "September 2019 - August 2022",
      location: "Lausanne, Switzerland",
      description: "Fundamental engineering principles with emphesis in electronics, computer science, robotics."
    }
  ];

  const experienceData = [
    {
      company: "Learning Algorithms and Systems Laboratory (EPFL)",
      position: "Robotics Research Engineer",
      period: "October 2025 - Present",
      location: "Lausanne, Switzerland",
      description: "Developing and maintaining control and machine learning software frameworks for robot arms."
    },
    {
      company: "UC Berkeley, HiPeRLab (High Performance Robotics Lab)",
      position: "Visiting Student Researcher",
      period: "February 2025 - August 2025",
      location: "Berkeley, US",
      description: "Developed a novel ground-effect compensation scheme for close-proximity drone flight, integrating multi-control, vision localization, and navigation for autonomous flight. IROS paper: <a href='https://arxiv.org/pdf/2509.10979' class='text-blue-300 hover:text-blue-200 transition-colors underline decoration-dotted underline-offset-2' target='_blank' rel='noopener noreferrer'>Autonomous Close-Proximity Photovoltaic Panel Coating Using a Quadcopter</a>."
    },
    {
      company: "Sevensense Robotics (ABB Robotics)",
      position: "Internship, Robotic Systems Engineer",
      period: "July 2024 - December 2024",
      location: "Zürich, Switzerland",
      description: "Tested and debugged the industrial floor cleaning robot as part of release testing, built system-level tests with pytest and GitLab CI/CD, and implemented a PoC for new autonomous navigation."
    },
    {
      company: "BIOROB Lab (EPFL)",
      position: "EPFL Robotic Competition (Secured first place)",
      period: "February 2024 - June 2024",
      location: "Lausanne, Switzerland",
      description: "Integrated the ROS2 SLAM navigation system and stereoscopic-camera object detection, and developed the ROS2 control stack and high-level FSM for the winning autonomous robot."
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
      position: "Internship, Robotic Electrical Engineer",
      period: "June 2022 - September 2022",
      location: "Zürich, Switzerland",
      description: "Built a proof-of-concept electronic speed controller (ESC) for underwater thrusters, designed an optimized ESC PCB with on-board sensing, and developed STM32 firmware for motor control."
    }
  ];

  const skillsData = {
    programming: ["Python", "C/C++", "ROS/ROS2", "Docker", "Linux", "Git", "MATLAB", "Pytorch", "OpenCV", "PCL"],
    simulationTesting: ["Gazebo", "CI/CD", "System Testing", "Test Automation", "pytest"],
    hardware: ["STM32", "Motor Drives", "Embedded Systems", "PCB (KiCad)", "Sensors", "3D Printing", "Microcontrollers (PIC, ATmega)"],
    controlMotion: ["Impedance Control", "Torque Control", "Motion Planning", "Dynamic Systems", "State Estimation"],
    cad: ["Creo", "CATIA", "SOLIDWORKS"],
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "C1" },
      { name: "German", level: "A2" }
    ]
  };

  return (
    <div className="bg-gray-900 text-left overflow-hidden">
      <div className="max-w-5xl mx-auto pb-12">
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <p className="text-gray-300 mb-4">
            Robotics Engineer with a passion for building things and figuring out how they work. I enjoy combining software, hardware, and hands-on experimentation to turn ideas into working systems.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <BookOpenIcon className="h-6 w-6 text-blue-300 mr-2" />
            <h2 className="text-2xl font-semibold text-white">Education</h2>
          </div>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div key={index} className="border-l-2 border-blue-400 pl-4 ml-2">
                <h3 className="text-xl font-medium text-white">{edu.institution}</h3>
                <p className="text-blue-200 font-medium">{edu.degree}</p>
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
            <BriefcaseIcon className="h-6 w-6 text-blue-300 mr-2" />
            <h2 className="text-2xl font-semibold text-white">Experience</h2>
          </div>
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div key={index} className="border-l-2 border-blue-400 pl-4 ml-2">
                <h3 className="text-xl font-medium text-white">{exp.company}</h3>
                <p className="text-blue-200 font-medium">{exp.position}</p>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <span>{exp.period}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                </div>
                <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: exp.description }}></p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <ServerIcon className="h-6 w-6 text-blue-300 mr-2" />
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
              <h3 className="text-xl font-medium text-white mb-3">Simulation & Testing 🧪</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.simulationTesting.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">Hardware & Mechatronics 🔌</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.hardware.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-3">Control & Motion 🎛️</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.controlMotion.map((skill, idx) => (
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
            <GlobeIcon className="h-6 w-6 text-blue-300 mr-2" />
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
            <CodeIcon className="h-6 w-6 text-blue-300 mr-2" />
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
