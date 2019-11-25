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
        d="M6.731 7.769v5.107h-1.5v-2.544l-3.18 3.182-1.06-1.061 3.182-3.184H1.63v-1.5h5.101zm5.74-6.797l1.062 1.06-3.185 3.184h2.544v1.5H7.79V1.609h1.5v2.543l3.18-3.18z"
        transform="translate(4.5 5)"
      ></path>
    </svg>
  )
}

export default Icon