import { useState, useEffect } from 'react';

const INITIAL_TIME = {
  days: 3,
  hours: 14,
  minutes: 20,
  seconds: 0
};

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          // Reset to initial time when countdown reaches zero
          return INITIAL_TIME;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4 justify-center">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-purple-400">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="text-sm text-gray-400">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-purple-400">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-sm text-gray-400">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-purple-400">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-sm text-gray-400">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-purple-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-sm text-gray-400">Seconds</span>
      </div>
    </div>
  );
}