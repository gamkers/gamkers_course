import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineNodeProps {
  day?: string;
  title: string;
  description: string;
  isLast?: boolean;
  index: number;
}

export function TimelineNode({ day, title, description, isLast = false, index }: TimelineNodeProps) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="w-4 h-4 rounded-full bg-purple-500 border-4 border-purple-900"
        />
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 0.5 }}
            className="w-0.5 bg-purple-900"
          />
        )}
      </div>
      <div className="ml-6 pb-8">
        {day && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            className="text-purple-400 font-medium mb-1 block"
          >
            {day}
          </motion.span>
        )}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
          className="text-xl font-bold text-white mb-2"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
          className="text-gray-400"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}