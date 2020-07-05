import { Module } from 'vuex';
import { StoreInterface } from 'src/store';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export interface IContact {
  id: string | null,
  firstName: string,
  lastName: string,
  email: string
}

export interface IContactStore {
  contacts: IContact[]
  newContact: IContact
}

const contactStore: Module<IContactStore, StoreInterface> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default contactStore;
