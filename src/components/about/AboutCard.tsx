import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function AboutCard({ Icon, title, description }: AboutCardProps) {
  return (
    <div className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-900/50 hover:border-purple-500/50 transition-colors">
      <Icon className="w-12 h-12 text-purple-400 mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}