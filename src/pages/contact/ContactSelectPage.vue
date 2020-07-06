<template >
    <div class="an-page">
        <app-header
                header-name="Select contact"
                createRoute="/contact/create"
        ></app-header >
        <div class="main-container" >
            <div class="text-center" v-if="contacts.length === 0">
                You don't have any contacts. Let's create It!
                <q-btn to="/contact/create" class="q-mt-md">Create new Contact</q-btn>
            </div>
            <contact-item :first-name="contact.firstName"
                          :last-name="contact.lastName"
                          :email="contact.email"
                          :key="contact.id"
                          :chooseAction="()=>setContact(contact.id)"
                          v-for="contact in contacts"
            />
        </div >
    </div >
</template >

<script >
import Vue from 'vue';
import AppHeader from 'layouts/AppHeader.vue';
import ContactItem from 'components/contact/ContactItem.vue';
import { mapState, mapActions } from 'vuex';

export default Vue.extend({
  name: 'ContactSelectPage',
  components: {
    AppHeader,
    ContactItem,
  },
  computed: {
    ...mapState('contactStore', ['contacts']),
  },
  methods: {
    ...mapActions('mainStore', ['setContact']),
    goBack() {
      this.$router.push('/');
    },
  },
});
</script >

<style scoped >
</style >
