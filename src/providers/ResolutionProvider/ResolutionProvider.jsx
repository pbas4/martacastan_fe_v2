import React, { createContext, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types';

export const ResolutionContext = createContext({ width: 1920, height: 1080 });

function getResolution() {
  // if no window (for server side rendering through gatsby)
  // fallback to default width/height
  if (typeof window === 'undefined') {
    return { width: 1920, height: 1080 };
  }

  return { width: window.innerWidth, height: window.innerHeight };
}

function ResolutionProvider({ wait, children }) {
  const [resolution, setResolution] = useState(() => getResolution());

  useEffect(() => {
    const resizeHandler = throttle(() => {
      setResolution(getResolution());
    }, wait);

    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [wait]);

  return (
    <ResolutionContext.Provider value={resolution}>
      {children}
    </ResolutionContext.Provider>
  );
}

ResolutionProvider.propTypes = {
  wait: PropTypes.number,
};

ResolutionProvider.defaultProps = {
  wait: 200,
};

export default ResolutionProvider;
