<template >
    <div class="" >
        <div class="cont" >
            <app-header
                    header-name="Select method"
                    createRoute="/payment-method/create"
            ></app-header >
            <div class="main-container" >
                <h1 >
                    Credit/debit cards
                </h1 >
                <CardItem
                        :fullName="card.fullName"
                        :cardNumber="card.number"
                        :expiry-date="card.expiryDate"
                        :chooseAction="()=>choosePaymentMethod({id: card.id,type: 'card'})"
                        :key="card.id"
                        v-for="card in cards"
                />
                <h1 >
                    Bank accounts
                </h1 >
                <AccountItem
                        :account-name="account.name"
                        :account-number="account.number"
                        :BSB="account.bsb"
                        :chooseAction="()=>choosePaymentMethod({id: account.id,type: 'account'})"
                        :key="account.id"
                        v-for="account in accounts"
                />
            </div >
        </div >
    </div >
</template >

<script >
import AppHeader from 'layouts/AppHeader.vue';
import CardItem from 'components/payment/CardItem.vue';
import AccountItem from 'components/payment/AccountItem.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PaymentSelectPage',
  components: {
    AccountItem,
    AppHeader,
    CardItem,
  },
  computed: {
    ...mapState('paymentMethodStore', ['cards', 'accounts']),
  },
  methods: {
    ...mapActions('mainStore', ['choosePaymentMethod']),
  },
};
</script >

<style scoped >
    .cont {
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }
</style >
