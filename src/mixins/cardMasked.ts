import Vue from 'vue';

export default Vue.extend({
  name: 'cardMasked',
  methods: {
    makeCardMasked(cardNumber : string) {
      const card: string = cardNumber.substring(cardNumber.length - 4);

      return `**** ${card}`;
    },
  },
});
