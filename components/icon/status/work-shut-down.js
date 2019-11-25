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
        d="M5.097 1.82a.749.749 0 01-.326 1.01A5.978 5.978 0 001.5 8.175c0 3.309 2.691 6 6 6s6-2.691 6-6a6.008 6.008 0 00-3.096-5.252.75.75 0 01.727-1.312A7.506 7.506 0 0115 8.175c0 4.136-3.364 7.5-7.5 7.5S0 12.31 0 8.175a7.473 7.473 0 014.088-6.681.752.752 0 011.009.327zM7.5 0a.75.75 0 01.75.75v6.304a.75.75 0 01-1.5 0V.75A.75.75 0 017.5 0z"
        transform="translate(4 4)"
      ></path>
    </svg>
  )
}

export default Icon
