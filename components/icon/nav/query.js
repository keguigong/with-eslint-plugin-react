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
        d="M8.995 0a.75.75 0 01.75.75v.598h5.83a2.427 2.427 0 012.42 2.596l-.52 7.532a2.432 2.432 0 01-2.419 2.259h-1.574l1.827 2.16a.749.749 0 11-1.144.97l-2.647-3.13H9.744v1.7a.75.75 0 01-1.5 0v-1.7H6.617l-2.912 3.154A.75.75 0 012.6 15.872l1.974-2.137H2.99a2.436 2.436 0 01-2.417-2.243L.006 3.954a2.429 2.429 0 012.42-2.606h5.819V.75a.75.75 0 01.75-.75zm6.58 2.848H2.425l-.073.002a.926.926 0 00-.85.992l.568 7.537c.036.48.44.856.921.856h12.066c.484 0 .89-.38.922-.862l.52-7.537c.002-.573-.415-.988-.923-.988zm-3.45 2.122a.75.75 0 011.157.954l-2.529 3.068a.751.751 0 01-1.005.14L7.335 7.47 5.391 9.882a.747.747 0 01-1.055.113.75.75 0 01-.113-1.055l2.381-2.952a.749.749 0 011.01-.147l2.42 1.667z"
        transform="translate(3 4)"
      ></path>
    </svg>
  )
}

export default Icon
