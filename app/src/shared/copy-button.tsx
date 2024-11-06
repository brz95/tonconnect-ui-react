interface ICopyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const CopyButton = ({ children, onClick }: ICopyButtonProps): JSX.Element => (
  <div
    className={`flex items-center gap-2 justify-center mt-4 ${
      onClick ? "cursor-pointer" : ""
    }`}
    onClick={onClick}
  >
    {children}
  </div>
);
