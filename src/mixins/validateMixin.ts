import Vue from 'vue';

export default Vue.extend({
  name: 'validateMixin',
  methods: {
    validateBeforeSubmit(nextFunction: nextFunctinI) {
      this.$validator.validateAll().then((result : boolean) => {
        if (result) {
          nextFunction();
        }
      });
    },
  },
});
