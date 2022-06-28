import { useEffect, useState } from 'react';

export default function useSendBeacon(url: string | URL, data?: BodyInit) {
  const checkMethod = () => {
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      if (data) return navigator.sendBeacon(url, data);
      return navigator.sendBeacon(url);
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
