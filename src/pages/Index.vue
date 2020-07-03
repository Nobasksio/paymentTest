<template >
    <transition name="slide-fade" >
        <q-page class="row items-stretch justify-between" >
            <div class="col-12 column justify-between main-container" >
                <fieldset class="" >
                    <legend align="center" > Make a payment</legend >
                    <ul role="none" >
                        <li >
                            <label for="contact" >Select contact</label >
                            <input type="text"
                                   name="contact"
                                   class="plain-input"
                                   @focus="goToRoute('contact')"
                                   id="contact" >
                        </li >
                        <li >
                            <label for="payment-method" >Select payment method</label >
                            <input type="text"
                                   name="payment-method"
                                   class="plain-input"
                                   @focus="goToRoute('payment-method')"
                                   id="payment-method" >
                        </li >
                        <li >
                            <label for="amount" >Enter amount</label >
                            <input type="text"
                                   name="amount"
                                   class="plain-input"
                                   id="amount" >
                        </li >
                    </ul >
                </fieldset >
                <q-btn color='green' @click="makePayment">Pay</q-btn >
            </div >
        </q-page >
    </transition >
</template >

<script lang="ts" >
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'PageIndex',
  data() {
    return {};
  },
  computed: {
    ...mapState('mainStore', ['contactId', 'paymentMethodId', 'amount']),
  },
  methods: {
    goToRoute(route: string): void{
      this.$router.push(route);
    },
    makePayment(): void {
      this.goToRoute('success');
    },
  },
});
</script >
<style scoped>
</style >
