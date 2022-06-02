import { useEffect, useState } from 'react';

function usePerformance() {
  const getPerformance = () => {
    if (typeof window !== 'undefined' && window.performance) {
      return window.performance;
    }
    return undefined;
  };
  const [performance, setPerformance] = useState<Performance | undefined>(
    getPerformance()
  );

  useEffect(() => {
    setPerformance(getPerformance);
  }, []);

  return performance;
}

export default usePerformance;
