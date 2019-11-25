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
        d="M9.22 0c5.085 0 9.221 4.136 9.221 9.22 0 5.085-4.136 9.221-9.22 9.221C4.136 18.441 0 14.305 0 9.221 0 4.136 4.136 0 9.22 0zm0 1.676c-4.16 0-7.544 3.385-7.544 7.545s3.385 7.544 7.545 7.544 7.544-3.385 7.544-7.544c0-4.16-3.385-7.545-7.544-7.545zm.55 1.947v5.156h4.7v1.676H8.932a.839.839 0 01-.838-.838V3.623H9.77z"
        transform="translate(2.5 2.5)"
      ></path>
    </svg>
  )
}

export default Icon