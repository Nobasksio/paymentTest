<template >
    <div class="an-page" >
        <app-header
                header-name="New Card"
        ></app-header >
        <div class="main-container" >
            <q-btn-toggle
                    spread
                    no-caps
                    v-model="createType"
                    toggle-color="primary"
                    :options="options"
                    class="q-my-md"
            />
            <transition-group :duration="500"
                              :enter-active-class="`animated
                              ${createType === 'card' ? 'fadeInRightBig' : 'fadeInLeftBig'}
                              fixed-anim-aria`"
                              :leave-active-class="`animated
                               ${createType === 'card' ? 'fadeOutLeftBig' : 'fadeOutRightBig'}
                               fixed-anim-aria`" >
                <fieldset class="" v-if="createType==='card'" key="card" >
                    <ul role="none" >
                        <li >
                            <label for="full-name" >Full name</label >
                            <input type="text"
                                   :value="newCard.fullName"
                                   @input="(e)=>setFullName(e.target.value)"
                                   v-validate="'required'"
                                   name="full-name"
                                   class="plain-input"
                                   id="full-name" >
                            <span class="text-error" >{{ errors.first('full-name') }}</span >
                        </li >
                        <li >
                            <label for="card-number" >Card number</label >
                            <the-mask type="text"
                                      :mask="cardMask"
                                      :value="newCard.number"
                                      @input="setCardNumber"
                                      v-validate="'required|credit_card'"
                                      name="card-number"
                                      class="plain-input"
                                      id="card-number" />
                            <span class="text-error" >{{ errors.first('card-number') }}</span >
                        </li >
                        <li >
                            <label for="expiry-date" >Expiry date</label >
                            <the-mask type="text"
                                      placeholder="MM/YY"
                                      :mask="expiryDateMask"
                                      :value="newCard.expiryDate"
                                      :masked="true"
                                      @input="setExpiryDate"
                                      v-validate="'required|date_format:MM/yy'"
                                      name="expiry-date"
                                      class="plain-input"
                                      id="expiry-date" />
                            <span class="text-error" >{{ errors.first('expiry-date') }}</span >
                        </li >
                    </ul >
                    <q-btn @click='validateBeforeSubmit(saveCard)'
                           :disable="errors.items.length > 0"
                           class="full-width" >Save
                    </q-btn >
                </fieldset >
                <fieldset class="" v-else key="account" >
                    <ul role="none" >
                        <li >
                            <label for="account-name" >Account name</label >
                            <input type="text"
                                   :value="newAccount.name"
                                   v-validate="'required'"
                                   @input="(e)=>setAccountName(e.target.value)"
                                   name="full-name"
                                   class="plain-input"
                                   id="account-name" >
                            <span class="text-error" >{{ errors.first('account-name') }}</span >

                        </li >
                        <li >
                            <label for="account-number" >Account number</label >
                            <the-mask type="text"
                                      :placeholder="accountMask"
                                      :mask="accountMask"
                                      :value="newAccount.number"
                                      v-validate="'required|min:10'"
                                      @input="setAccountNumber"
                                      name="account-number"
                                      class="plain-input"
                                      id="account-number" />
                            <span class="text-error" >{{ errors.first('account-number') }}</span >

                        </li >
                        <li >
                            <label for="bsd" >BSD</label >
                            <the-mask type="text"
                                      :placeholder="bsbMask"
                                      :mask="bsbMask"
                                      :value="newAccount.bsb"
                                      v-validate="'required|min:6'"
                                      @input="setAccountBsb"
                                      name="bsd"
                                      class="plain-input"
                                      id="bsd" />
                            <span class="text-error" >{{ errors.first('bsd') }}</span >

                        </li >
                    </ul >
                    <q-btn @click='validateBeforeSubmit(saveAccount)'
                           :disable="errors.items.length > 0"
                           class="full-width" >Save
                    </q-btn >
                </fieldset >
            </transition-group >
        </div >
    </div >
</template >

<script lang="ts" >
import Vue from 'vue';
import AppHeader from 'layouts/AppHeader.vue';
import { mapState, mapActions, mapMutations } from 'vuex';
import { TheMask } from 'vue-the-mask';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {
  name: 'PaymentCreatePage',
  components: { AppHeader, TheMask },
  data() {
    return {
      createType: 'card',
      cardMask: '####-####-####-####',
      expiryDateMask: '##/##',
      bsbMask: '###-###',
      accountMask: '##########',
      options: [
        { label: 'Card', value: 'card' },
        { label: 'Bank account', value: 'account' },
      ],
    };
  },
  computed: {
    ...mapState('paymentMethodStore', ['newCard', 'newAccount']),
  },
  methods: {
    ...mapMutations('paymentMethodStore', [
      'setFullName',
      'setCardNumber',
      'setExpiryDate',
      'setAccountName',
      'setAccountNumber',
      'setAccountBsb',
    ]),
    ...mapActions('paymentMethodStore', ['saveCard', 'saveAccount']),
    validateBeforeSubmit(nextFunction) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          nextFunction();
        }
      });
    },
  },
};
</script >

<style scoped >
    .fixed-anim-aria {
        width: calc(100% - 40px);
        position: fixed;
    }
</style >
