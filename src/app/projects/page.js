export default function Projects() {
    return (
      <div className="min-h-screen bg-gray-900 text-left px-6 pt-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-semibold text-white mb-6">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Project Name</h2>
              <p className="text-gray-300 mb-4">
                Project description goes here...
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
                <a href="#" className="text-blue-400 hover:text-blue-300">Demo</a>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </div>
    );
  }