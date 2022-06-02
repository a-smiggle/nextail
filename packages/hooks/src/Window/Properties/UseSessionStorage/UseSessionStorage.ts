import { useEffect, useState } from 'react';

function useSessionStorage() {
  const getSessionStorage = () => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return window.sessionStorage;
    }
    return undefined;
  };

  const [sessionStorage, setSessionStorage] = useState<Storage | undefined>(
    getSessionStorage()
  );

  useEffect(() => {
    setSessionStorage(getSessionStorage());
  }, []);

  return sessionStorage;
}

export default useSessionStorage;
