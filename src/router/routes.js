
let routes = [
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
        path: 'layouttab',
        name: 'layouttab',
        component: () => import('pages/hotel/tabhotel/layouttab.vue'),
        children: [
          {
            path: 'tablist',
            name: 'tablist',
            component: () => import('pages/hotel/tabhotel/taborderlist.vue'),
          }
        ]
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
