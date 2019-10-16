import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import Gym from '@/pages/Gym';
import GymDetails from '@/pages/GymDetails';
import Checkout from '@/pages/Checkout';
import Payment from '@/pages/Payment';
import Login from '@/pages/Login';
import NotFound from '@/pages/404';
import City from '@/pages/City';
import Stage from '@/pages/Stage';
import Test from '@/pages/Test';
import Foo from '@/pages/Foo';
import Bar from '@/pages/Bar';
import MyTicket from '@/pages/MyTicket';
import MyTicketDetail from '@/pages/MyTicketDetail';
import MyCard from '@/pages/MyCard';
import MyCardDetail from '@/pages/MyCardDetail';
import MyReserve from '@/pages/MyReserve';
import MyReserveDetail from '@/pages/MyReserveDetail';
import MyOrder from '@/pages/MyOrder';
import MyOrderDetail from '@/pages/MyOrderDetail';
import PersonalCenter from '@/pages/PersonalCenter';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/changecity',
      name: 'City',
      component: City,
    },
    {
      path: '/stage',
      name: 'Stage',
      component: Stage,
    },
    {
      path: '/stage',
      component: Stage,
    },
    {
      path: '',
      component: Layout,
      children: [
        {
          path: '/',
          redirect: 'home',
        },
        {
          path: '/home',
          name: 'Home',
          component: Home,
        },
        // {
        //   path: '/MyTicket',
        //   name: 'MyTicket',
        //   component: MyTicket,
        // },
        // {
        //   path: '/MyTicket/:id',
        //   name: 'MyTicketDetail',
        //   component: MyTicketDetail,
        // },
        // {
        //   path: '/MyCard',
        //   name: 'MyCard',
        //   component: MyCard,
        // },
        // {
        //   path: '/MyCard/:id',
        //   name: 'MyCardDetail',
        //   component: MyCardDetail,
        // },
        // {
        //   path: '/MyReserve',
        //   name: 'MyReserve',
        //   component: MyReserve,
        // },
        // {
        //   path: '/MyReserve/:id',
        //   name: 'MyReserveDetail',
        //   component: MyReserveDetail,
        // },
        // {
        //   path: '/MyOrder',
        //   name: 'MyOrder',
        //   component: MyOrder,
        // },
        {
          path: '/PersonalCenter',
          component: PersonalCenter,
          meta: {
            isLogin: true,
          },
          children: [
            {
              path: '/',
              redirect: 'MyOrder',
            },
            {
              path: '/PersonalCenter/MyOrder',
              name: 'MyOrder',
              component: MyOrder,
            },
            {
              path: '/PersonalCenter/MyOrder/:id',
              name: 'MyOrderDetail',
              component: MyOrderDetail,
            },
            {
              path: '/PersonalCenter/MyTicket',
              name: 'MyTicket',
              component: MyTicket,
            },
            {
              path: '/PersonalCenter/MyTicket/:id',
              name: 'MyTicketDetail',
              component: MyTicketDetail,
            },
            {
              path: '/PersonalCenter/MyCard',
              name: 'MyCard',
              component: MyCard,
            },
            {
              path: '/PersonalCenter/MyCard/:id',
              name: 'MyCardDetail',
              component: MyCardDetail,
            },
            {
              path: '/PersonalCenter/MyReserve',
              name: 'MyReserve',
              component: MyReserve,
            },
            {
              path: '/PersonalCenter/MyReserve/:id',
              name: 'MyReserveDetail',
              component: MyReserveDetail,
            },
          ],
        },
        {
          path: '/gym',
          name: 'Gym',
          component: Gym,
          alias: '/bookTicket',
        },
        {
          path: '/gym1',
          component: Gym,
          alias: '/bookCard',
        },
        {
          path: '/gym2',
          component: Gym,
          alias: '/bookField',
        },
        {
          path: '/gym/:id',
          name: 'GymDetails',
          component: GymDetails,
        },
        {
          path: '/checkout',
          name: 'Checkout',
          component: Checkout,
          meta: {
            isLogin: true,
          },
        },
        {
          path: '/payment',
          name: 'Payment',
          component: Payment,
          meta: {
            isLogin: true,
          },
        },
        {
          path: '/test',
          name: 'Test',
          component: Test,
          children: [
            {
              path: 'foo',
              component: Foo,
            },
            {
              path: 'bar',
              component: Bar,
            },
          ],
        },
        // {
        //   path: '/test/:name/:age',
        //   name: 'Test1',
        //   component: Test,
        // },
      ],
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
