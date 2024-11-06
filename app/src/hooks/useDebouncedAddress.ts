import { useState } from "react";
import { useDebounce } from "react-use";

export const useDebouncedAddress = (address: string, delay = 500) => {
  const [debouncedAddress, setDebouncedAddress] = useState(address);

  useDebounce(
    () => {
      setDebouncedAddress(address);
    },
    delay,
    [address]
  );

  return debouncedAddress;
};