import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/about/AboutSection';
import { CourseOverview } from './components/CourseOverview';
import { PythonTimeline } from './components/timeline/PythonTimeline';
import { EthicalHackingTimeline } from './components/timeline/EthicalHackingTimeline';
import { DemoSection } from './components/demo/DemoSection';
import { PrelaunchOffer } from './components/PrelaunchOffer';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main id="home">
        <Hero />
        <AboutSection />
        <CourseOverview />
        <PythonTimeline />
        <EthicalHackingTimeline />
        <DemoSection />
        <div id="prelaunch-offer">
          <PrelaunchOffer />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;