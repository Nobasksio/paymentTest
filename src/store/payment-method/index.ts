import { StoreInterface } from 'src/store';
import { Module } from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';

import actions from './actions';

export interface ICard {
  id: string | null,
  fullName: string,
  number: string,
  expiryDate: string
}

export interface IAccount {
  id: string | null,
  name: string,
  number: string,
  bsb: string
}

export interface IPaytentStore {
  cards: ICard[],
  accounts: IAccount[]
  newCard: ICard,
  newAccount: IAccount
}

const paymentMethodStore : Module<IPaytentStore, StoreInterface> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default paymentMethodStore;
