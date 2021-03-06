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
        d="M8.188 0c4.55 0 8.25 3.701 8.25 8.25 0 4.549-3.7 8.25-8.25 8.25a8.318 8.318 0 01-1.64-.163l.296-1.471a6.758 6.758 0 008.094-6.616 6.758 6.758 0 00-8.093-6.616L6.548.163A8.318 8.318 0 018.188 0zM3.225 12.824a6.752 6.752 0 002.01 1.497l-.658 1.348a8.239 8.239 0 01-2.454-1.827zM1.488 9.076c.103.84.36 1.642.762 2.385l-1.319.715a8.17 8.17 0 01-.93-2.918zm4.587-4.525a.749.749 0 011.06 0l3.168 3.169a.749.749 0 010 1.06l-3.137 3.138a.752.752 0 01-1.06 0 .75.75 0 010-1.061L8.71 8.25 6.074 5.611a.749.749 0 010-1.06zm-5.13-.254l1.316.72A6.673 6.673 0 001.49 7.4L.002 7.212a8.188 8.188 0 01.943-2.915zm3.66-3.48l.652 1.35a6.743 6.743 0 00-2.015 1.49l-1.1-1.019A8.212 8.212 0 014.606.817z"
        transform="translate(3 4)"
      ></path>
    </svg>
  )
}

export default Icon
