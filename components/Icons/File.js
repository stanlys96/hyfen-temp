import * as React from 'react';

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#fff" d="M6.5 37.5v-35h18.293l8.707 8.707V37.5z" />
    <path
      fill="#788b9c"
      d="M24.586 3 33 11.414V37H7V3h17.586M25 2H6v36h28V11l-9-9z"
    />
    <path fill="#fff" d="M24.5 11.5v-9h.293l8.707 8.707v.293z" />
    <path
      fill="#788b9c"
      d="M25 3.414 32.586 11H25V3.414M25 2h-1v10h10v-1l-9-9z"
    />
  </svg>
);

export default SvgComponent;
