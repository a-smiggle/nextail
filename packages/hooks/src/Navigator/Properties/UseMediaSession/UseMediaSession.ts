import { useEffect, useState } from 'react';

export default function useMediaSession() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.mediaSession) {
      return navigator.mediaSession;
    }
    return undefined;
  };
  const [elements, setElements] = useState<MediaSession | undefined>(
    getElements()
  );

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
