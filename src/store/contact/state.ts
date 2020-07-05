import { IContactStore } from 'src/store/contact/index';

const state: IContactStore = {
  contacts: [],
  newContact: {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
  },
};

export default state;
