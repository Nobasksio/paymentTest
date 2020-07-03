<template >
    <div >
        <app-header
                header-name="Select contact"
                createRoute="/contact/create"
        ></app-header >
        <div class="main-container" >
            <contact-item first-name="Arthur"
                          last-name="Elchenkov"
                          email="a420673@yandex.ru"
            />
        </div >
    </div >
</template >

<script lang="ts" >
import Vue from 'vue';
import AppHeader from 'layouts/AppHeader.vue';
import ContactItem from 'components/contact/ContactItem.vue';

export default Vue.extend({
  name: 'ContactSelectPage',
  components: {
    AppHeader,
    ContactItem,
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
});
</script >

<style scoped >
    .slide-leave-active,
    .slide-enter-active {
        transition: 1s;
    }

    .slide-enter
        /* .slide-fade-leave-active до версии 2.1.8 */
    {
        transform: translateX(100);

    }

    .slide-enter-to {

        transform: translateX(0);
    }
</style >
