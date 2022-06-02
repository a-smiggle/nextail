import { useEffect } from 'react';

function usePrompt(message?: string, _default?: string) {
  useEffect(() => {
    // eslint-disable-next-line no-alert
    window.prompt(message, _default);
  }, []);
}

export default usePrompt;
