import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';

import { ContextControllerProvider } from 'context';

ReactDom.render(
  <ContextControllerProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextControllerProvider>,
  document.getElementById("root")
);