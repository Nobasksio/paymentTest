<template >
    <div class="row items-center justify-between bg-blue text-white q-py-md">
        <div class="q-px-md">
            <q-btn @click="goBack"
                   round flat icon="keyboard_backspace">
            </q-btn>
        </div>
        <div class="q-px-md">
           {{ headerName }}
        </div>
        <div class="q-px-md">
            <q-btn @click="goCreate"
                   round icon="add" class="bg-white text-blue">
            </q-btn>
        </div>
    </div>
</template >

<script lang="ts">
export default {
  name: 'AppHeader',
  props: {
    headerName: {
      type: String,
    },
    createRoute: {
      type: String,
    },
  },
  methods: {
    goBack(): void {
      this.$router.go(-1);
    },
    goCreate(): void{
      this.$router.push(this.createRoute);
    },
  },
};
</script >

<style scoped >

</style >
