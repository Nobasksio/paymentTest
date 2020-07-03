<template >
    <div
            v-ripple
            class="credit-card shadow-2" >
        <div >
            <div >{{accountName}}</div >
            <div >{{accountNumber}}</div >
        </div >
        <div class="row justify-end" >
            <div >{{BSB}}</div >
        </div >
        <q-btn @click.stop="goCreate"
               flat
               icon="more_vert"
               class="detail-button" >
        </q-btn >
    </div >
</template >

<script >
export default {
  name: 'AccountItem',
  props: {
    accountName: {
      type: String,
    },
    accountNumber: {
      type: Number,
    },
    BSB: {
      type: Number,
    },
  },
};
</script >

<style scoped >

</style >
