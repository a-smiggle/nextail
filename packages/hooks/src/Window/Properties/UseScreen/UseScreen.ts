import { useEffect, useState } from 'react';

import { useAddEventListener } from '../../Methods';

function useScreen() {
  const getScreen = () => {
    if (typeof window !== 'undefined' && window.screen) {
      return window.screen;
    }
    return undefined;
  };

  const [screen, setScreen] = useState<Screen | undefined>(getScreen());

  function handleSize() {
    setScreen(getScreen());
  }

  useAddEventListener('resize', handleSize);

  useEffect(() => {
    handleSize();
  }, []);

  return screen;
}

export default useScreen;
