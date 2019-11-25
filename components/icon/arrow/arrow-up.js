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
        d="M7.123 10.183L3.22 6.28A.75.75 0 114.28 5.22l3.373 3.372 3.372-3.372a.75.75 0 111.06 1.06l-3.902 3.903a.744.744 0 01-.53.22.744.744 0 01-.53-.22z"
        transform="rotate(-180 7.653 7.701)"
      ></path>
    </svg>
  )
}

export default Icon
