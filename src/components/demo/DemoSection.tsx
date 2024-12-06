import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  onPlay: () => void;
}

export function VideoCard({ 
  title, 
  description, 
  thumbnail, 
  videoUrl, 
  onPlay 
}: VideoCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img
        src={thumbnail}
        alt={title}
        className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onPlay}
          className="flex items-center space-x-2 text-white"
        >
          <Play className="w-12 h-12 border-2 rounded-full p-2" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black">
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}

interface VideoModalProps {
  videoUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ 
  videoUrl, 
  title, 
  isOpen, 
  onClose 
}: VideoModalProps) {
  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return videoIdMatch ? videoIdMatch[1] : '';
  };

  const videoId = getVideoId(videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative z-10 w-full max-w-4xl mx-4"
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400 hover:text-white" />
                </button>
              </div>
              
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={embedUrl}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function DemoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const videos = [
    {
      title: "Introduction to Python",
      description: "Get started with Python programming fundamentals",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://youtu.be/Kz3Cj2JaGQ8"
    },
    {
      title: "Building a MAC Changer",
      description: "Learn to create your first ethical hacking tool",
      thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      videoUrl: "https://youtu.be/cTxrZ7AbCHU"
    }
  ];

  const handleVideoPlay = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsVideoOpen(true);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Free Demo Videos
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12">See What You'll Learn!</p>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail}
              videoUrl={video.videoUrl}
              onPlay={() => handleVideoPlay(video.videoUrl)}
            />
          ))}
        </div>

        <VideoModal 
          videoUrl={selectedVideo} 
          title="Course Video" 
          isOpen={isVideoOpen} 
          onClose={() => setIsVideoOpen(false)} 
        />
      </div>
    </section>
  );
}