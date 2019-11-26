import React from 'react'

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        d="M8.978 4.122L5.075.22a.749.749 0 10-1.06 1.06l2.622 2.622H.75a.75.75 0 000 1.5h5.887L4.015 8.024a.75.75 0 001.06 1.061l3.903-3.902a.752.752 0 000-1.06"
        transform="translate(3 3)"
      ></path>
    </svg>
  )
}

export default Icon
