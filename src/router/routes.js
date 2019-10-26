
const routes = [
  {
    path: '/hotel',
    name:'hotel',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '',
        component: () => import('pages/hotel/hotelmainscreen.vue'),
      },
      { path: 'test',
        name: 'test',
       component: () => import('pages/hotel/test.vue'),
      },
      {
        path: 'addhotel',
        name: 'addhotel',
        component: () => import('pages/hotel/hoteladd.vue'),
      },
      {
        path: ':id',
        name: 'layouttab',
        component: () => import('pages/hotel/tabhotel/layouttab.vue'),
      },
      {
        path: 'statusone',
        name: 'statusone',
        component: () => import('pages/hotel/status/statusone.vue'),
      },
      {
        path: 'statusonesign',
        name: 'statusonesign',
        component: () => import('pages/hotel/status/statusonesign.vue')
      },
      {
        path: 'statustwo',
        name: 'statustwo',
        component: () => import('pages/hotel/status/statustwo.vue')
      },
      {
        path: 'statusthree',
        name: 'statusthree',
        component: () => import('pages/hotel/status/statusthree.vue')
      },
      {
        path: 'statusfour',
        name: 'statusfour',
        component: () => import('pages/hotel/status/statusfour.vue')
      },
      {
        path: 'statustwosign',
        name: 'statustwosign',
        component: () => import('pages/hotel/status/statustwosign.vue')
      },
      {
        path: 'statusfinal',
        name: 'statusfinal',
        component: () => import('pages/hotel/status/statusfinal.vue')
      },

      {
        path: 'shop',
        name: 'shop',
        component: ()=> import('pages/shop/shopmain.vue')
      }
    ]
  },
  {
    path: '/',
    name:'login',
    component: () => import('pages/Login/LoginScreen.vue')
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
