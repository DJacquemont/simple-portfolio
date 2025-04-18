export default function Projects() {
  const projectsList = [
    {
      id: '1',
      title: 'Drone System for PV Panel Cleaning',
      year: '2025',
      description: 'Development of a drone-based system with advanced control and perception algorithms to efficiently clean large photovoltaic arrays as part of my Master\'s thesis @ <a href="https://hiperlab.berkeley.edu/" class="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">HiPeRLab</a>.',
      technologies: ['Python', 'C++', 'ROS'],
      imageUrl: '/images/drone_hiperlab.gif'
    },
    {
      id: '2',
      title: 'BlockBuster 🥇',
      year: '2024',
      description: 'As part of a three-student team, we successfully designed, constructed, and programmed an autonomous robot for the <a href="https://robot-competition.epfl.ch/" class="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">EPFL Robot Competition 2024</a>, ultimately securing a first-place win.',
      technologies: ['Python', 'C++', 'ROS2', 'Docker'],
      githubUrl: 'https://github.com/DJacquemont/BlockBuster/tree/main',
      demoUrl: 'https://www.youtube.com/watch?v=ejofCqsJ4cE&ab_channel=DroneBikeTV',
      imageUrl: '/images/blockbuster.gif'
    },
    {
      id: '3',
      title: 'Camera and LCD Controllers for an FPGA 📷',
      year: '2023',
      description: 'Design and implementation of LCD and Camera controllers: the LCD controller displays video data on a screen, while the Camera controller captures and transmits the data for visualization.',
      technologies: ['FPGA', 'VHDL', 'DEO-Nano-SoC'],
      githubUrl: 'https://github.com/DJacquemont/Camera-and-LCD-Controllers-for-an-FPGA',
      imageUrl: '/images/fpgaproj.png'
    },
    {
      id: '4',
      title: 'Point Cloud Segmentation of Infrastructural Steel Elements',
      year: '2023',
      description: 'Developed a real-time ROS segmentation pipeline using a ToF camera on a Micro Aerial Vehicle (MAV) to capture and process 3D point-cloud data for extracting 3D structures. This project was conducted @ <a href="https://www.epfl.ch/labs/disal/" class="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">DISAL Lab</a> at EPFL',
      technologies: ['C++', 'ROS', 'Point-Cloud'],
      githubUrl: 'https://github.com/DJacquemont/pointcloud_segmentation',
      imageUrl: '/images/pcseg.gif'
    },
    {
      id: '5',
      title: 'Useless Box 🎁',
      year: '2023',
      description: 'Designed and built a Useless Box as a personal project, a playful machine that turns itself off when turned on and displays different emotions each time.',
      technologies: ['Electronics', 'Arduino', '3D Printer'],
      imageUrl: '/images/uselessbox.gif'
    },
    {
      id: '6',
      title: 'RoboCup@Home 🦿',
      year: '2023',
      description: 'Part of a six-student team developing software for the <a href="https://make.epfl.ch/projects/12/make-robocup" class="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">RoboCup@Home competition project at EPFL</a>, led by the <a href="https://www.epfl.ch/labs/create/" class="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">CREATE Lab</a>.',
      technologies: ['Python', 'ROS2', 'Docker', 'ESC'],
      githubUrl: 'https://gitlab.epfl.ch/create-lab/robocup_at_home/epfl-robocup',
      imageUrl: '/images/robocup.jpg'
    },
    {
      id: '7',
      title: 'Pedestrian Intention Prediction 👁️',
      year: '2023',
      description: 'Developed a deep learning model based on <a href="https://github.com/Walter0807/MotionBERT" class="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">MotionBERT</a> to predict pedestrian intentions in videos, trained on the <a href="https://data.nvision2.eecs.yorku.ca/JAAD_dataset/" class="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted underline-offset-2">JAAD dataset</a>.',
      technologies: ['Python', 'Pytorch', 'BERT'],
      githubUrl: 'https://github.com/DJacquemont/pedestrian-intention-prediction',
      imageUrl: '/images/pedintpred.gif'
    },
    {
      id: '8',
      title: 'Hot Wheels 🚗',
      year: '2022',
      description: 'Development software for the Thymio robot to navigate autonomously through obstacles by localizing itself, optimizing its path using Dijkstra\'s algorithm, and avoiding unexpected objects.',
      technologies: ['Python', 'Thymio'],
      githubUrl: 'https://github.com/DJacquemont/hot_wheels/tree/main',
      imageUrl: '/images/hotwheels.png'
    },
    {
      id: '9',
      title: 'Temperature Controller 🌡️',
      year: '2021',
      description: 'Design and programming of a temperature monitoring system that controls cooling by opening valves for airflow. It triggers an alarm if the temperature goes above a set limit.',
      technologies: ['ASM', 'AVR STK300'],
      githubUrl: 'https://github.com/DJacquemont/temperature-controller?tab=readme-ov-file',
      imageUrl: '/images/tempcont.png'
    },
    {
      id: '10',
      title: 'Logic Watch ⌚',
      year: '2020',
      description: 'Development of a device that can display the time, time zones, sound the alarm, and have a stopwatch mode as well as a timer mode',
      technologies: ['DE10-Lite'],
      githubUrl: 'https://github.com/DJacquemont/logic-watch/tree/main?tab=readme-ov-file',
      imageUrl: '/images/logicwatch.png'
    },
    {
      id: '11',
      title: 'Archipelago 🏝️',
      year: '2020',
      description: 'Developed a tool to assess the efficiency of a floating city design, featuring circular islands and bridges.',
      technologies: ['C++', 'gtkmm'],
      githubUrl: 'https://github.com/DJacquemont/arquipelago',
      imageUrl: '/images/archipelago.png'
    },
  ];

  return (
    <div className="bg-gray-900 text-left overflow-hidden">
      <div className="max-w-5xl mx-auto pb-12">
        <h1 className="text-4xl font-semibold text-white mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:translate-y-[-5px] transition duration-300 flex flex-col h-full"
            >
              <div className="h-48 w-full relative">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ 
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundColor: !project.imageUrl ? '#374151' : 'transparent'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                  <span className="text-gray-400 text-sm">{project.year}</span>
                </div>
                
                <p 
                  className="text-gray-300 mb-4 text-sm flex-grow"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-200">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-purple-700 hover:bg-purple-800 rounded-lg text-xs font-medium transition"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-medium transition"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}