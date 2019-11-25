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
        d="M7.622 0c.382 0 .743.203.94.53.2.327.213.72.038 1.056a5.277 5.277 0 00-.602 2.456c0 1.657.755 3.192 2.072 4.212.382.295.527.78.37 1.239-.154.454-.581.76-1.06.76H6.002v3.776a.75.75 0 01-1.5 0v-3.776H1.124c-.48 0-.906-.306-1.062-.76a1.099 1.099 0 01.37-1.24 5.293 5.293 0 002.074-4.211c0-.862-.203-1.688-.603-2.455A1.07 1.07 0 011.94.53C2.138.203 2.5 0 2.882 0z"
        transform="translate(6.5 5)"
      ></path>
    </svg>
  )
}

export default Icon
