<template >
    <div class="row items-center justify-between bg-blue text-white q-py-md" >
        <div class="q-px-md col" >
            <q-btn @click="goBack"
                   round flat icon="keyboard_backspace" >
            </q-btn >
        </div >
        <div class="q-px-md col" >
            {{ headerName }}
        </div >
        <div class="q-px-md col row justify-end" >
            <q-btn @click="goCreate"
                   v-if="createRoute !== null"
                   round icon="add" class="bg-white text-blue" >
            </q-btn >
        </div >
    </div >
</template >

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'AppHeader',
  props: {
    headerName: {
      type: String,
    },
    createRoute: {
      type: String,
      default: null,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goCreate() {
      this.$router.push(this.createRoute);
    },
  },
});
</script >

<style scoped >

</style >
