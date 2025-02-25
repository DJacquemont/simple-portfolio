// src/app/projects/page.js
export default function Projects() {
  const projectsList = [
    {
      id: '1',
      title: 'BlockBuster',
      description: 'As part of a three-student team, we successfully designed, constructed, and programmed an autonomous robot for the <a href="https://robot-competition.epfl.ch/" class="text-blue-400 hover\:underline">EPFL Robot Competition 2024</a>, ultimately securing a first-place win.',
      technologies: ['Python', 'ROS2', 'Docker'],
      githubUrl: 'https://github.com/DJacquemont/BlockBuster/tree/main',
      liveUrl: 'https://www.youtube.com/watch?v=ejofCqsJ4cE&ab_channel=DroneBikeTV',
      imageUrl: '/images/blockbuster.gif'
    },
    {
      id: '2',
      title: 'Camera and LCD Controllers for an FPGA',
      description: 'Design and implementation of LCD and Camera controllers: the LCD controller displays video data on a screen, while the Camera controller captures and transmits the data for visualization.',
      technologies: ['FPGA', 'VHDL', 'DEO-Nano-SoC'],
      githubUrl: 'https://github.com/DJacquemont/Camera-and-LCD-Controllers-for-an-FPGA',
      imageUrl: '/images/fpgaproj.png'
    },
    {
      id: '3',
      title: 'Point Cloud Segmentation of Infrastructural Steel Elements',
      description: 'Developed a real-time ROS segmentation pipeline using a ToF camera on a Micro Aerial Vehicle (MAV) to capture and process 3D point-cloud data for extracting 3D structures. This project was conducted at the <a href="https://www.epfl.ch/labs/disal/" class="text-blue-400 hover\:underline">DISAL Lab</a> at EPFL',
      technologies: ['C++', 'ROS', 'Point-Cloud'],
      githubUrl: 'https://github.com/DJacquemont/pointcloud_segmentation',
      imageUrl: '/images/pcseg.gif'
    },
    {
      id: '4',
      title: 'RoboCup@Home',
      description: 'Part of a six-student team developing software for the <a href="https://make.epfl.ch/projects/12/make-robocup" class="text-blue-400 hover\:underline">RoboCup@Home competition project at EPFL</a>, led by the <a href="https://www.epfl.ch/labs/create/" class="text-blue-400 hover\:underline">CREATE Lab</a>.',
      technologies: ['Python', 'ROS2', 'Docker'],
      githubUrl: 'https://gitlab.epfl.ch/create-lab/robocup_at_home/epfl-robocup',
      imageUrl: '/images/robocup.jpg'
    },
    {
      id: '5',
      title: 'Pedestrian Intention Prediction',
      description: 'Developed a deep learning model using <a href="https://github.com/Walter0807/MotionBERTMotionBert" class="text-blue-400 hover\:underline">MotionBERT</a> to predict pedestrian intentions in videos, trained on the <a href="https://data.nvision2.eecs.yorku.ca/JAAD_dataset/" class="text-blue-400 hover\:underline">JAAD dataset</a>.',
      technologies: ['Python', 'Pytorch', 'BERT'],
      githubUrl: 'https://github.com/DJacquemont/pedestrian-intention-prediction',
      imageUrl: '/images/pedintpred.gif'
    },
    {
      id: '6',
      title: 'Hot Wheels',
      description: 'Development software for the Thymio robot to navigate autonomously through obstacles by localizing itself, optimizing its path using Dijkstra\'s algorithm, and avoiding unexpected objects.',
      technologies: ['Python', 'Thymio'],
      githubUrl: 'https://github.com/DJacquemont/hot_wheels/tree/main',
      imageUrl: '/images/hotwheels.png'
    },
    {
      id: '7',
      title: 'Temperature Controller',
      description: 'Design and programming of a temperature monitoring system that controls cooling by opening valves for airflow. It triggers an alarm if the temperature goes above a set limit.',
      technologies: ['ASM', 'AVR STK300'],
      githubUrl: 'https://github.com/DJacquemont/temperature-controller?tab=readme-ov-file',
      imageUrl: '/images/tempcont.png'
    },
    {
      id: '8',
      title: 'Logic Watch',
      description: 'Development of a device that can display the time, time zones, sound the alarm, and have a stopwatch mode as well as a timer mode',
      technologies: ['DE10-Lite'],
      githubUrl: 'https://github.com/DJacquemont/logic-watch/tree/main?tab=readme-ov-file',
      imageUrl: '/images/logicwatch.png'
    },
    {
      id: '9',
      title: 'Archipelago',
      description: 'Developed a tool to assess the efficiency of a floating city design, featuring circular islands and bridges.',
      technologies: ['C++', 'gtkmm'],
      githubUrl: 'https://github.com/DJacquemont/arquipelago',
      imageUrl: '/images/archipelago.png'
    },
  ];

  return (
    // Override the overflow-hidden from the parent layout explicitly
    <div className="absolute inset-0 bg-gray-900 text-left px-6 pt-6 overflow-y-auto" style={{ top: '4rem' }}>
      <div className="max-w-5xl mx-auto pb-12">
        <h1 className="text-4xl font-semibold text-white mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:translate-y-[-5px] transition duration-300 flex flex-col h-full"
            >
              {/* Image/GIF container with fixed height */}
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
                <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
                
                <p 
                  className="text-gray-300 mb-4 text-sm flex-grow"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
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
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-medium transition"
                    >
                      Live Demo
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