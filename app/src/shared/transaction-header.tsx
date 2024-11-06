'use client'

import { useRouter } from "next/navigation";
import { Balance } from "./balance";
import { useGlobalBalance } from "@/app/src/hooks";
import { useEffect } from "react";

export const TransactionHeader = (): JSX.Element => {
  const router = useRouter();
  const { data: balance } = useGlobalBalance();

  useEffect(() => {
    if (!balance) {
      router.push('/');
    }
  }, [balance, router]);
  
  return (
    <div className="flex justify-between items-center text-white">
      <button
        className="bg-white px-3 py-2 text-black rounded-[20px] font-semibold text-base"
        onClick={() => router.push('/')}
      >
        Назад
      </button>
      <Balance />
    </div>
  );
};
