import { useEffect } from 'react';

function useRequestAnimationFrame(callback: FrameRequestCallback) {
  useEffect(() => {
    window.requestAnimationFrame(callback);
  }, []);
}

export default useRequestAnimationFrame;
