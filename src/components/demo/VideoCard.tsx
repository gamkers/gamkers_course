import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

export function VideoCard({ title, description, thumbnail, videoUrl }: VideoCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img
        src={thumbnail}
        alt={title}
        className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white"
        >
          <Play className="w-12 h-12 border-2 rounded-full p-2" />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black">
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}