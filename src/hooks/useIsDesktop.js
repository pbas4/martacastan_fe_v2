import useScreen from './useAdaptive';

export default function useIsDesktop() {
  const screenSize = useScreen();

  return screenSize !== 'sm';
}
