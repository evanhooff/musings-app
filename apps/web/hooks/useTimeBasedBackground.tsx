// hooks/useTimeBasedBackground.ts
import { useState, useEffect } from 'react';

export const useTimeBasedBackground = (): { backgroundClass: string; isLoaded: boolean } => {
  const [bgClass, setBgClass] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const updateBackground = () => {
      const hour = new Date().getHours();
      
      if (hour >= 5 && hour < 8) {
        // Early morning - soft orange/pink
        setBgClass('bg-gradient-to-br from-orange-200 to-pink-200');
      } else if (hour >= 8 && hour < 12) {
        // Morning - light blue/yellow
        setBgClass('bg-gradient-to-br from-blue-200 to-yellow-200');
      } else if (hour >= 12 && hour < 17) {
        // Afternoon - bright blue/white
        setBgClass('bg-gradient-to-br from-sky-300 to-blue-400');
      } else if (hour >= 17 && hour < 20) {
        // Evening - warm orange/red
        setBgClass('bg-gradient-to-br from-orange-400 to-red-400');
      } else {
        // Night - dark blue/purple
        setBgClass('bg-gradient-to-br from-slate-800 to-purple-900');
      }
      
      setIsLoaded(true);
    };

    // Update immediately
    updateBackground();

    // Update every minute
    const interval = setInterval(updateBackground, 60000);

    return () => clearInterval(interval);
  }, []);

  return { backgroundClass: bgClass, isLoaded };
};