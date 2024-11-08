interface TONProps {
  width?: number;
  height?: number;
}

export const TON = ({ width = 24, height = 24 }: TONProps):JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      fill="#0098EA"
      d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16"
    ></path>
    <path
      fill="#fff"
      d="M21.463 8.93H10.536c-2.009 0-3.282 2.167-2.271 3.92l6.743 11.688c.44.763 1.543.763 1.983 0l6.745-11.689c1.01-1.749-.264-3.919-2.272-3.919zm-6.46 12.103-1.469-2.843-3.544-6.338a.619.619 0 0 1 .545-.925H15v10.107zm7.003-9.182-3.542 6.34-1.469 2.842V10.924h4.467c.49 0 .778.52.544.926"
    ></path>
  </svg>
);