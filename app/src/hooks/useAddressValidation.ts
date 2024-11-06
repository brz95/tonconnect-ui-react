import { useQuery } from "@tanstack/react-query";
import { checkAddressExists } from "../api/checkAddressExists";

export const useAddressValidation = (walletAddress: string) => {
  return useQuery({
    queryKey: ["checkAddressExists", walletAddress],
    queryFn: () => checkAddressExists(walletAddress),
    enabled: !!walletAddress,
    retry: false,
  });
};
