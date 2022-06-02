import { useEffect } from 'react';

function usePostMessage(
  message: any,
  targetOrigin: string,
  transfer?: Transferable[]
) {
  useEffect(() => {
    window.postMessage(message, targetOrigin, transfer);
  }, []);
}

export default usePostMessage;
