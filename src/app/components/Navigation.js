import { Home, User, Folder } from 'lucide-react'; // Import the icons you want to use

export default function Navigation() {
  return (
    <nav className="bg-transparent p-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* DJ in the top left corner */}
        <span className="text-white text-2xl font-bold">DJ</span>

        <div className="flex space-x-8">
          {/* Home Link with Icon */}
          <a href="/" className="text-gray-300 hover:text-white text-xl flex items-center space-x-2">
            <Home className="h-6 w-6" /> {/* Icon size */}
            <span>Home</span>
          </a>

          {/* About Link with Icon */}
          <a href="/about" className="text-gray-300 hover:text-white text-xl flex items-center space-x-2">
            <User className="h-6 w-6" />
            <span>About</span>
          </a>

          {/* Projects Link with Icon */}
          <a href="/projects" className="text-gray-300 hover:text-white text-xl flex items-center space-x-2">
            <Folder className="h-6 w-6" />
            <span>Projects</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
