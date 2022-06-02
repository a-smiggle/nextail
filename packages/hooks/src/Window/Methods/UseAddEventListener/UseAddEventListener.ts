import { useEffect } from 'react';

function useAddEventListener(
  type: any,
  listener: (this: Window, ev: any) => any,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    window.addEventListener(type, listener, options);
  }, []);
}

export default useAddEventListener;
