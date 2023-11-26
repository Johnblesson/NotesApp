// Custom Hook
// Functions similar to react hooks
// We created the project ourselves according to your needs.
// These are the hooks whose functions we determine.
// They generally return the data and the function that will update the data in an array.

import { useEffect, useState } from 'react';

export function useLocaleStorage<T>(key: string, initialValue: T) {
  //1) defining state
  const [value, setValue] = useState<T>(() => {
    // Get values ​​from local
    const jsonValue = localStorage.getItem(key);
    // If there is no element in local, define it with initial value
    if (jsonValue === null) {
      return initialValue;
    } else {
      // update local whenever state changes
      return JSON.parse(jsonValue);
    }
  });

  //2) 
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // 3) Return the state and change method to use the hook
  return [value, setValue] as [T, typeof setValue];
}
