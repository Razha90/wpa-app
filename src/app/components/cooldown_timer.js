"use client";

import { useEffect, useState, useRef } from "react";

export default function CooldownTimer({ starttimer, stopped }) {
  
  const cooldownEndTimeRef = useRef(new Date(starttimer).getTime());

  const [remainingTime, setRemainingTime] = useState(
    cooldownEndTimeRef.current - Date.now()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const timeLeft = cooldownEndTimeRef.current - now;

      setRemainingTime(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(interval);
        if (typeof stopped === 'function') {
          stopped();
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(remainingTime / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);

  return (
    <span className="text-gray-400">
      ({minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")})
    </span>
  );
}
