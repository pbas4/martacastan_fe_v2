import { useEffect, useState } from 'react';
import axios from '../../resource/instance';
import FullPage from './components/FullPage/FullPage';

const LandingPage = () => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const response = await axios.get('/homepage');
    setData(response.data);
  }, []);

  return (
    data && <FullPage landingPageData={data} />
  );
};

export default LandingPage;
