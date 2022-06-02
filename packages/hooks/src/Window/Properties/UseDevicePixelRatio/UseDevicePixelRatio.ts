import { useEffect, useState } from 'react';

function useDevicePixelRatio() {
  const getDevicePixelRatio = () => {
    if (typeof window !== 'undefined' && window.devicePixelRatio) {
      return window.devicePixelRatio;
    }
    return undefined;
  };

  const [devicePixelRatio, setDevicePixelRatio] = useState<number | undefined>(
    getDevicePixelRatio()
  );

  useEffect(() => {
    setDevicePixelRatio(getDevicePixelRatio());
  }, []);

  return devicePixelRatio;
}

export default useDevicePixelRatio;
