import { useEffect, useState } from 'react';

function useCanShare(data?: ShareData) {
  const checkMethod = () => {
    if (typeof navigator !== 'undefined' && navigator.canShare) {
      if (data) return navigator.canShare(data);
      return navigator.canShare();
    }
    return undefined;
  };

  const [returnValue, setReturnValue] = useState<boolean | undefined>(
    checkMethod()
  );

  useEffect(() => {
    setReturnValue(checkMethod);
  }, []);

  return returnValue;
}

export default useCanShare;
