"use client";

import { useGlobalBalance } from "@/app/src/hooks";
import { TON } from "@/app/src/shared/ui";

export const Balance = (): JSX.Element => {
  const { data: balance } = useGlobalBalance();

  if (!balance) {
    return <div />;
  }

  return (
    <h2 className="text-lg font-bold">
      <span className="flex items-center gap-[4px]">
        Баланс: {balance} <TON />
      </span>
    </h2>
  );
};
