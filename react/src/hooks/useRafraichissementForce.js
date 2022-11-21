import {useState, useCallback} from 'react';

export default function useRafraichissementForce() {
    console.log("refresh")
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}