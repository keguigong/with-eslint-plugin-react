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
        d="M9.356 10.5c-.142.865-.88 1.5-1.744 1.5H0v-1.5h9.356zm2.954-5.25c-.14.865-.88 1.5-1.744 1.5H0v-1.5h12.31zM16.25 0c-.141.865-.88 1.5-1.744 1.5H0V0h16.25z"
        transform="translate(4 6)"
      ></path>
    </svg>
  )
}

export default Icon
