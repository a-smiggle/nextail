import { useEffect, useState } from 'react';

function useSelf() {
  const getSelf = () => {
    if (typeof window !== 'undefined' && window.self) {
      return window.self;
    }
    return undefined;
  };

  const [selfValue, setSelfValue] = useState<
    (Window & typeof globalThis) | undefined
  >(getSelf());

  useEffect(() => {
    setSelfValue(getSelf());
  }, []);

  return selfValue;
}

export default useSelf;
