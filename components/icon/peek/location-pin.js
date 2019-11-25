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
        d="M11.75 11A3.254 3.254 0 018.5 7.75a3.254 3.254 0 013.25-3.25A3.254 3.254 0 0115 7.75 3.254 3.254 0 0111.75 11m4.75-3.25A4.756 4.756 0 0011.75 3 4.756 4.756 0 007 7.75c0 2.362 1.738 4.312 4 4.674v7.826h1.5v-7.826c2.262-.362 4-2.312 4-4.674"
      ></path>
    </svg>
  )
}

export default Icon
