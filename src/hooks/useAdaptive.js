import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import theme from '../theme/theme';

const isBrowser = typeof window !== 'undefined';

export default function useAdaptive() {
  let windowWidth = 1;
  if (isBrowser) windowWidth = window?.innerWidth;
  const [resolution, setResolution] = useState(windowWidth);

  useEffect(() => {
    const resizeHandler = throttle(
      () => {
        setResolution(window?.innerWidth);
      },
      200, // evaluate this reason
    );

    window?.addEventListener('resize', resizeHandler);

    return () => {
      window?.removeEventListener('resize', resizeHandler);
    };
  }, []);

  if (resolution < theme.screenWidths.md.width) return 'sm';
  if (resolution >= theme.screenWidths.md.width && resolution < theme.screenWidths.lg.width) return 'md';
  if (resolution >= theme.screenWidths.lg.width && resolution < theme.screenWidths.xl.width) return 'lg';
  return 'xl';
}
