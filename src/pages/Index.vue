<template >
    <q-page class="row items-stretch justify-between an-page" >
        <div class="col-12 column justify-between main-container" >
            <fieldset class="" >
                <legend align="center" > Make a payment</legend >
                <ul role="none" >
                    <li >
                        <label for="contact" >Select contact</label >
                        <input type="text"
                               name="contact"
                               :value="contact"
                               class="plain-input"
                               @focus="goToRoute('contact')"
                               id="contact" >
                    </li >
                    <li >
                        <label for="payment-method" >Select payment method</label >
                        <input type="text"
                               name="payment-method"
                               :value="paymentMethodString"
                               class="plain-input"
                               @focus="goToRoute('payment-method')"
                               id="payment-method" >
                    </li >
                    <li >
                        <label for="amount" >Enter amount</label >
                        <input type="text"
                               :value="amount"
                               @input="(e)=>setAmount(e.target.value)"
                               name="amount"
                               class="plain-input"
                               id="amount" >
                    </li >
                </ul >
            </fieldset >
            <q-btn color='green' @click="makePayment" >Pay</q-btn >
        </div >
    </q-page >
</template >

<script lang="ts" >
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';

export default Vue.extend({
  name: 'PageIndex',
  data() {
    return {};
  },
  computed: {
    ...mapState('mainStore', ['contactId', 'paymentMethod', 'amount']),
    ...mapState('contactStore', ['contacts']),
    ...mapState('paymentMethodStore', ['cards', 'accounts']),
    contact() {
      if (this.contactId === null) return '';
      const [contactItem] = this.contacts.filter((item) => item.id === this.contactId);

      return `${contactItem.firstName} ${contactItem.lastName}`;
    },
    paymentMethodString() {
      if (this.paymentMethod.id === null) return '';

      switch (this.paymentMethod.type) {
        case 'card': {
          const [searchCard] = this.cards.filter((item) => item.id === this.paymentMethod.id);
          return `card ${searchCard.number}`;
        }
        case 'account': {
          const [searchAccount] = this.accounts.filter((item) => item.id === this.paymentMethod.id);
          return `account ${searchAccount.name}`;
        }
        default: {
          return '';
        }
      }
    },
  },
  methods: {
    ...mapMutations('mainStore', ['setAmount']),
    goToRoute(route: string): void {
      this.$router.push(route);
    },
    makePayment(): void {
      this.goToRoute('success');
    },
  },
});
</script >
<style scoped >

</style >
