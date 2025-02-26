import Link from 'next/link';
import { Home, User, Folder } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-transparent p-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <span className="text-white text-2xl font-bold hidden md:block">DJ</span>
        <div className="flex space-x-8 mx-auto md:mx-0">
          <Link href="/" className="text-gray-300 hover:text-white text-xl flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span>Home</span>
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white text-xl flex items-center space-x-2">
            <User className="h-6 w-6" />
            <span>About</span>
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white text-xl flex items-center space-x-2">
            <Folder className="h-6 w-6" />
            <span>Projects</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}