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
        path: ':id',
        name: 'layouttab',
        component: () => import('pages/hotel/tabhotel/layouttab.vue'),
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
    path: '/hotelb',
    name: 'hotelb',
    component: () => import('layouts/MyLayoutback.vue'),
    children: [
      {
        path: 'addhotel',
        name: 'addhotel',
        component: () => import('pages/hotel/hoteladd.vue'),
      },

      {
        path: 'statusonesign',
        name: 'statusonesign',
        component: () => import('pages/hotel/status/statusonesign.vue')
      },
      {
        path: 'statustwosign',
        name: 'statustwosign',
        component: () => import('pages/hotel/status/statustwosign.vue')
      },

      {
        path: 'orderbill',
        name: 'orderbill' ,
        component: ()=> import('pages/bill/orderbill.vue')
      },

      {
        path: 'detail',
        name: 'personeldetail' ,
        component: ()=> import('pages/personel/personeldetail.vue')
      },

      {
        path: 'personeladd',
        name: 'personeladd' ,
        component: ()=> import('pages/personel/personeladdone.vue')
      },
      {
        path: 'personeladdtwo',
        name: 'personeladdtwo' ,
        component: ()=> import('pages/personel/personeladdtwo.vue')
      },
    ]
  },

  {
    path: '/hoteln',
    name: 'hotelsn',
    component: () => import('layouts/MyLayoutnull.vue'),
    children: [
      {
        path: 'statusone',
        name: 'statusone',
        component: () => import('pages/hotel/status/statusone.vue'),
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
        path: 'statusfinal',
        name: 'statusfinal',
        component: () => import('pages/hotel/status/statusfinal.vue')
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
