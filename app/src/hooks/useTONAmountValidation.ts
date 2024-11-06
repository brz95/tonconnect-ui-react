import { useState } from "react";

export const useTONAmountValidation = () => {
  const [amount, setAmount] = useState<string>("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(",", ".");

    if (inputValue === "") {
      setAmount(inputValue);
      return;
    }

    if (/^0[0-9]+/.test(inputValue)) {
      inputValue = inputValue.replace(/^0+/, "");
    }

    if (/^\d*\.?\d*$/.test(inputValue) && parseFloat(inputValue) <= 100) {
      setAmount(inputValue);
    } else if (parseFloat(inputValue) > 100) {
      setAmount("100");
    }
  };

  const isAmountValid = parseFloat(amount) > 0;
  return { amount, handleAmountChange, isAmountValid };
};