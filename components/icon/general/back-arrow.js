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
        d="M13.462 6.068H2.292L6.24 2.121a1.5 1.5 0 000-2.12L.414 5.825a1.41 1.41 0 000 1.996l5.738 5.738a1.5 1.5 0 000-2.12L2.28 7.567h9.682a1.5 1.5 0 001.5-1.5"
        transform="translate(5 5)"
      ></path>
    </svg>
  )
}

export default Icon
