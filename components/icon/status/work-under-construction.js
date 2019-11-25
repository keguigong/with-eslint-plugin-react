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
        d="M17.12 7.304h-.609l.978-.98v.612a.37.37 0 01-.369.368zm-14.751 0A.37.37 0 012 6.936v-.917l3.074-3.073h2.665L3.38 7.304H2.369zm0-4.358H3.66L2 4.605V3.314a.37.37 0 01.369-.368zm4.782 4.358H4.794l4.359-4.358h2.356L7.151 7.304zm5.772-4.358h2.57l-4.358 4.358h-2.57l4.358-4.358zm4.566.369V4.91l-2.392 2.393h-2.548l4.358-4.358h.213a.37.37 0 01.369.369zm-.369-1.87h-1.063V0h-1.5v1.446h-9.25V0h-1.5v1.446H2.37A1.87 1.87 0 00.5 3.315v3.62a1.87 1.87 0 001.869 1.869h1.438V14.5h1.5V8.804h9.25V14.5h1.5V8.804h1.063a1.868 1.868 0 001.869-1.868V3.314a1.87 1.87 0 00-1.869-1.868z"
        transform="translate(2 5)"
      ></path>
    </svg>
  )
}

export default Icon
