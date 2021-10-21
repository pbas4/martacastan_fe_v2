import React, { useEffect, useState, useCallback } from 'react';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';
import useIsDesktop from '../../../../hooks/useIsDesktop';
import FullPageItem from './components/FullPageItem/FullPageItem';
import { NavigationContainer } from './components';
import NavItem from './components/NavItem/NavItem';

const FullPage = ({ landingPageData }) => {
  const history = useHistory();
  const isDesktop = useIsDesktop();

  const [component, setComponent] = useState(0);

  const scrollDown = useCallback(
    debounce(
      () => setComponent((prevComp) => (prevComp < 2 ? prevComp + 1 : prevComp)),
      400, { leading: false, trailing: true },
    ),
    [],
  );

  const scrollUp = useCallback(
    debounce(
      () => setComponent((prevComp) => (prevComp > 0 ? prevComp - 1 : prevComp)),
      400, { leading: false, trailing: true },
    ),
    [],
  );

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      if (e.deltaY < 0) {
        scrollUp();
      } else if (e.deltaY > 0) {
        scrollDown();
      }
    });

    return () => window.removeEventListener('wheel', (e) => {
      if (e.deltaY < 0) {
        scrollUp();
      } else if (e.deltaY > 0) {
        scrollDown();
      }
    });
  }, []);

  return (
    <motion.div
      drag="y"
      exit={{ opacity: 0 }}
      onDrag={
        (e, info) => {
          if (info.offset.y > 0) {
            scrollUp();
          } else if (info.offset.y < 0) {
            scrollDown();
          }
        }
      }
    >
      {isDesktop && (
        <AnimateSharedLayout>
          <NavigationContainer>
            <NavItem
              isActive={component === 0}
              handleClick={() => setComponent(0)}
            />
            <NavItem
              isActive={component === 1}
              handleClick={() => setComponent(1)}
            />
            <NavItem
              isActive={component === 2}
              handleClick={() => setComponent(2)}
            />
          </NavigationContainer>
        </AnimateSharedLayout>
      )}

      <AnimatePresence>
        {component === 0 && (
          <FullPageItem
            title={landingPageData.home_title}
            description={landingPageData.home_description}
            bgImage={landingPageData.home_bg_image}
            handleOnClick={() => {}}
            key={0}
            componentIndex={component}
          />
        )}

        {component === 1 && (
          <FullPageItem
            title={landingPageData.projects_title}
            description={landingPageData.projects_description}
            bgImage={landingPageData.projects_bg_image}
            handleOnClick={() => history.push('./projects')}
            key={1}
          />
        )}

        {component === 2 && (
          <FullPageItem
            title={landingPageData.about_title}
            description={landingPageData.about_description}
            bgImage={landingPageData.about_bg_image}
            handleOnClick={() => history.push('./about')}
            key={2}
          />
        )}

      </AnimatePresence>
    </motion.div>
  );
};

export default FullPage;
