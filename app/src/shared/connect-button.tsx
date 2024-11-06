"use client";

import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";

const buttonClasses =
  "bg-white px-3 py-2 text-black rounded-[20px] font-semibold text-base";

export const ConnectButton = (): JSX.Element => {
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();

  const handleClick = () => {
    if (userFriendlyAddress) {
      tonConnectUI.disconnect();
    } else {
      tonConnectUI.openModal();
    }
  };

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {userFriendlyAddress ? "Отключить кошелёк" : "Подключить кошелёк"}
    </button>
  );
};
