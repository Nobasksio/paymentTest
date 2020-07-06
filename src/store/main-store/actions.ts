import { ActionTree } from 'vuex';
import { StoreInterface } from '../index';
import { MainStateInterface } from './state';

const actions: ActionTree<MainStateInterface, StoreInterface> = {
  someAction(/* context */) {
    // your code
  },
  setContact(context, contactId) {
    context.commit('setContactId', contactId);
    // @ts-ignore
    this.$router.push('/');
  },
  choosePaymentMethod(context, paymentMethod) {
    context.commit('setPaymentMethod', paymentMethod);
    // @ts-ignore
    this.$router.push('/');
  },
};

export default actions;
