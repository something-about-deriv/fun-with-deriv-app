import React from 'react';
import GeneralStore from './general-store';
import AdvertiserPageStore from './advertiser-page-store';
import BuySellStore from './buy-sell-store';
import FloatingRateStore from './floating-rate-store';
import MyAdsStore from './my-ads-store';
import MyProfileStore from './my-profile-store';
import OrderStore from './order-store';
import OrderDetailsStore from './order-details-store';
import SendbirdStore from './sendbird-store';

export default class RootStore {
  constructor() {
    // @ts-expect-error fix this
    this.general_store = new GeneralStore(this); // Leave at the top!
    // @ts-expect-error fix this
    this.advertiser_page_store = new AdvertiserPageStore(this);
    // @ts-expect-error fix this
    this.buy_sell_store = new BuySellStore(this);
    // @ts-expect-error fix this
    this.floating_rate_store = new FloatingRateStore(this);
    // @ts-expect-error fix this
    this.my_ads_store = new MyAdsStore(this);
    // @ts-expect-error fix this
    this.my_profile_store = new MyProfileStore(this);
    // @ts-expect-error fix this
    this.order_store = new OrderStore(this);
    // @ts-expect-error fix this
    this.order_details_store = new OrderDetailsStore(this);
    // @ts-expect-error fix this
    this.sendbird_store = new SendbirdStore(this);
    // @ts-expect-error fix this
    this.floating_rate_store = new FloatingRateStore(this);
  }
}

let stores_context;

export const useStores = () => {
  if (!stores_context) {
    const root_store = new RootStore();

    stores_context = React.createContext({
      // @ts-expect-error fix this}

      general_store: root_store.general_store,
      // @ts-expect-error fix this}

      advertiser_page_store: root_store.advertiser_page_store,
      // @ts-expect-error fix this}

      buy_sell_store: root_store.buy_sell_store,
      // @ts-expect-error fix this}

      my_ads_store: root_store.my_ads_store,
      // @ts-expect-error fix this}

      my_profile_store: root_store.my_profile_store,
      // @ts-expect-error fix this}

      order_store: root_store.order_store,
      // @ts-expect-error fix this}

      order_details_store: root_store.order_details_store,
      // @ts-expect-error fix this}

      sendbird_store: root_store.sendbird_store,
      // @ts-expect-error fix this}

      floating_rate_store: root_store.floating_rate_store,
    });
  }
  return React.useContext(stores_context);
};
