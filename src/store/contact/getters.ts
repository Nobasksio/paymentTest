import { GetterTree } from 'vuex';
import { StoreInterface } from '../index';
import {IContactStore} from "src/store/contact/index";

const getters: GetterTree<IContactStore, StoreInterface> = {
    someAction(/* context */) {
        // your code
    },
};

export default getters;
