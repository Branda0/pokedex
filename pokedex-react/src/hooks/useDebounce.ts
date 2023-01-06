import { useEffect, useState } from "react";

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
