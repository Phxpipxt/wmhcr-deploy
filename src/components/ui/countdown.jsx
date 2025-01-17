"use client";

import React, { useEffect, useState } from 'react';

export default function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("April 24, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    updateCountdown(); // Initial call to set the countdown immediately

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="countdown-div">
      <div className="countdown">
        <p className="counting">{timeRemaining.days.toString().padStart(2, '0')}</p>
        <p className="count-label">Day</p>
      </div>
      <div className="countdown">
        <p className="counting">{timeRemaining.hours.toString().padStart(2, '0')}</p>
        <p className="count-label">Hours</p>
      </div>
      <div className="countdown">
        <p className="counting">{timeRemaining.minutes.toString().padStart(2, '0')}</p>
        <p className="count-label">Minutes</p>
      </div>
      <div className="countdown">
        <p className="counting">{timeRemaining.seconds.toString().padStart(2, '0')}</p>
        <p className="count-label">Seconds</p>
      </div>
    </div>
  );
}
