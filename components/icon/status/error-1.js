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
        d="M8.851 0c.834 0 1.581.431 1.998 1.153l6.541 11.33a2.283 2.283 0 010 2.307 2.282 2.282 0 01-1.998 1.153H2.31c-.834 0-1.58-.43-1.997-1.153a2.283 2.283 0 010-2.308l6.54-11.329A2.284 2.284 0 018.851 0zm0 1.5c-.14 0-.489.04-.699.403l-6.54 11.33a.795.795 0 000 .807c.07.121.278.403.698.403h13.082c.42 0 .628-.282.698-.403a.792.792 0 00.001-.808L9.551 1.903a.794.794 0 00-.7-.403zm.899 9.9v1.458h-1.5V11.4h1.5zm0-6.52v5.5h-1.5v-5.5h1.5z"
        transform="translate(3 5)"
      ></path>
    </svg>
  )
}

export default Icon
