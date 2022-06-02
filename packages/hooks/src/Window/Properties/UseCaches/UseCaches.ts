import { useEffect, useState } from 'react';

function useCaches() {
  const getCaches = () => {
    if (typeof window !== 'undefined' && window.caches) {
      return window.caches;
    }
    return undefined;
  };
  const [cachesValue, setCaches] = useState<CacheStorage | undefined>(
    getCaches()
  );

  useEffect(() => {
    setCaches(getCaches);
  }, []);

  return cachesValue;
}

export default useCaches;
