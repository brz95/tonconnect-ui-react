import { ClipboardCopy } from "lucide-react";
import React from "react";

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  showPasteIcon?: boolean;
  onPaste?: () => void;
}

export const InputField = ({
  value,
  onChange,
  placeholder,
  showPasteIcon = false,
  onPaste,
}: InputFieldProps): JSX.Element => (
  <div className="relative">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    />
    {showPasteIcon && (
      <button
        type="button"
        onClick={onPaste}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 focus:outline-none"
      >
        <ClipboardCopy size={20} />
      </button>
    )}
  </div>
);
