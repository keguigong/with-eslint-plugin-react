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
        d="M12.793 11.625c.48 0 .87.445.87.994v2.158c0 .549-.39.994-.87.994H.87c-.48 0-.87-.445-.87-.994v-2.158c0-.55.39-.994.87-.994zm0-5.813c.48 0 .87.445.87.994v2.158c0 .55-.39.994-.87.994H.87c-.48 0-.87-.445-.87-.994V6.806c0-.549.39-.994.87-.994zm0-5.812c.48 0 .87.445.87.994v2.158c0 .549-.39.994-.87.994H.87C.39 4.146 0 3.7 0 3.152V.994C0 .444.39 0 .87 0z"
        transform="translate(5 4)"
      ></path>
    </svg>
  )
}

export default Icon