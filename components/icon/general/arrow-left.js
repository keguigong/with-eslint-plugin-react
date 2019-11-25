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
        d="M5.686.22a.75.75 0 010 1.06L1.81 5.157l3.876 3.876a.749.749 0 11-1.06 1.06L.22 5.685a.752.752 0 010-1.06L4.626.218a.749.749 0 011.06 0zm5.925 0a.75.75 0 010 1.06L7.736 5.157l3.876 3.876a.749.749 0 11-1.06 1.06L6.145 5.685a.752.752 0 010-1.06L10.553.218a.749.749 0 011.06 0z"
        transform="translate(6 7)"
      ></path>
    </svg>
  )
}

export default Icon