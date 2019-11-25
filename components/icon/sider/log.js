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
        d="M16.008 18.438H7.407a.908.908 0 01-.907-.908V6.409a.91.91 0 01.907-.909h4.759v4.063c0 .414.336.75.75.75h4v7.217a.909.909 0 01-.908.908zm.316-9.625h-2.658v-2.62l2.658 2.62zm1.869-.264l-4.395-4.333A.754.754 0 0013.271 4H7.407A2.411 2.411 0 005 6.409V17.53a2.41 2.41 0 002.407 2.408h8.601a2.41 2.41 0 002.408-2.408V9.084a.75.75 0 00-.223-.535z"
      ></path>
    </svg>
  )
}

export default Icon
