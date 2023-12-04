import React from 'react';
import Loadable from 'react-loadable';
import Routes from './Containers/Routes/routes';
import TradeHeaderExtensions from './Containers/trade-header-extensions';
import TradeFooterExtensions from './Containers/trade-footer-extensions';
import TradeSettingsExtensions from './Containers/trade-settings-extensions';
import { NetworkStatusToastErrorPopup } from '../Modules/Trading/Containers/toast-popup';
import initStore from './init-store';
// import 'sass/app.scss';
import '../sass/app.scss';
import type { TCoreStores } from '@deriv/stores';
import TraderProviders from '../trader-providers';

type Apptypes = {
  passthrough: {
    root_store: TCoreStores;
    WS: unknown;
  };
};

const TradeModals = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "trade-modals", webpackPrefetch: true */ './Containers/Modals'
    ),
  loading: () => null,
});

const App = ({ passthrough }: Apptypes) => {
  const root_store = initStore(passthrough.root_store, passthrough.WS);
  React.useEffect(() => {
    return () => root_store.ui.setPromptHandler(false);
  }, [root_store]);

  return (
    <TraderProviders store={root_store}>
      <Routes />
      <TradeModals />
      <NetworkStatusToastErrorPopup />
      <TradeHeaderExtensions store={root_store} />
      <TradeFooterExtensions />
      <TradeSettingsExtensions store={root_store} />
    </TraderProviders>
  );
};

export default App;
