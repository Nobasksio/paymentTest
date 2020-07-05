import { ActionTree } from 'vuex';
import { IContactStore } from 'src/store/contact/index';
import { StoreInterface } from '../index';

const actions: ActionTree<IContactStore, StoreInterface> = {
  saveContact(context) {

    context.commit('setContactId', (new Date()).toString());
    const newContact = { ...context.state.newContact };
    context.commit('addContact', newContact);
    context.commit('resetContact');
    this.$router.go(-1);
  },
};

export default actions;
