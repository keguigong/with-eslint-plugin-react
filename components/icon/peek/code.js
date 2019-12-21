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
        d="M13.159 12.922a.75.75 0 010 1.5H4.496a.75.75 0 010-1.5zM16.357 0c.715 0 1.297.582 1.297 1.297v9.207c0 .715-.582 1.297-1.297 1.297H1.297A1.299 1.299 0 010 10.504V1.297C0 .582.582 0 1.297 0zm-.203 1.5H1.5v8.8h14.654V1.5zm-5.746 5.865a.75.75 0 010 1.5H7.247a.75.75 0 010-1.5zM3.38 3.145a.75.75 0 011.061 0l1.99 1.99a.75.75 0 010 1.062l-1.99 1.99a.752.752 0 01-1.06 0 .75.75 0 010-1.061l1.458-1.46-1.459-1.46a.75.75 0 010-1.06z"
        transform="translate(3 5)"
      ></path>
    </svg>
  )
}

export default Icon
