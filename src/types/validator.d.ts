import Vue from 'vue';

declare module 'vue/types/vue' {
    // 3. Объявите расширение для Vue
    interface Vue {
        $validator: Valida
    }
}
