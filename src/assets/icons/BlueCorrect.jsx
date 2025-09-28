import * as React from "react";
const SvgBlueCorrect = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fill="#228be6"
      strokeMiterlimit={10}
      d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3m6.707 9.707-7.56 7.56a1 1 0 0 1-1.414 0L9.28 16.814a.999.999 0 1 1 1.414-1.414l2.746 2.746 6.853-6.853a.999.999 0 1 1 1.414 1.414"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
      transform="scale(8.53333)"
    />
  </svg>
);
export default SvgBlueCorrect;
