import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './app/app';
import { WalletsApp } from '@deriv/wallets';
// import { Account } from '@deriv/account';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<App />} />
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="/wallets" element={<WalletsApp />} />
        <Route path="*" element={<div>404</div>} />
      </Switch>
    </BrowserRouter>
  </StrictMode>
);
