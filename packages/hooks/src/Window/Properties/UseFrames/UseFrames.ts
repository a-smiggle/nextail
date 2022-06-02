import { useEffect, useState } from 'react';

function useFrames() {
  const getFrames = () => {
    if (typeof window !== 'undefined' && window.frames) {
      return window.frames;
    }
    return undefined;
  };

  const [frames, setFrames] = useState<Window | undefined>(getFrames());

  useEffect(() => {
    setFrames(getFrames());
  }, []);

  return frames;
}

export default useFrames;
