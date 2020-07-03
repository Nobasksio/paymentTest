<template >
    <div >
        <app-header
                header-name="New contact"
                createRoute="/contact/create"
        ></app-header >
        <div class="col-12 column justify-between main-container">
            <fieldset class="" >
                <ul role="none" >
                    <li >
                        <label for="first-name" >First name</label >
                        <input type="text"
                               name="first-name"
                               class="plain-input"
                               id="first-name" >
                    </li >
                    <li >
                        <label for="last-name" >Last name</label >
                        <input type="text"
                               name="payment-method"
                               class="plain-input"
                               id="last-name" >
                    </li >
                    <li >
                        <label for="amount" >Email</label >
                        <input type="text"
                               name="amount"
                               class="plain-input"
                               id="amount" >
                    </li >
                </ul >
            </fieldset >
            <q-btn >Save</q-btn >
        </div >
    </div >
</template >

<script lang="ts" >
import Vue from 'vue';
import AppHeader from 'layouts/AppHeader.vue';

export default Vue.extend({
  components: {
    AppHeader,
  },
  name: 'ContactCreatePage',
});
</script >

<style scoped >

</style >
