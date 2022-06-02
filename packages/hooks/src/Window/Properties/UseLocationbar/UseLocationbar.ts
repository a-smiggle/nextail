import { useEffect, useState } from 'react';

function useLocationbar() {
  const getLocationbar = () => {
    if (typeof window !== 'undefined' && window.locationbar) {
      return window.locationbar;
    }
    return undefined;
  };
  const [locationbar, setLocationbar] = useState<BarProp | undefined>(
    getLocationbar()
  );

  useEffect(() => {
    setLocationbar(getLocationbar);
  }, []);

  return locationbar;
}

export default useLocationbar;
