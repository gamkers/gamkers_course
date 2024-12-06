
import { TimelineNode } from './TimelineNode';

const hackingTools = [
  {
    title: 'MAC Changer',
    description: 'Learn how to change MAC addresses to bypass network filters and enhance network security testing.'
  },
  {
    title: 'Network Scanner',
    description: 'Build a tool to discover and map devices connected to your network, essential for network analysis.'
  },
  {
    title: 'ARP Spoofer',
    description: 'Create a tool to redirect network traffic and understand man-in-the-middle attack concepts.'
  },
  {
    title: 'Packet Sniffer',
    description: 'Develop a tool to capture and analyze network packets, including usernames and passwords.'
  },
  {
    title: 'DNS Spoofer',
    description: 'Build a DNS spoofing tool to understand and test DNS-based vulnerabilities.'
  },
  {
    title: 'Reverse Backdoor',
    description: 'Create a secure reverse backdoor to understand remote system access and security implications.'
  },
  {
    title: 'Keylogger',
    description: 'Develop a keylogger with email capability to understand keystroke monitoring and data exfiltration.'
  },
  {
    title: 'Vulnerability Scanner',
    description: 'Build a scanner to identify and report website vulnerabilities, essential for security testing.'
  }
];

export function EthicalHackingTimeline() {
  return (
    <section className="py-16 bg-black/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Ethical Hacking with Python
          </span>
          <span className="block text-xl text-gray-400 mt-2">Build 8 Professional Tools</span>
        </h2>
        
        <div className="relative">
          {hackingTools.map((tool, index) => (
            <TimelineNode
              key={index}
              title={tool.title}
              description={tool.description}
              isLast={index === hackingTools.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}