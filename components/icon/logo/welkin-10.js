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
        d="M10.012 11.509l4.129 3.426 1.767-1.154v1.293l-5.896 3.536-5.896-3.536v-1.293l1.767 1.154 4.13-3.426zM4.068 7.106L10 10.77l-4.117 3.437L0 10.364l4.068-3.258zm11.864 0L20 10.364l-5.883 3.842L10 10.769l5.932-3.663zM14.117.008L20 3.848l-4.068 3.258L10 3.443 4.068 7.106 0 3.85 5.883.008 10 3.443 14.117.008z"
        transform="translate(2 2.5)"
      ></path>
    </svg>
  )
}

export default Icon
