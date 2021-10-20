import { useMemo } from 'react';

const createSrcSetFormats = (formats) => Object.values(formats).reduce((acc, format) => acc.concat(`${format?.url} ${format?.width}w, `), '');

const ResponsiveImage = ({
  mainSrc, formats, altText, style,
}) => {
  const srcSetFormats = useMemo(() => createSrcSetFormats(formats), [formats]);

  return (
    <img src={mainSrc} srcSet={srcSetFormats} alt={altText} style={style} />
  );
};

export default ResponsiveImage;
