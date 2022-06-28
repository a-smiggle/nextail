import { useEffect, useState } from 'react';

export default function useVibrate(pattern: VibratePattern) {
  const checkMethod = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      return navigator.vibrate(pattern);
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
