import { useEffect, useState } from 'react';

function useLocation() {
  const getLocation = () => {
    if (typeof window !== 'undefined' && window.location) {
      return window.location;
    }
    return undefined;
  };
  const [location, setLocation] = useState<Location | undefined>(getLocation());

  useEffect(() => {
    setLocation(getLocation);
  }, []);

  return location;
}

export default useLocation;
