
const routes = [
  {
    path: '',
    name:'layout',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'hotel',
        name: 'hotel',
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
