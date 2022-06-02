import { useEffect } from 'react';

function useFocus() {
  useEffect(() => {
    window.focus();
  }, []);
}

export default useFocus;
