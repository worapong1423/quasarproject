
const routes = [
  {
    path: '/layouts',
    name:'layouts',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/hotel',
        name:'hotel',
       component: () => import('pages/hotel/hotelmainscreen.vue'),
       children: [
          {path: '/addhotel',
          name: 'addhotel',
          component: () => import('pages/hotel/hoteladd.vue')
          }
       ],
      },
      { path: 'test',
       component: () => import('pages/hotel/test.vue'), 
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
