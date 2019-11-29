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
        d="M8 0c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1.5A6.508 6.508 0 001.5 8c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5S11.584 1.5 8 1.5zm.75 9.332v1.558h-1.5v-1.558h1.5zM8 4.36a2.658 2.658 0 012.655 2.655A2.659 2.659 0 018.75 9.562v.712h-1.5V8.17H8a1.156 1.156 0 000-2.31c-.637 0-1.155.518-1.155 1.155h-1.5A2.658 2.658 0 018 4.36z"
        transform="translate(4 4)"
      ></path>
    </svg>
  )
}

export default Icon
