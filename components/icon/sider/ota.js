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
        fill="#696D7F"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        d="M15.75 5.48v7.525a2.748 2.748 0 01-2.744 2.745H2.744v-1.5h10.262c.685 0 1.244-.559 1.244-1.245V5.48h1.5zM7.344 3.095a.75.75 0 011.061 0l4 4a.75.75 0 11-1.06 1.06l-2.72-2.72v6.44a.75.75 0 01-1.5 0v-6.44l-2.72 2.72a.75.75 0 11-1.06-1.06zm5.662-3.096v1.5H2.744c-.685 0-1.244.56-1.244 1.245v7.526H0V2.745A2.748 2.748 0 012.744-.001h10.262z"
        transform="translate(4 5)"
      ></path>
    </svg>
  )
}

export default Icon
