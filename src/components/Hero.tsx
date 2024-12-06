import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  const scrollToOffer = () => {
    const element = document.getElementById('prelaunch-offer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Master Python and Ethical Hacking
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Learn by Building Real Tools!
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Prelaunch Price: <span className="text-purple-400 font-bold">₹499</span>
            <span className="mx-2">|</span>
            Original Price: <span className="line-through">₹1000</span>
          </p>

          <div className="mb-12">
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={scrollToOffer}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Enroll Now
            </button>
            
            <button
              onClick={() => setIsVideoOpen(true)}
              className="group flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Play className="w-12 h-12 border-2 rounded-full p-2 group-hover:border-purple-400 transition-colors" />
              <span className="text-lg">Watch Intro Video</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80"
              onClick={() => setIsVideoOpen(false)}
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 w-full max-w-4xl mx-4"
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                  <h3 className="text-xl font-semibold text-white">Course Introduction</h3>
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="p-1 hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400 hover:text-white" />
                  </button>
                </div>
                
                <div className="relative pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/iRnjuGivovY"
                    title="Course Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}