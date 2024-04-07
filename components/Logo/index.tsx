import React from 'react'

type Props = {
  className?: string
}

export const Logo: React.FC<Props> = className => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      width={120}
      className="fill-secondary"
      viewBox="0 0 438 93"
    >
      <path
        className="fill-primary"
        d="M437.7 0v16.9h-63.4V0h63.4ZM406 45.9h-31.7v-17H406a31.7 31.7 0 0 1 0 63.4V75.4a14.8 14.8 0 0 0 0-29.5Z"
      />
      <path d="M28.7 91.3C13.9 91.3.5 85 0 70l16.4-.6c.5 5.3 5.6 8.7 12.7 8.7 5.5 0 9.4-2 9.4-5.6 0-10.3-36-3.7-36-26.6 0-12.2 11.3-19.3 25-19.3 15.3 0 25.8 9 26 19.9l-16 .4c-.6-4.2-4.2-7.6-10.3-7.6-4.4 0-8.3 2-8.3 5.4 0 10.2 36.7 3 36.7 27 0 12.6-11.3 19.6-27 19.6ZM88.4 28h14.4v13.3H88.4v49H71.5v-49H61.4V28h10.1V9.7h16.9V28Zm66.7 33.2V27.9h17v62.2H158l-2.4-9.1c-3.8 6.5-10.4 10.4-19.5 10.4-13 0-25-8.2-25-27.2V27.9h16.9v33.7c0 12 6.8 15.3 13.3 15.3 8.1 0 14-5 14-15.8Zm78.6-24V.9h16.9v89.2h-17V79.4c-3 7.4-11.1 12-21.5 12-18.9 0-30-14.8-30-32.6 0-18.4 11.7-32.2 30.9-32.2 8 0 16 3.6 20.7 10.5Zm-17.2 39.1c9.9 0 17.2-7.2 17.2-17.2s-7.3-17-17.2-17c-10.2 0-17.3 7-17.3 17s7.1 17.2 17.3 17.2ZM272 21.7a9.5 9.5 0 0 1-9.5-9.5c0-5.3 4.2-9.5 9.5-9.5 5.2 0 9.5 4.2 9.5 9.5 0 5.2-4.3 9.5-9.5 9.5Zm-8.5 6.2h17v62.2h-17V28Zm60.2 63.4c-19.5 0-33.5-13.4-33.5-32.3 0-18.7 14-32.4 33.5-32.4 19.7 0 33.7 13.7 33.7 32.4 0 18.9-14 32.3-33.7 32.3Zm0-15.2c10 0 17.4-7.3 17.4-17.1 0-10-7.4-17.2-17.4-17.2-9.9 0-17.1 7.2-17.1 17.2 0 9.8 7.2 17.1 17.1 17.1Z" />
    </svg>
  )
}
