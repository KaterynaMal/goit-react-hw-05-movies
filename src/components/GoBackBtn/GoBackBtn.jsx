import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';

const GoBackBtn = () => {
  const location = useLocation();
  const [backLink] = useState(location.state?.from ?? '/');
  return (
    <div>
      <Link to={backLink}>
        <button type="button" className={css.backBtn}>
          Go back
        </button>
      </Link>
    </div>
  );
};
export { GoBackBtn };
