import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail, MessageCircle, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Gamkers Academy
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Master Python and Ethical Hacking through hands-on projects and real-world applications.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-purple-400 transition-colors">Courses</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2 text-purple-400" />
                <a href="mailto:support@studentbae.in" className="hover:text-purple-400 transition-colors">
                  support@studentbae.in
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <MessageCircle className="w-5 h-5 mr-2 text-purple-400" />
                <a 
                  href="https://api.whatsapp.com/send?phone=918778672797&text=I%E2%80%99m%20interested%20in%20enrolling%20in%20the%20Python%20%26%20Ethical%20Hacking%20Bootcamp%2C%20but%20I%20have%20a%20few%20questions%20before%20signing%20up.%20Could%20you%20please%20help%20me%20with%20more%20details%3F%0A%0ALooking%20forward%20to%20your%20response.%20%F0%9F%98%8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <a 
                  href="https://www.instagram.com/gamkers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@gamkeryt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/50 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gamkers Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}