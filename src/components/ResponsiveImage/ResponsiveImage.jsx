import { useMemo } from 'react';
import { motion } from 'framer-motion';

const createSrcSetFormats = (formats) => Object.values(formats).reduce((acc, format) => acc.concat(`${format?.url} ${format?.width}w, `), '');

const ResponsiveImage = ({
  mainSrc,
  formats,
  altText,
  style,
  variants = {},
}) => {
  const srcSetFormats = useMemo(() => createSrcSetFormats(formats), [formats]);

  return (
    <motion.img
      src={mainSrc}
      srcSet={srcSetFormats}
      alt={altText}
      style={style}
      variants={variants}
    />
  );
};

export default ResponsiveImage;
