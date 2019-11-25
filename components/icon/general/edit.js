import React from 'react'

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <defs>
        <path id="a" d="M0.0004 0.5L17.5 0.5 17.5 18 0.0004 18z"></path>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <mask fill="#fff" transform="translate(3 3) translate(0 .5)">
          <use xlinkHref="#a"></use>
        </mask>
        <path
          fill="currentColor"
          d="M8.75 1v1.5h-6.4a.85.85 0 00-.85.85v12.8c0 .469.38.85.85.85h12.8a.85.85 0 00.85-.85v-6.4h1.5v6.4a2.352 2.352 0 01-2.35 2.35H2.35A2.352 2.352 0 010 16.15V3.35A2.352 2.352 0 012.35 1h6.4zm6.67 1.02l1.06 1.06-11.2 11.2-1.06-1.06 11.2-11.2z"
          transform="translate(3 3)"
        ></path>
      </g>
    </svg>
  )
}

export default Icon
