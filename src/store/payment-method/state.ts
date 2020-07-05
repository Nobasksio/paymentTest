import { IPaytentStore } from 'src/store/payment-method/index';

export default function (): IPaytentStore {
  return {
    cards: [],
    accounts: [],
    newCard: {
      id: null,
      fullName: '',
      number: '',
      expiryDate: '',
    },
    newAccount: {
      id: null,
      name: '',
      number: '',
      bsb: '',
    },
  };
}
