import Markdown from 'react-markdown';
import { ListItem, ItemContent, ListItemImage } from '../components';
import Arrow from './Arrow';
import useIsDesktop from '../../../hooks/useIsDesktop';
import ResponsiveImage from '../../../components/ResponsiveImage/ResponsiveImage';

const ProjectItem = ({
  isLast,
  title,
  shortDescription,
  onHoverStart,
  onHoverEnd,
  id,
  mainImage,
  handleSelect,
}) => {
  const isDesktop = useIsDesktop();

  const variants = {
    initial: {
      y: 100,
      opacity: 0,
      pointerEvents: 'none',
    },
    animate: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto',
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <ListItem
      key={id}
      isLast={isLast}
      variants={variants}
      exit={{ x: 400, opacity: 0, pointerEvents: 'none' }}
      onHoverStart={() => onHoverStart()}
      onHoverEnd={() => onHoverEnd()}
      onClick={() => handleSelect(id)}
    >
      <ItemContent
        initial={{ x: -50 }}
        whileHover={{
          x: 0,
          transition: {
            duration: 0.4,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        }}
      >
        <Arrow />

        <div className="title">
          {title}
          <span>
            <Markdown>{shortDescription}</Markdown>
          </span>
        </div>

      </ItemContent>

      {!isDesktop && (
        <ListItemImage>
          <ResponsiveImage
            formats={mainImage.formats}
            mainSrc={mainImage.url}
            altText={mainImage.name}
          />
        </ListItemImage>
      )}
    </ListItem>
  );
};

export default ProjectItem;
