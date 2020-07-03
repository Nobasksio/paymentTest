<template >
    <div >
        <app-header
                header-name="Select method"
                createRoute="/payment-method/create"
        ></app-header >
        <div class="main-container">
            <h1 >
                Credit/debit cards
            </h1 >
            <CardItem></CardItem>
            <CardItem></CardItem>
            <h1 >
                Bank accounts
            </h1 >
            <AccountItem
                    account-name="Artur account"
                    :account-number="123432"
                    BSB="213-2132"
            />
            <AccountItem
                    account-name="Artur account"
                    :account-number="123432"
                    BSB="213-2132"
            />
            <AccountItem
                    account-name="Artur account"
                    :account-number="123432"
                    BSB="213-2132"
            />
        </div >
    </div >
</template >

<script >
import AppHeader from 'layouts/AppHeader.vue';
import CardItem from 'components/payment/CardItem.vue';
import AccountItem from '../../components/payment/AccountItem';

export default {
  name: 'PaymentSelectPage',
  components: { AccountItem, AppHeader, CardItem },
};
</script >

<style scoped >

</style >
