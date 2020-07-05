import { MutationTree } from 'vuex';
import {IAccount, ICard, IPaytentStore} from 'src/store/payment-method/index';

const mutation: MutationTree<IPaytentStore> = {
  setFullName(state: IPaytentStore, fullName: string) {
    state.newCard.fullName = fullName;
  },
  setCardNumber(state: IPaytentStore, cardNumber: string) {
    state.newCard.number = cardNumber;
  },
  setExpiryDate(state: IPaytentStore, expiryDate: string) {
    state.newCard.expiryDate = expiryDate;
  },
  setCardId(state: IPaytentStore, id: string) {
    state.newCard.id = id;
  },
  addCard(state: IPaytentStore, newCard: ICard){
    state.cards = [...state.cards, newCard];
  },
  resetNewCard(state: IPaytentStore) {
    state.newCard = {
      id: null,
      fullName: '',
      number: '',
      expiryDate: '',
    };
  },
  setAccountName(state: IPaytentStore, accountName: string) {
    state.newAccount.name = accountName;
  },
  setAccountNumber(state: IPaytentStore, accountNumber: string) {
    state.newAccount.number = accountNumber;
  },
  setAccountBsb(state: IPaytentStore, bsb: string) {
    state.newAccount.bsb = bsb;
  },
  setAccountId(state: IPaytentStore, id: string) {
    state.newAccount.id = id;
  },
  addAccount(state: IPaytentStore, newAccount: IAccount){
    state.accounts = [...state.accounts, newAccount];
  },
  resetNewAccount(state: IPaytentStore) {
    state.newAccount = {
      id: null,
      name: '',
      number: '',
      bsb: '',
    };
  },
};

export default mutation;
