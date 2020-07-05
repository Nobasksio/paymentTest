import { MutationTree } from 'vuex';
import {IContact, IContactStore} from 'src/store/contact/index';

const mutation: MutationTree<IContactStore> = {
  setFirstName(state: IContactStore, firstName: string) {
    state.newContact.firstName = firstName;
  },
  setLastName(state: IContactStore, lastName: string) {
    state.newContact.lastName = lastName;
  },
  setEmail(state: IContactStore, email: string) {
    state.newContact.email = email;
  },
  addContact(state: IContactStore, newContact: IContact) {
    state.contacts = [...state.contacts, newContact];
  },
  resetContact(state: IContactStore) {
    state.newContact.id = null;
    state.newContact.firstName = '';
    state.newContact.lastName = '';
    state.newContact.email = '';
  },
  setContactId(state: IContactStore, id: string) {
    state.newContact.id = id;
  },
};

export default mutation;
