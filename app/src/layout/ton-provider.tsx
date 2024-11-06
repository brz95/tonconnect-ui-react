"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { ReactNode } from "react";

interface ITonProvider {
  children: ReactNode;
}

export const TonProvider = ({ children }: ITonProvider) => {
  return (
    <TonConnectUIProvider
      manifestUrl="https://tonconnect-ui-react-app.vercel.app/tonconnect-manifest.json"
      language="ru"
    >
      {children}
    </TonConnectUIProvider>
  );
};
