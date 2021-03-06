import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/pageLayout/Header';
import Layout from './components/pageLayout/Layout';
import logo from './assets/logo.png';
import theme from './theme/theme';
import components from './theme/components';
import GlobalStyles from './theme/globalStyles';
import { ResolutionProvider } from './providers/ResolutionProvider';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const About = lazy(() => import('./pages/About/About'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Project = lazy(() => import('./pages/Project/Project'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ ...theme, ...components }}>
        <ResolutionProvider>
          <GlobalStyles />
          <Router>
            <Header logoImage={logo} />

            <Layout>
              <Suspense fallback="">
                <Switch>
                  <Route path="/" exact component={Homepage} />
                  <Route path="/about" component={About} />
                  <Route path="/projects/:projectId" component={Project} />
                  <Route path="/projects" component={Projects} />
                  {/* TODO: add not found */}
                </Switch>
              </Suspense>
            </Layout>
          </Router>
        </ResolutionProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
