import React from 'react';
import { StoreProvider, useStore } from '@deriv/stores';
import type { TCoreStores } from '@deriv/stores';
import TradeStore from './Stores/Modules/Trading/trade-store';

const TraderStoreContext = React.createContext<TradeStore | null>(null);

export const TraderStoreProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const { modules } = useStore();
  // const memoizedValue = useMemo(() => new TraderStore(), []);

  return (
    <TraderStoreContext.Provider value={modules?.trade}>
      {children}
    </TraderStoreContext.Provider>
  );
};

export const useTraderStore = () => {
  const store = React.useContext(TraderStoreContext);

  if (!store) {
    throw new Error('useTraderStore must be used within TraderStoreProvider');
  }

  return store;
};

export const TraderProviders = ({
  children,
  store,
}: React.PropsWithChildren<{ store: TCoreStores }>) => {
  return (
    <StoreProvider store={store}>
      <TraderStoreProvider>{children}</TraderStoreProvider>
    </StoreProvider>
  );
};

export default TraderProviders;
