/**
 * Created by Greg Zhang on 2016/10/30.
 */
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import {Home, Iframe, Management, View360} from './agent-view/config';
import {CustomerManagement, CreateCustomer} from './customer-management/config';

const router = new VueRouter({
  base: __dirname,
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', components: {'av-root-view': Home} },
    {
      path: '/frame/:type',
      name: 'frame',
      components: {'av-root-view': Iframe}
    },
    {
      path: '/View360/:customerId',
      name: 'view360',
      components: {'av-root-view': View360}
    },
    {
      path: '/management/:bizId',
      name: 'management',
      components: {'av-root-view': Management},
      children: [
        {
          path: '',
          component: CustomerManagement
        },
        {
          path: 'customerManagement',
          name: 'customerManagement',
          component: CustomerManagement
        },
        {
          path: 'createCustomer',
          name: 'createCustomer',
          component: CreateCustomer
        }
      ]
    }
  ]
});

export default router;
