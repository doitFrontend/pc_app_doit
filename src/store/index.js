import Vue from 'vue';
import Vuex from 'vuex';
import { ticketLists } from '../utils/mockdata';

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
  ticketList: [],
  cardList: [],
  fieldList: [],
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
  // 添加票
  addTicket(state, ticketItem) {
    let isExist = state.shoppingCartObj.ticketCart.find(item => item.id === ticketItem.id);
    if (isExist) {
      isExist.num++;
    } else {
      state.shoppingCartObj.ticketCart.push(ticketItem);
    }
  },
  // 添加卡
  addCard(state, itemOut) {
    let isExist = state.shoppingCartObj.cardCart.find(item => item.id === itemOut.id);
    if (isExist) {
      isExist.num++;
    } else {
      state.shoppingCartObj.cardCart.push(itemOut);
    }
  },
  // 删除票
  delTicket(state, ticketItem) {
    let isExist = state.shoppingCartObj.ticketCart.find(item => item.id === ticketItem.id);
    let isExistIndex = state.shoppingCartObj.ticketCart.findIndex(item => item.id === ticketItem.id);
    if (isExist && isExist.num >= 2) {
      isExist.num--;
    } else {
      state.shoppingCartObj.ticketCart.splice(isExistIndex, 1);
    }
  },
  // 删除卡
  delCard(state, itemOut) {
    let isExist = state.shoppingCartObj.cardCart.find(item => item.id === itemOut.id);
    let isExistIndex = state.shoppingCartObj.cardCart.findIndex(item => item.id === itemOut.id);
    if (isExist && isExist.num >= 2) {
      isExist.num--;
    } else {
      state.shoppingCartObj.cardCart.splice(isExistIndex, 1);
    }
  },
  // 获取所有票数据
  setTicketList(state, data) {
    state.ticketList = data; // 把异步（actions）中获取的数据赋值给state
  },
  // 获取所有卡数据
  setCardList(state, data) {
    state.cardList = data; // 把异步（actions）中获取的数据赋值给state
  }
};

const actions = {
  getTicketList(context) {
    setTimeout(() => {
      context.commit('setTicketList', ticketLists.ticketLists);
    }, 500);
  },
  getCardList(context) {
    setTimeout(() => {
      context.commit('setCardList', ticketLists.cardLists);
    }, 500);
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
