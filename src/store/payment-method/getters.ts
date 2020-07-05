import { GetterTree } from 'vuex';
import { IPaytentStore } from 'src/store/payment-method/index';
import { StoreInterface } from '../index';

const getters: GetterTree<IPaytentStore, StoreInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
