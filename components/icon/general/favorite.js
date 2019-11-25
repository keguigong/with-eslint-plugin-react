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
        d="M6.375.71a.75.75 0 010 1.5H1.67c-.092 0-.17.1-.17.22v11.04l3.751-3.343a.749.749 0 01.998 0L10 13.47V7.947a.75.75 0 011.5 0v7.196a.751.751 0 01-1.249.56L5.75 11.691l-4.501 4.012A.751.751 0 010 15.143V2.43C0 1.481.749.71 1.67.71zM10.75 0a.75.75 0 01.75.75v1.302h1.302a.75.75 0 010 1.5H11.5v1.302a.75.75 0 01-1.5 0V3.552H8.698a.75.75 0 010-1.5H10V.75a.75.75 0 01.75-.75z"
        transform="translate(5 4)"
      ></path>
    </svg>
  )
}

export default Icon
