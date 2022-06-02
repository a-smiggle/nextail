import { useEffect } from 'react';

function useAlert(message: string) {
  useEffect(() => {
    // eslint-disable-next-line no-alert
    window.alert(message);
  }, []);
}

export default useAlert;
