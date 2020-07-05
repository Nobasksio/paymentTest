import Vue from 'vue';

export default Vue.extend({
  name: 'validateMixin',
  methods: {
    validateBeforeSubmit(nextFunction) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          nextFunction();
        }
      });
    },
  },
});
