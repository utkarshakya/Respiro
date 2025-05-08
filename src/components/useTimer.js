import { useState, useEffect } from "react";

function useTimer(initialDuration) {
  const [secondsLeft, setSecondsLeft] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => setSecondsLeft(initialDuration);

  const pad = (num) => String(num).padStart(2, "0");

  const formatTime = () => {
    const hours = pad(Math.floor(secondsLeft / 3600));
    const minutes = pad(Math.floor((secondsLeft % 3600) / 60));
    const seconds = pad(secondsLeft % 60);
    return { hours, minutes, seconds };
  };

  return { formatTime, start, pause, reset, isRunning, secondsLeft };
}

export default useTimer;
