import { useEffect } from 'react';

function useDispatchEvent(event: Event) {
  useEffect(() => {
    window.dispatchEvent(event);
  }, []);
}

export default useDispatchEvent;
