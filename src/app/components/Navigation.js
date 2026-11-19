'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Folder } from 'lucide-react';

const links = [
  { href: '/', label: 'Home', Icon: Home },
  { href: '/about', label: 'About', Icon: User },
  { href: '/projects', label: 'Projects', Icon: Folder },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="px-6 pt-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="text-lg sm:text-xl font-semibold text-white">
          Dimitri Jacquemont
        </Link>
        <div className="flex gap-1 sm:gap-2">
          {links.map(({ href, label, Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                aria-label={label}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-base transition-colors ${
                  active ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? 'text-accent' : ''}`} />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
