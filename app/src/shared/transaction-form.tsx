"use client";

import { useState } from "react";
import { TON } from "@/app/src/shared/ui";
import { InputField } from "./input-field";
import {
  useDebouncedAddress,
  useTONAmountValidation,
  useTransaction,
} from "@/app/src/hooks";
import { Notification } from "./notification";

export const TransactionForm = (): JSX.Element => {
  const [address, setAddress] = useState("");

  const debouncedAddress = useDebouncedAddress(address);
  const { amount, handleAmountChange, isAmountValid } =
    useTONAmountValidation();
  const {
    handleSendTransaction,
    addressExists,
    isLoading,
    error,
    notification,
    setNotification
  } = useTransaction(debouncedAddress, amount);

  const isAddressValid = address.trim() !== "" && addressExists;

  const handlePasteAddress = async () => {
    const text = await navigator.clipboard.readText();
    setAddress(text);
  };
  console.log(notification);
  return (
    <>
      <div className="flex flex-col justify-center gap-5 h-[60vh] max-w-[300px] mx-auto">
        <div className="flex justify-center spin-3d">
          <TON width={50} height={50} />
        </div>
        <InputField
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Введите адрес кошелька"
          showPasteIcon
          onPaste={handlePasteAddress}
        />
        <InputField
          value={amount}
          onChange={handleAmountChange}
          placeholder="Введите количество TON"
        />
        <button
          className={`bg-white mx-auto px-3 py-2 w-fit text-black rounded-[20px] font-semibold text-base 
          ${
            !isAddressValid || !isAmountValid
              ? "bg-gray-50 bg-opacity-70 cursor-not-allowed"
              : ""
          }`}
          onClick={handleSendTransaction}
          disabled={
            !isAddressValid || !isAmountValid || isLoading || !!error?.message
          }
        >
          {isLoading
            ? "Проверка адреса..."
            : !!error?.message
            ? "Адрес не существует"
            : "Отправить транзакцию"}
        </button>
      </div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
};
