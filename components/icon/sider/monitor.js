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
        d="M12.25 12.05a.75.75 0 010 1.5h-8a.75.75 0 010-1.5h8zM13.739 0a2.764 2.764 0 012.76 2.763v5.775a2.764 2.764 0 01-2.76 2.762H2.762A2.765 2.765 0 010 8.538V2.763A2.765 2.765 0 012.762 0h10.977zm0 1.5H2.762c-.696 0-1.262.566-1.262 1.263v5.775c0 .695.566 1.262 1.262 1.262h10.977c.695 0 1.26-.567 1.26-1.262V2.763c0-.697-.565-1.263-1.26-1.263z"
        transform="translate(4 6)"
      ></path>
    </svg>
  )
}

export default Icon
