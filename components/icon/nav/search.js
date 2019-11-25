import React from 'react'

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <path
          id="a"
          d="M0.0003 0.0001L16.985 0.0001 16.985 16.9849 0.0003 16.9849z"
        ></path>
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(4 4)"
      >
        <mask id="b" fill="#fff">
          <use xlinkHref="#a"></use>
        </mask>
        <path
          fill="currentColor"
          d="M8.092 14.685A6.6 6.6 0 011.5 8.092 6.6 6.6 0 018.092 1.5a6.6 6.6 0 016.593 6.592 6.6 6.6 0 01-6.593 6.593zm8.893 1.24l-2.668-2.669a8.055 8.055 0 001.868-5.164C16.185 3.63 12.555 0 8.092 0 3.63 0 0 3.63 0 8.092c0 4.462 3.63 8.093 8.092 8.093a8.055 8.055 0 005.164-1.868l2.668 2.668 1.061-1.06z"
          mask="url(#b)"
        ></path>
      </g>
    </svg>
  )
}

export default Icon
