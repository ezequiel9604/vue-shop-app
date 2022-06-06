
import { createStore } from "vuex";

const store = createStore({
    state: {
        searchText: "",
        categoryItem: "all",
    },

    mutations: {
        changeSearchText(state, text){
            state.searchText = text;
        },

        changeCategoryItem(state, text){
            state.categoryItem = text;
        }
    }

})

export default store;