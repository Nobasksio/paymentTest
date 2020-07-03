import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/contact',
        component: () => import('pages/contact/ContactSelectPage.vue'),
      },
      {
        path: '/contact/create',
        component: () => import('pages/contact/ContactCreatePage.vue'),
      },
      {
        path: '/payment-method',
        component: () => import('pages/payment/PaymentSelectPage.vue'),
      },
      {
        path: '/payment-method/create',
        component: () => import('pages/payment/PaymentCreatePage.vue'),
      },
      {
        path: '/success',
        component: () => import('pages/SuccessPage.vue'),
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
