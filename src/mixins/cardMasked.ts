import Vue from 'vue';

export default Vue.extend({
  name: 'cardMasked',
  methods: {
    makeCardMasked(cardNumber) {
      const card: string = cardNumber.substring(cardNumber.length - 4);

      return `**** ${card}`;
    },
  },
});
