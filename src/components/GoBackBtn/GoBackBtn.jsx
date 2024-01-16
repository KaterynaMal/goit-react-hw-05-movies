import React, { useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';
// import css from './GoBackBtn.module.css';

const GoBackBtn = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  //  useEffect(() => {
    
  //   backLinkRef.current = location.state?.from || '/';
  // }, [location]);

  return (
    <div>
      <Link to={ backLinkRef}>Go back</Link>
    </div>
  );
};
export { GoBackBtn };
