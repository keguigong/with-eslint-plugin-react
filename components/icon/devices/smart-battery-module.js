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
        d="M16 4.761v7.154a2.294 2.294 0 01-2.292 2.292H3.184a2.293 2.293 0 01-2.291-2.292V4.763H16zm-1.5 1.5H2.393v5.654a.79.79 0 00.79.792h10.525a.792.792 0 00.792-.792V6.263zm-6.123.611l1.223.87-.728 1.024h.814a.75.75 0 01.636 1.146l-1.424 2.285-1.272-.793.709-1.138h-.916a.75.75 0 01-.611-1.185l1.569-2.209zM5.31 1v1.474h6.38V1h2.37v1.474H17v1.5H0v-1.5h2.94V1h2.37z"
        transform="translate(3 5)"
      ></path>
    </svg>
  )
}

export default Icon
