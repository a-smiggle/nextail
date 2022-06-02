import { useEffect, useState } from 'react';

function useWindow() {
  const getWindow = () => {
    if (typeof window !== 'undefined' && window.window) {
      return window.window;
    }
    return undefined;
  };

  const [windowValue, setWindow] = useState<Window | undefined>(getWindow());

  useEffect(() => {
    setWindow(getWindow());
  }, []);

  return windowValue;
}

export default useWindow;
