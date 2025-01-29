
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Gamkers Academy
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-purple-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('courses')} className="text-gray-300 hover:text-purple-400 transition-colors">Courses</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-purple-400 transition-colors">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-purple-400 transition-colors">Contact</button>
            <button
              onClick={() => scrollToSection('prelaunch-offer')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              Enroll Now ₹749
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('courses')} className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors">Courses</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors">Contact</button>
            <button
              onClick={() => scrollToSection('prelaunch-offer')}
              className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Enroll Now ₹749
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}