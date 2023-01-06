import { useEffect, useState } from "react";

// hook to delay fetch 500ms after last search bar update
const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounceHandler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [delay, value]);

  return debouncedValue;
};

export default useDebounce;
