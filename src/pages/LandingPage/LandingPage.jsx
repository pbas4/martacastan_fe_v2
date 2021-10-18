import Layout from '../../components/pageLayout/Layout/Layout';
import FullPage from './components/FullPage/FullPage';

import { mockedLandingPageData } from './mock';

const LandingPage = () => (
  <Layout>
    <FullPage landingPageData={mockedLandingPageData} />
  </Layout>
);

export default LandingPage;
