import { useQuery } from "@tanstack/react-query";
import { useTonAddress } from "@tonconnect/ui-react";
import { fetchBalance } from "../api/fetchBalance";

export const useGlobalBalance = () => {
  const walletAddress = useTonAddress();

  return useQuery({
    queryKey: ['balance', walletAddress],
    queryFn: () => fetchBalance(walletAddress!),
    enabled: !!walletAddress,
    staleTime: 1000 * 60 * 5, 
    gcTime: 1000 * 60 * 10,
  });
};