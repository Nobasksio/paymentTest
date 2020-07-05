import { MutationTree } from 'vuex';
import { IPaymentMethod, MainStateInterface } from './state';

const mutation: MutationTree<MainStateInterface> = {
  setContactId(state: MainStateInterface, contactId: string) {
    state.contactId = contactId;
  },
  setPaymentMethod(state: MainStateInterface, paymentMethod: IPaymentMethod) {
    state.paymentMethod = { ...paymentMethod };
  },
  setAmount(state: MainStateInterface, amount) {
    state.amount = amount;
  },
  resetPayment(state) {
    state.contactId = null;
    state.paymentMethod = {
      id: null,
      type: 'card',
    };

    state.amount = null;
  },

};

export default mutation;
