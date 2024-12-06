
import { motion } from 'framer-motion';
import { BookOpen, Shield } from 'lucide-react';

export function CourseOverview() {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Get Two Comprehensive Courses in One Bootcamp
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group bg-gradient-to-br from-purple-900/30 to-purple-900/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-500/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <BookOpen className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">Course 1: Python Programming</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Master Python from basics to advanced concepts through our comprehensive curriculum:
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Fundamentals of Python programming
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Functional Programming
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Object-oriented programming
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Web scraping and automation
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Real-world project implementation
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group bg-gradient-to-br from-purple-900/30 to-purple-900/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 hover:border-purple-500/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Shield className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">Course 2: Ethical Hacking</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Master ethical hacking with Python through hands-on projects:
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Secure networks with MAC changers, ARP, and DNS spoofers
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Build hacking tools like sniffers and network scanners
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Ethically exploit system vulnerabilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Perform penetration testing on websites and systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Create reverse backdoors and keyloggers for ethical use
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}