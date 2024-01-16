import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const GoBackBtn = ({ location }) => {
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>
    </div>
  );
};
export { GoBackBtn };
