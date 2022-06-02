import { useEffect } from 'react';

function useReportError(e: any) {
  useEffect(() => {
    window.reportError(e);
  }, []);
}

export default useReportError;
