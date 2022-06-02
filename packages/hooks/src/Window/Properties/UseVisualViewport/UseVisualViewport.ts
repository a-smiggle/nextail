import { useEffect, useState } from 'react';

function useVisualViewport() {
  const getVisualViewport = () => {
    if (typeof window !== 'undefined' && window.visualViewport) {
      return window.visualViewport;
    }
    return undefined;
  };

  const [visualViewport, setVisualViewport] = useState<
    VisualViewport | undefined
  >(getVisualViewport());

  useEffect(() => {
    setVisualViewport(getVisualViewport());
  }, []);

  return visualViewport;
}

export default useVisualViewport;
