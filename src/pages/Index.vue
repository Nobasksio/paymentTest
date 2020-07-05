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
                               v-validate="'required'"
                               class="plain-input hidden"
                               id="contact" >
                        <div class="mock-input" @click="goToRoute('contact')">
                            <span>
                                {{contact}}
                            </span>
                        </div>
                        <span class="text-error" >{{ errors.first('contact') }}</span >

                    </li >
                    <li >
                        <label for="payment-method" >Select payment method</label >
                        <input type="text"
                               name="payment-method"
                               :value="paymentMethodString"
                               v-validate="'required'"
                               class="plain-input hidden"
                               @focus="goToRoute('payment-method')"
                               id="payment-method" >
                        <div class="mock-input" @click="goToRoute('payment-method')">
                            <span>
                                {{paymentMethodString}}
                            </span>
                        </div>
                        <span class="text-error" >{{ errors.first('payment-method') }}</span >
                    </li >
                    <li >
                        <label for="amount" >Enter amount</label >
                        <input type="text"
                               :value="amount"
                               v-validate="'required|decimal'"
                               @input="(e)=>setAmount(e.target.value)"
                               name="amount"
                               class="plain-input"
                               id="amount" >
                        <span class="text-error" >{{ errors.first('amount') }}</span >

                    </li >
                </ul >
            </fieldset >
            <q-btn color='green'
                   :disable="errors.items.length > 0"
                   @click="validateBeforeSubmit(makePayment)" >Pay</q-btn >
        </div >
    </q-page >
</template >

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import VeeValidate from 'vee-validate';
import cardMasked from '../mixins/cardMasked';
import validateMixin from '../mixins/validateMixin';

Vue.use(VeeValidate);

export default Vue.extend({
  name: 'PageIndex',
  data() {
    return {};
  },
  mixins: [cardMasked, validateMixin],
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
          return `card ${this.makeCardMasked(searchCard.number)}`;
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
    goToRoute(route) {
      this.$router.push(route);
    },
    makePayment() {
      this.goToRoute('success');
    },
  },
});
</script >
<style scoped >

</style >
