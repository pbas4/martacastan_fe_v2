import { useQuery } from 'react-query';
import { getHomepage } from '../../resource/homepage';
import FullPage from './components/FullPage/FullPage';

const LandingPage = () => {
  const { isLoading, error, data: homepageData } = useQuery('homepage', getHomepage);

  return (
    !isLoading && !error && <FullPage landingPageData={homepageData} />
  );
};

export default LandingPage;
