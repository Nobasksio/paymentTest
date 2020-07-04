import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        name: 'index',
      },
      {
        path: '/contact/',
        component: () => import('pages/contact/ContactSelectPage.vue'),
        name: 'contact',
      },
      {
        path: '/contact/create/',
        component: () => import('pages/contact/ContactCreatePage.vue'),
        name: 'create-contact',
      },
      {
        path: '/payment-method/',
        component: () => import('pages/payment/PaymentSelectPage.vue'),
        name: 'payment-method',
      },
      {
        path: '/payment-method/create/',
        component: () => import('pages/payment/PaymentCreatePage.vue'),
        name: 'payment-method-creates',
      },
      {
        path: '/success/',
        component: () => import('pages/SuccessPage.vue'),
        name: 'success',
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
