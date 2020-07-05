<template >
    <div class="an-page" >
        <app-header
                header-name="New contact"
        ></app-header >
        <div class="col-12 column justify-between main-container" >
            <fieldset class="" >
                <ul role="none" >
                    <li >
                        <label for="first-name" >First name</label >
                        <input type="text"
                               name="first-name"
                               v-validate="'required'"
                               :value="newContact.firstName"
                               @input="(e)=>setFirstName(e.target.value)"
                               class="plain-input"
                               id="first-name" >
                        <span class="text-error" >{{ errors.first('first-name') }}</span >
                    </li >
                    <li >
                        <label for="last-name" >Last name</label >
                        <input type="text"
                               name="last-name"
                               v-validate="'required'"
                               :value="newContact.lastName"
                               @input="(e)=>setLastName(e.target.value)"
                               class="plain-input"
                               id="last-name" >
                        <span class="text-error" >{{ errors.first('last-name') }}</span >
                    </li >
                    <li >
                        <label for="email" >Email</label >
                        <input type="email"
                               :value="newContact.email"
                               v-validate="'required|email'"
                               @input="(e)=>setEmail(e.target.value)"
                               name="email"
                               class="plain-input"
                               id="email" >
                        <span class="text-error" >{{ errors.first('email') }}</span >
                    </li >
                </ul >
            </fieldset >
            <q-btn @click="validateBeforeSubmit(saveContact)"
                   :disable="errors.items.length > 0" >Save</q-btn >
        </div >
    </div >
</template >

<script>
import Vue from 'vue';
import AppHeader from 'layouts/AppHeader.vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

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
    validateBeforeSubmit(nextFunction) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          nextFunction();
        }
      });
    },
  },
});
</script >

<style scoped >

</style >
