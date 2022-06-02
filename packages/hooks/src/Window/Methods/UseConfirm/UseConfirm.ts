import { useEffect } from 'react';

function useConfirm(message: string) {
  useEffect(() => {
    // eslint-disable-next-line no-alert
    window.confirm(message);
  }, []);
}

export default useConfirm;
