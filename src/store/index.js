import { createStore } from 'vuex';

const store = createStore({
  state: {
    searchText: '',
    categoryItem: 'all',
    headerHiddenStatus: false
  },

  mutations: {
    changeSearchText (state, text) {
      state.searchText = text;
    },

    changeCategoryItem (state, text) {
      state.categoryItem = text;
    },

    changeClient (state, value) {
      state.client = value;
    },

    changeHeaderHiddenStatus (state) {
      state.headerHiddenStatus = !state.headerHiddenStatus;
    }
  }

});

export default store;
