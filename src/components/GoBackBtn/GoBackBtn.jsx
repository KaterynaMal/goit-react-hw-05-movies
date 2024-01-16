import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';

const GoBackBtn = ({ location }) => {
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <div>
      <Link to={backLinkRef.current}>
        <button type="button" className={css.backBtn}>
          Go Back
        </button>
      </Link>
    </div>
  );
};
export { GoBackBtn };
