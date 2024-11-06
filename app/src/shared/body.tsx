"use client";

import Lottie from "lottie-react";
import { Copy, CopyCheck } from "lucide-react";
import { useCopyToClipboard } from "react-use";
import { CopyButton } from "./copy-button";
import { useTonAddress } from "@tonconnect/ui-react";
import { useGlobalBalance } from "@/app/src/hooks/useGlobalBalance";
import { useRouter } from "next/navigation";

import spinner from "@/app/src/assets/lottie/spinner.json";
import confetti from "@/app/src/assets/lottie/confetti.json";

export const Body = (): JSX.Element => {
  const router = useRouter();

  const userFriendlyAddress = useTonAddress();
  const { isLoading } = useGlobalBalance();
  const [state, copyToClipboard] = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard(userFriendlyAddress);
  };

  const renderCopyButton = () => {
    if (state.value) {
      return (
        <CopyButton>
          <Lottie
            animationData={confetti}
            className="absolute h-[60vh] z-0"
            autoPlay
            loop={false}
          />
          Скопировано
          <CopyCheck />
        </CopyButton>
      );
    }
    return (
      <CopyButton onClick={handleCopy}>
        Скопировать
        <Copy />
      </CopyButton>
    );
  };

  if (isLoading) {
    return <Lottie className="h-[60vh]" animationData={spinner} />;
  }

  return (
    <div className="flex items-center justify-center min-h-[65vh]  text-white text-center">
      {userFriendlyAddress && (
        <div className="flex flex-col justify-center max-w-[300px] gap-12 break-words">
          <div>
            <h2 className="font-bold text-lg mb-2">Адрес кошелька:</h2>
            <code>{userFriendlyAddress}</code>
            {renderCopyButton()}
          </div>
          <button
            className="bg-white mx-auto px-3 py-2 w-fit text-black rounded-[20px] font-semibold text-base z-10"
            onClick={() => router.push("/transaction")}
          >
            Отправить транзакцию
          </button>
        </div>
      )}
    </div>
  );
};
