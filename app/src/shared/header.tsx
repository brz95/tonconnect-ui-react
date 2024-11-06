'use client'

import { ConnectButton } from "./connect-button";
import { Balance } from "./balance";
import { useGlobalBalance } from "@/app/src/hooks/useGlobalBalance";

export const Header = (): JSX.Element => {
  const { isLoading } = useGlobalBalance();

  return (
    <>
      {!isLoading && (
        <div className="flex justify-between items-center text-white max-xs:flex-wrap max-xs:gap-[19px] max-xs:mt-10 max-xs:flex-col-reverse">
          <Balance />
          <ConnectButton />
        </div>
      )}
    </>
  );
};
