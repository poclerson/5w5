import {useEffect, useRef} from 'react';

export default function useClicExterieur(callback) {
    const refElement = useRef();

    useEffect(() => {
        function surClicExterieur(event) {
            if (refElement.current && !refElement.current.contains(event.target)) {
                // callback()
            }
        }

        document.addEventListener("click", surClicExterieur);
        return () => document.removeEventListener("click", surClicExterieur);
      }, []);

      return refElement;
}