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
      <g
        fill="currentColor"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(3 5)"
      >
        <path d="M1.51 3.625h14.25v7.395a1.858 1.858 0 01-1.854 1.855H3.366A1.858 1.858 0 011.51 11.02V3.625zM.01 11.02a3.359 3.359 0 003.356 3.355h10.54a3.359 3.359 0 003.354-3.355V2.125H.01v8.895z"></path>
        <path d="M3.732 10.416a.748.748 0 001.06 0l1.99-1.99a.75.75 0 000-1.061l-1.99-1.99a.75.75 0 10-1.06 1.061L5.19 7.895l-1.46 1.46a.75.75 0 000 1.061M7.598 11.095h3.16a.75.75 0 000-1.5h-3.16a.75.75 0 000 1.5"></path>
        <path d="M0 1.5L17.261 1.5 17.261 0 0 0z"></path>
      </g>
    </svg>
  )
}

export default Icon
