import Vue from 'vue';
import Vuex from 'vuex';
import $axios from 'axios';

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
    let isExist = state.shoppingCartObj.ticketCart.find(item => item.sportId === ticketItem.sportId);
    if (isExist) {
      isExist.num++;
    } else {
      ticketItem.num = 1;
      state.shoppingCartObj.ticketCart.push(ticketItem);
    }
  },
  // 添加卡
  addCard(state, itemOut) {
    let isExist = state.shoppingCartObj.cardCart.find(item => item.sportId === itemOut.sportId);
    if (isExist) {
      isExist.num++;
    } else {
      itemOut.num = 1;
      state.shoppingCartObj.cardCart.push(itemOut);
    }
  },
  // 添加场地
  addField(state, fData) {
    state.shoppingCartObj.fieldCart.push(fData);
  },
  // 删除场地
  delField(state, fData) {
    let isExistIndex = state.shoppingCartObj.fieldCart.findIndex(item => (item.time === fData.time && item.place === fData.place));
    state.shoppingCartObj.fieldCart.splice(isExistIndex, 1);
  },
  delFieldById(state, fItem) {
    console.log(fItem); // TODO: 购物车点击删除去除相应的记录
    // state.shoppingCartObj.fieldCart.splice(index, 1);
  },
  // 删除票
  delTicket(state, ticketItem) {
    let isExist = state.shoppingCartObj.ticketCart.find(item => item.sportId === ticketItem.sportId);
    let isExistIndex = state.shoppingCartObj.ticketCart.findIndex(item => item.sportId === ticketItem.sportId);
    if (isExist && isExist.num >= 1) {
      isExist.num--;
    } else {
      state.shoppingCartObj.ticketCart.splice(isExistIndex, 1);
    }
  },
  // 删除卡
  delCard(state, itemOut) {
    let isExist = state.shoppingCartObj.cardCart.find(item => item.sportId === itemOut.sportId);
    let isExistIndex = state.shoppingCartObj.cardCart.findIndex(item => item.sportId === itemOut.sportId);
    if (isExist && isExist.num >= 1) {
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
    let data = {
      deliveryTerminal: '门户端',
      gamesNum: '',
      intendedFor: '在职教职工',
      operator_id: '2014011166',
      operator_role: 'admin',
      orgId: localStorage.getItem('orgId'),
      timeSolt: '',
      type: 'pw',
    };
    $axios({
      method: 'POST',
      url: 'listApiTicketSale.do',
      data: data,
    }).then(res => {
      if (res.data.code === 200) {
        context.commit('setTicketList', res.data.data);
      } else {
        this.$Message.warning(res.code);
      }
    }).catch(error => {
      console.log(error);
    });
  },
  getCardList(context) {
    let data = {
      deliveryTerminal: '门户端',
      gamesNum: '',
      intendedFor: '在职教职工',
      operator_id: '2014011166',
      operator_role: 'admin',
      orgId: localStorage.getItem('orgId'),
      timeSolt: '',
      type: 'kw',
    };
    $axios({
      method: 'POST',
      url: 'listApicardSale.do',
      data: data,
    }).then(res => {
      if (res.data.code === 200) {
        context.commit('setCardList', res.data.data);
      } else {
        this.$Message.warning(res.code);
      }
    }).catch(error => {
      console.log(error);
    });
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
