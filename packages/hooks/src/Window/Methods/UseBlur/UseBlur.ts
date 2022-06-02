import { useEffect } from 'react';

function useBlur() {
  useEffect(() => {
    window.blur();
  }, []);
}

export default useBlur;
