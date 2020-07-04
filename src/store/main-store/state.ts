export interface MainStateInterface {
  contactId: number | null,
  paymentMethod: IPaymentMethod,
  amount: number | null,
  paymentIsFinished: boolean
}

export interface IPaymentMethod {
  id: number| null,
  type: 'card' | 'account',
}

const state: MainStateInterface = {
  contactId: null,
  paymentMethod: {
    id: null,
    type: 'card',
  },
  amount: null,
  paymentIsFinished: false,
};

export default state;
