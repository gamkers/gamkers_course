import React from 'react';
import { Code2, Terminal, Briefcase } from 'lucide-react';
import { AboutCard } from './AboutCard';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            About the Bootcamp
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <AboutCard
            Icon={Code2}
            title="Python Bootcamp"
            description="Master Python programming from basics to advanced concepts through hands-on projects and real-world applications."
          />
          <AboutCard
            Icon={Terminal}
            title="Ethical Hacking"
            description="Build 8 professional-grade hacking tools while learning essential cybersecurity concepts and techniques."
          />
          <AboutCard
            Icon={Briefcase}
            title="Career-Focused Learning"
            description="Gain practical skills that are in high demand in the cybersecurity industry through project-based learning."
          />
        </div>
      </div>
    </section>
  );
}