export interface MainStateInterface {
  contactId: string | null,
  paymentMethod: IPaymentMethod,
  amount: number | null,
  paymentIsFinished: boolean
}

export interface IPaymentMethod {
  id: string | null,
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
