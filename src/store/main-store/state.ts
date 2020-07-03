export interface MainStateInterface {
  contactId: number | null,
  paymentMethodId: number | null,
  amount: number | null,
  paymentIsFinished: boolean
}

const state: MainStateInterface = {
  contactId: null,
  paymentMethodId: null,
  amount: null,
  paymentIsFinished: false,
};

export default state;
