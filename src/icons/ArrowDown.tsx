import React from 'react';

type ArrowDownPropsType = {
    isOpenTableList: boolean;
}

const ArrowDown = ({isOpenTableList}: ArrowDownPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`w-5 h-5 transition-transform duration-300 ${isOpenTableList ? 'rotate-180' : 'rotate-0'}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default ArrowDown;
