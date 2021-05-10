import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { outerWidth: width, outerHeight: height } = window;
  return {
    width,
    height: height - 56
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<{
    height: number;
    width: number;
  }>({
    height: 0,
    width: 0
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    // setTimeout(handleResize, 500);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
