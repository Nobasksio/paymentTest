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
                               fixed-anim-aria`">
                <fieldset class="" v-if="createType==='card'" key="card">
                    <ul role="none" >
                        <li >
                            <label for="full-name" >Full name</label >
                            <input type="text"
                                   name="full-name"
                                   class="plain-input"
                                   id="full-name" >
                        </li >
                        <li >
                            <label for="card-number" >Card number</label >
                            <input type="text"
                                   name="card-number"
                                   class="plain-input"
                                   id="card-number" >
                        </li >
                        <li >
                            <label for="expiry-date" >Expiry date</label >
                            <input type="text"
                                   name="expiry-date"
                                   class="plain-input"
                                   id="expiry-date" >
                        </li >
                    </ul >
                    <q-btn class="full-width" >Save</q-btn >
                </fieldset >
                <fieldset class="" v-else key="account">
                    <ul role="none" >
                        <li >
                            <label for="account-name" >Account name</label >
                            <input type="text"
                                   name="full-name"
                                   class="plain-input"
                                   id="account-name" >
                        </li >
                        <li >
                            <label for="account-number" >Account number</label >
                            <input type="text"
                                   name="card-number"
                                   class="plain-input"
                                   id="account-number" >
                        </li >
                        <li >
                            <label for="bsd" >BSD</label >
                            <input type="text"
                                   name="bsd"
                                   class="plain-input"
                                   id="bsd" >
                        </li >
                    </ul >
                    <q-btn class="full-width" >Save</q-btn >
                </fieldset >
            </transition-group >
        </div >
    </div >
</template >

<script lang="ts" >
import AppHeader from 'layouts/AppHeader.vue';

export default {
  name: 'PaymentCreatePage',
  components: { AppHeader },
  data() {
    return {
      createType: 'card',
      options: [
        { label: 'Card', value: 'card' },
        { label: 'Bank account', value: 'account' },
      ],
    };
  },
};
</script >

<style scoped >
    .fixed-anim-aria{
        width: calc(100% - 40px);
        position: fixed;
    }
</style >
