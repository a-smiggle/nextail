import { useEffect } from 'react';

function useRemoveEventListener(
  type: any,
  listener: (this: Window, ev: any) => any,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    window.removeEventListener(type, listener, options);
  }, []);
}

export default useRemoveEventListener;
