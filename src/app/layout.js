// src/app/layout.js
import './globals.css'
import Navigation from './components/Navigation'

export const metadata = {
  title: 'Dimitri Jacquemont',
  description: 'Personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 overflow-hidden">
        <Navigation />
        <main className="flex justify-center items-start min-h-screen px-6 py-6">
          {/* Center content within the available space */}
          <div className="max-w-5xl w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
