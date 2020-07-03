<template >
    <div v-ripple class="contact-item">
        <div class="contact-item-name"> {{firstName}} {{lastName}}</div>
        <div class="contact-item-email">{{email}}</div>
    </div>
</template >

<script lang="ts">
export default {
  name: 'ContactItem',
  props: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
  },
};
</script >

<style scoped >
    .contact-item{
        border: 1px solid rgba(106, 106, 106, 0.24);
        padding: 5px;
        position: relative;


    }
    .contact-item-name{
        font-size: 1.25em;
        font-weight: 700;
    }
    .contact-item-email{
        font-size: 1em;
        color: #6a6a6a;
    }
</style >
