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
        d="M13.006 0a2.748 2.748 0 012.744 2.744v10.262a2.747 2.747 0 01-2.744 2.744H2.744A2.747 2.747 0 010 13.006V2.744A2.748 2.748 0 012.744 0zm0 1.5H2.744c-.685 0-1.244.559-1.244 1.244v10.262c0 .686.559 1.244 1.244 1.244h10.262c.685 0 1.244-.558 1.244-1.244V2.744c0-.685-.559-1.244-1.244-1.244zM7.771 3.569v4.613h4.206v1.5H7.021a.75.75 0 01-.75-.75V3.569h1.5z"
        transform="translate(4 5)"
      ></path>
    </svg>
  )
}

export default Icon
