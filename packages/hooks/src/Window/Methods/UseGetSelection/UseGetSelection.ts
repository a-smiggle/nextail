import { useEffect } from 'react';

function useGetSelection() {
  useEffect(() => {
    window.getSelection();
  }, []);
}

export default useGetSelection;
