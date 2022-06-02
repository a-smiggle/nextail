import { useEffect, useState } from 'react';

function useLocalStorage() {
  const getLocalStorage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.sessionStorage;
    }
    return undefined;
  };

  const [localStorage, setLocalStorage] = useState<Storage | undefined>(
    getLocalStorage()
  );

  useEffect(() => {
    setLocalStorage(getLocalStorage());
  }, []);

  return localStorage;
}

export default useLocalStorage;
