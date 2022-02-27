import {useState, useEffect} from 'react';

const PREFIX = 'codepen-clone-2-';

// To retrieve data from localStorage
export  const retrieve = (name) => {
    const prefixedName = PREFIX + name;
    const retrievedVal = JSON.parse(localStorage.getItem(prefixedName));
    if(retrievedVal) return retrievedVal;
    return '';
  }

  
// To set state and save them in localStorage every time they change
  export const useLocalStorage = ( key, initialValue ) => {
    const prefixedKey = PREFIX + key;

    const [value, setValue] = useState(() => retrieve(key));

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [prefixedKey, value])

    return [value, setValue];
}


// To Clear Panes and Storage
export const clear = () => {
   localStorage.removeItem(PREFIX +'html');
   localStorage.removeItem(PREFIX + 'css');
   localStorage.removeItem(PREFIX + 'js');
   window.location.reload();
}
