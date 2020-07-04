import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import mainStore from './main-store';
import contactStore from './contact';
import paymentMethodStore from './payment-method';

// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StoreInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  mainStore: unknown;
  contactStore: unknown;
  paymentMethodStore: unknown;
}

export default store(({ Vue }) => {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StoreInterface>({
    modules: {
      mainStore,
      contactStore,
      paymentMethodStore,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV,
  });

  return Store;
});
