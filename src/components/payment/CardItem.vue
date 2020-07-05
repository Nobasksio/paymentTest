<template >
    <div v-ripple
         @click="chooseAction"
         class="credit-card shadow-2" >
        <div ></div >
        <div >{{fullName}}</div >
        <div class="row justify-between" >
            <div >{{makeCardMasked(cardNumber)}}</div >
            <div >{{expiryString}}</div >
        </div >
        <q-btn @click.stop="goCreate"
               flat
               icon="more_vert"
               class="detail-button" >
        </q-btn >
    </div >
</template >

<script lang="ts" >
    import Vue from 'vue';
    import cardMasked from '../../mixins/cardMasked';

    export default Vue.extend({
        name: 'CardItem',
        mixins: [cardMasked],
        props: {
            fullName: {
                type: String,
            },
            cardNumber: {
                type: String,
            },
            expiryDate: {
                type: String,
            },
            chooseAction: {
                type: Function,
            },
        },
        computed: {
            expiryString() {
                const month: string = this.expiryDate.substring(0, 2);
                const year: number | string = this.expiryDate.substring(2);

                return `${month}/${year}`;
            },
        },
    });
</script >

<style scoped >
</style >
