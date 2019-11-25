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
        d="M11.69 15.13a2.816 2.816 0 01-2.811-2.77c0-.015.008-.03.008-.044 0-.016-.008-.03-.008-.045a2.816 2.816 0 012.81-2.771 2.818 2.818 0 012.816 2.816 2.818 2.818 0 01-2.816 2.815m8.003-3.565h-3.764A4.313 4.313 0 0011.69 8a4.313 4.313 0 00-4.239 3.566h-3.7a.75.75 0 100 1.5h3.7a4.313 4.313 0 004.24 3.565 4.313 4.313 0 004.239-3.565h3.763a.75.75 0 000-1.5"
      ></path>
    </svg>
  )
}

export default Icon
