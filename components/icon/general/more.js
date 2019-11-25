import React from 'react'

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        d="M1.125 0a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zm4.84 0a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zm4.91 0a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25z"
        transform="translate(6 11)"
      ></path>
    </svg>
  )
}

export default Icon
