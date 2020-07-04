<template >
    <div class="an-page">
        <app-header
                header-name="New contact"
        ></app-header >
        <div class="col-12 column justify-between main-container">
            <fieldset class="" >
                <ul role="none" >
                    <li >
                        <label for="first-name" >First name</label >
                        <input type="text"
                               name="first-name"
                               :value="newContact.firstName"
                               @input="(e)=>setFirstName(e.target.value)"
                               class="plain-input"
                               id="first-name" >
                    </li >
                    <li >
                        <label for="last-name" >Last name</label >
                        <input type="text"
                               :value="newContact.lastName"
                               @input="(e)=>setLastName(e.target.value)"
                               name="payment-method"
                               class="plain-input"
                               id="last-name" >
                    </li >
                    <li >
                        <label for="amount" >Email</label >
                        <input type="text"
                               :value="newContact.email"
                               @input="(e)=>setEmail(e.target.value)"
                               name="amount"
                               class="plain-input"
                               id="amount" >
                    </li >
                </ul >
            </fieldset >
            <q-btn @click="saveContact">Save</q-btn >
        </div >
    </div >
</template >

<script lang="ts" >
import Vue from 'vue';
import AppHeader from 'layouts/AppHeader.vue';
import { mapState, mapMutations, mapActions } from 'vuex';

export default Vue.extend({
  components: {
    AppHeader,
  },
  name: 'ContactCreatePage',
  computed: {
    ...mapState('contactStore', ['newContact']),
  },
  methods: {
    ...mapMutations('contactStore', ['setFirstName', 'setLastName', 'setEmail']),
    ...mapActions('contactStore', ['saveContact']),
  },
});
</script >

<style scoped >

</style >
