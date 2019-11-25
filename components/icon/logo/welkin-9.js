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
        d="M12.403 8.617v2.02h-2.02v-2.02h2.02zm5.026 0v2.02h-2.02v-2.02h2.02zm-2.538 0v2.02h-2.022v-2.02h2.022zm5.026 0v2.02h-2.021v-2.02h2.02zM6.822.694c1.06-.063 1.87-.041 2.993.331v9.613H3.21c-1.393 0-2.472-.687-2.96-1.885C-.266 7.49.036 5.96.982 5.033c.397-.39 1.121-.88 2.25-.892C3.373 1.91 5.158.79 6.822.694zm5.58 5.383V8.1h-2.02V6.077h2.02zm2.489 0V8.1h-2.022V6.077h2.022zM12.403 3.54v2.02h-2.021V3.54h2.02zm4.975 0v2.02h-2.02V3.54h2.02zm-2.487 0v2.02h-2.022V3.54h2.022zM12.403.999v2.022h-2.02V.999h2.02z"
        transform="translate(2 7)"
      ></path>
    </svg>
  )
}

export default Icon
