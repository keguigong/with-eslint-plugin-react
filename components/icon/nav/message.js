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
        d="M14.41 10.3l-1.932-1.334V5.553c0-1.17-.952-2.122-2.122-2.122H4.247l.005-1.22A.71.71 0 014.96 1.5h8.741c.391 0 .71.32.71.712V10.3zm-3.432 1.085a.623.623 0 01-.622.623h-6.15L1.5 13.775V5.553c0-.342.28-.622.622-.622h8.234c.343 0 .622.28.622.622v5.832zm4.932-9.173C15.91.992 14.92 0 13.701 0h-8.74a2.213 2.213 0 00-2.209 2.217L2.747 3.43h-.625C.952 3.43 0 4.383 0 5.553v10.993l4.652-3.038h5.704c1.17 0 2.122-.952 2.122-2.123v-.597l3.432 2.37V2.213z"
        transform="translate(4 4)"
      ></path>
    </svg>
  )
}

export default Icon
