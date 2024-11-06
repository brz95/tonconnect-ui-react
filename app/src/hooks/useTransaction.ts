import { useTonConnectUI } from "@tonconnect/ui-react";
import { SendTransactionRequest } from "@tonconnect/sdk";
import { useAddressValidation } from "./useAddressValidation";
import { useState } from "react";

export const useTransaction = (address: string, amount: string) => {
  const [tonConnectUI] = useTonConnectUI();
  const { data: addressExists, isLoading, error } = useAddressValidation(address);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSendTransaction = async () => {
    const transaction: SendTransactionRequest = {
      validUntil: Date.now() + 5 * 60 * 1000,
      messages: [
        {
          address,
          amount: (parseFloat(amount) * 1_000_000_000).toString(),
        },
      ],
    };

    try {
      await tonConnectUI.sendTransaction(transaction).then(() => {
        setNotification({
          show: true,
          type: "success",
          message: "Транзакция успешно выполнена"
        });
      });
    } catch {
      setNotification({
        show: true,
        type: "error",
        message: "Ошибка при выполнении транзакции"
      });
    }
  };

  return { handleSendTransaction, addressExists, isLoading, error, notification, setNotification };
};