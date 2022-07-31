import { useRoutes } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import routes from './routes';

function App() {
  const content = useRoutes(routes);

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | wanted-pre-onboarding-challenge-fe"
        defaultTitle="wanted-pre-onboarding-challenge-fe"
      />
      {content}
    </HelmetProvider>
  );
}

export default App;
