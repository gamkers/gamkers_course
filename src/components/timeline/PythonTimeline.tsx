
import { TimelineNode } from './TimelineNode';

const pythonCurriculum = [
  {
    day: 'Day 1',
    title: 'Introduction to Python',
    description: 'Overview of Python programming, Data Types, Variables, Operators, and String Manipulations.'
  },
  {
    day: 'Day 2',
    title: 'String Methods and Lists',
    description: 'Learn advanced string operations, string methods, formatting, and working with Lists and Indexing.'
  },
  {
    day: 'Day 3',
    title: 'Arrays and Control Flow',
    description: 'Master Arrays and IF Conditions to control program flow and manage data structures effectively.'
  },
  {
    day: 'Day 4',
    title: 'Loop Statements',
    description: 'Deep dive into loop statements for handling repetitive tasks and data processing.'
  },
  {
    day: 'Day 5',
    title: 'List Comprehension & Functions',
    description: 'Explore list comprehension techniques and learn to create user-defined functions.'
  },
  {
    day: 'Day 6',
    title: 'Advanced Functions',
    description: 'Master advanced concepts in user-defined functions for writing reusable and efficient code.'
  },
  {
    day: 'Day 7',
    title: 'Object-Oriented Programming',
    description: 'Learn OOP concepts including classes, objects, inheritance, and polymorphism in Python.'
  },
  {
    day: 'Day 8',
    title: 'Web Scraping Project',
    description: 'Build a hands-on web scraping project to gather and process data from websites.'
  }
];

export function PythonTimeline() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Python Bootcamp: From Basics to Advanced
          </span>
          <span className="block text-xl text-gray-400 mt-2">8-Day Curriculum</span>
        </h2>
        
        <div className="relative">
          {pythonCurriculum.map((item, index) => (
            <TimelineNode
              key={index}
              day={item.day}
              title={item.title}
              description={item.description}
              isLast={index === pythonCurriculum.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}