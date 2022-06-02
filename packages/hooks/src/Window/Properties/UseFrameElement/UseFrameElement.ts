import { useEffect, useState } from 'react';

function useFrameElement() {
  const getFrameElement = () => {
    if (typeof window !== 'undefined' && window.frameElement) {
      return window.frameElement;
    }
    return undefined;
  };

  const [frameElement, setFrameElement] = useState<Element | undefined>(
    getFrameElement()
  );

  useEffect(() => {
    setFrameElement(getFrameElement());
  }, []);

  return frameElement;
}

export default useFrameElement;
