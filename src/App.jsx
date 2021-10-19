import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ResolutionProvider } from './providers/ResolutionProvider';
// import { ReactQueryDevtools } from 'react-query/devtools';
import theme from './theme/theme';
import components from './theme/components';
import GlobalStyles from './theme/globalStyles';
import { GlobalProvider } from './context/globalContext';

const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const About = lazy(() => import('./pages/About/About'));
const Projects = lazy(() => import('./pages/Projects/Projects'));

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={{ ...theme, ...components }}>
        <ResolutionProvider>
          <GlobalStyles />
          <Router>
            <Suspense fallback="">
              <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
              </Switch>
            </Suspense>
          </Router>
        </ResolutionProvider>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
