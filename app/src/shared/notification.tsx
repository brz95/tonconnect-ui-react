"use client";

import { useEffect, useState } from "react";

import { Success } from "@/app/src/shared/ui/success";
import { Error } from "@/app/src/shared/ui/error";

interface NotificationProps {
  message: string;
  type: "error" | "success";
  duration?: number;
  onClose: () => void;
}

export const Notification = ({
  message,
  type,
  onClose,
  duration = 3000,
}: NotificationProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`notification ${type}`}>
      {type === "success" && <Success />}
      {type === "error" && <Error />}
      {message}
    </div>
  );
};
