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
        d="M15.804 4A1.7 1.7 0 0117.5 5.698v12.736a.751.751 0 01-1.249.56l-4.501-4.012-4.501 4.012A.751.751 0 016 18.434V5.72C6 4.772 6.749 4 7.67 4h8.134z"
      ></path>
    </svg>
  )
}

export default Icon
