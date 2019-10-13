
const routes = [
  {
    path: '/index',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') }
    ]
  },
  {
    path: '/',
    name:'login',
    component: () => import('pages/Login/LoginScreen.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
