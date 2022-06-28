import { useEffect, useState } from 'react';

export default function useShare(data?: ShareData) {
  const checkMethod = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      if (data) return navigator.share(data);
      return navigator.share();
    }
    return undefined;
  };

  const [returnValue, setReturnValue] = useState<Promise<void> | undefined>(
    checkMethod()
  );

  useEffect(() => {
    setReturnValue(checkMethod);
  }, []);

  return returnValue;
}
