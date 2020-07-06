<template >
    <q-page class="row items-stretch justify-between an-page" >
        <div class="col-12 main-container-success" >
            <div class="success-massage-area" >
                <img src="/success.png" class='success-icon' alt="" >
                <h2 class="text-center" >
                    Payment Compered Successfully
                </h2 >
            </div >
            <div class="buntton-area" >
                <q-btn no-caps
                       color='green'
                       @click="makeAnotherOne"
                       class="full-width" >Make another one
                </q-btn >
            </div >
        </div >
    </q-page >
</template >

<script >
export default {
  name: 'SuccessPage',
  methods: {
    makeAnotherOne() {
      this.$store.commit('mainStore/resetPayment');
      this.$router.push('/');
    },
  },
};
</script >

<style >
    .success-icon {
        width: 35%;
    }

    .main-container-success {
        padding: 20px;
        height: 100%;
        width: 100%;
    }

    .success-massage-area {
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .buntton-area {
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }

</style >
