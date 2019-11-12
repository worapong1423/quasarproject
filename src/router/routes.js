const routes = [
  {
    path: '/laundry',
    name:'layout',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '',
        name: 'hotel',
        component: () => import('pages/hotel/hotelmainscreen.vue'),
      },


      {
        path: 'shop',
        name: 'shop',
        component: ()=> import('pages/shop/shopmain.vue')
      },

      {
        path: 'personels',
        name: 'personels' ,
        component: ()=> import('pages/personel/personelmain.vue')
      },

      {
        path: 'bill',
        name: 'bill' ,
        component: ()=> import('pages/bill/billmain.vue')
      },

    ]
  },

  {
    path: '/laundry',
    name: 'layoutback',
    component: () => import('layouts/MyLayoutback.vue'),
    children: [
      {
        path: 'addhotel',
        name: 'addhotel',
        component: () => import('pages/hotel/hoteladd.vue'),
        meta: {back: 'hotel'}
      },
      {
        path: ':id',
        name: 'layouttab',
        component: () => import('pages/hotel/tabhotel/layouttab.vue'),
        meta: {back: 'hotel'}
      },
      {
        path: 'statusone',
        name: 'statusone',
        component: () => import('pages/hotel/status/statusone.vue'),
        meta: {back: 'layouttab'}
      },
      {
        path: 'statusonesign',
        name: 'statusonesign',
        component: () => import('pages/hotel/status/statusonesign.vue'),
        meta: {back: 'statusone'}
      },{
        path: 'statustwo',
        name: 'statustwo',
        component: () => import('pages/hotel/status/statustwo.vue'),
        meta: {back: 'layouttab'}
      },
      {
        path: 'statusthree',
        name: 'statusthree',
        component: () => import('pages/hotel/status/statusthree.vue'),
        meta: {back: 'layouttab'}
      },
      {
        path: 'statusfour',
        name: 'statusfour',
        component: () => import('pages/hotel/status/statusfour.vue'),
        meta: {back: 'layouttab'}
      },
      {
        path: 'statustwosign',
        name: 'statustwosign',
        component: () => import('pages/hotel/status/statustwosign.vue'),
        meta: {back: 'statusfour'}
      },
      {
        path: 'statusfinal',
        name: 'statusfinal',
        component: () => import('pages/hotel/status/statusfinal.vue'),
        meta: {back: 'layouttab'}
      },

      {
        path: 'detail',
        name: 'personeldetail' ,
        component: ()=> import('pages/personel/personeldetail.vue'),
        meta: {back: 'personels'}
      },
      {
        path: 'personeladd',
        name: 'personeladd' ,
        component: ()=> import('pages/personel/personeladdone.vue'),
        meta: {back: 'personels'}
      },
      {
        path: 'personeladdtwo',
        name: 'personeladdtwo' ,
        component: ()=> import('pages/personel/personeladdtwo.vue'),
        meta: {back: 'personeladd'}
      },

      {
        path: 'orderbill',
        name: 'orderbill' ,
        component: ()=> import('pages/bill/orderbill.vue'),
        meta: {back: 'bill'}
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
