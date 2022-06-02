import { useEffect } from 'react';

function useGetComputedStyle(elt: Element, pseudoElt?: string) {
  useEffect(() => {
    window.getComputedStyle(elt, pseudoElt);
  }, []);
}

export default useGetComputedStyle;
