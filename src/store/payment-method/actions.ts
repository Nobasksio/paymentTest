import { ActionTree } from 'vuex';
import { IPaytentStore } from 'src/store/payment-method/index';
import { StoreInterface } from '../index';

const actions: ActionTree<IPaytentStore, StoreInterface> = {
  saveCard(context) {
    context.commit('setCardId', (new Date()).toString());
    const newCard = { ...context.state.newCard };
    context.commit('addCard', newCard);
    context.commit('resetNewCard');
    // @ts-ignore
    this.$router.go(-1);
  },
  saveAccount(context) {
    context.commit('setAccountId', (new Date()).toString());
    const newAccount = { ...context.state.newAccount };
    context.commit('addAccount', newAccount);
    context.commit('resetNewAccount');
    // @ts-ignore
    this.$router.go(-1);
  },
};

export default actions;
