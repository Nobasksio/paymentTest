<template >
    <div v-ripple class="credit-card shadow-2">
        <div></div>
        <div>Elchenkov Artur</div>
        <div class="row justify-between">
            <div>**** 1234</div>
            <div>05/22</div>
        </div>
        <q-btn @click.stop="goCreate"
               flat
               icon="more_vert"
               class="detail-button">
        </q-btn>
    </div>
</template >

<script lang="ts" >
export default {
  name: 'CardItem',
};
</script >

<style scoped >
</style >
