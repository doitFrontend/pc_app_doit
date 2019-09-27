import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  btnList: ['sys:role:add', 'sys:role:edit'],
  num: 0, // 货物数量
  // totalPrice: 0,
  shoppingCartList: [],
  shoppingCartObj: {
    ticketCart: [],
    cardCart: [],
    fieldCart: [],
  },
};

const getters = {
  realShoppingCart: (state) => {
    return state.shoppingCartList.filter(item => item.num >= 1);
  },
  totalCartPriz: (state) => {
    let p = 0;
    let count = 0;
    state.shoppingCartList.forEach(element => {
      p += element.price * element.num;
      count += element.num;
    });
    return {p, count};
  },
};

const mutations = {
  addGoods(state, { item, num }) {
    state.num++;
    state.totalPrice = num * item.price;
  },
  delGoods(state, { item, num }) {
    state.num--;
    state.totalPrice = num * item.price;
  },
  addTicket(state, ticketItem) {
    console.log(ticketItem);
    if (state.shoppingCartObj.ticketCart.length) {
      // state.shoppingCartObj.ticketCart.forEach(item => {
      //   if (item.id === ticketItem.id) {
      //     // item.num++;
      //   } else {
      //     state.shoppingCartObj.ticketCart.push(ticketItem);
      //   }
      // });
      // for (let i = 0; i < state.shoppingCartObj.ticketCart.length; i++) {
      //   const element = state.shoppingCartObj.ticketCart[i];
      //   if (element.id === ticketItem.id) {
      //     element.num++;
      //     break;
      //   } else {
      //     state.shoppingCartObj.ticketCart.push(ticketItem);
      //   }
      // }
      // TODO: 根据id进行操作
    } else {
      state.shoppingCartObj.ticketCart.push(ticketItem);
    }
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
