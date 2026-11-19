import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Dimitri Jacquemont',
  description: 'Personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/code.svg" />
      </head>
      <body className="bg-gray-900 text-gray-200 font-sans antialiased">
        <Navigation />
        <main className="px-6 py-6">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
