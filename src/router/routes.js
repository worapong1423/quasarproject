const routes = [
  {
    path: '/hotel',
    name:'layouthotel',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '',
        name: 'hotel',
        component: () => import('pages/hotel/hotelmainscreen.vue'),
        meta: {topic:false},
      },
      {
        path: 'addhotel',
        name: 'addhotel',
        component: () => import('pages/hotel/hoteladd.vue'),
        meta: {back: 'hotel',topic:true},
      },
      {
        path: ':id',
        name: 'layouttab',
        component: () => import('pages/hotel/tabhotel/layouttab.vue'),
        meta: {back: 'hotel',topic:true},
      },
      {
        path: ':id/statusone',
        name: 'statusone',
        component: () => import('pages/hotel/status/statusone.vue'),
        meta: {back: 'layouttab',topic:true},
      },
      {
        path: ':id/statustwo',
        name: 'statustwo',
        component: () => import('pages/hotel/status/statustwo.vue'),
        meta: {back: 'layouttab',topic:true},
      },
      {
        path: ':id/statusthree',
        name: 'statusthree',
        component: () => import('pages/hotel/status/statusthree.vue'),
        meta: {back: 'layouttab',topic:true},
      },
      {
        path: ':id/statusfinal',
        name: 'statusfinal',
        component: () => import('pages/hotel/status/statusfinal.vue'),
        meta: {back: 'layouttab',topic:true},
      },
    ]
  },


  {
    path: '/shop',
    name:'layoutshop',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'shop',
        component: ()=> import('pages/shop/shopmain.vue'),
        meta: {topic:false},
      },
    ]
  },

  {
    path: '/personels',
    name:'layoutpersonels',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'personels' ,
        component: ()=> import('pages/personel/personelmain.vue'),
        meta: {topic:false},
      },
      {
        path: 'detail',
        name: 'personeldetail' ,
        component: ()=> import('pages/personel/personeldetail.vue'),
        meta: {back: 'personels',topic:true}
      },
      {
        path: 'add',
        name: 'personeladd' ,
        component: ()=> import('pages/personel/personeladdone.vue'),
        meta: {back: 'personels',topic:true}
      },
      {
        path: 'add2',
        name: 'personeladdtwo' ,
        component: ()=> import('pages/personel/personeladdtwo.vue'),
        meta: {back: 'personeladd',topic:true}
      },
    ]
  },

  {
    path: '/allbill',
    name:'layoutperbill',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'bill' ,
        component: ()=> import('pages/bill/billmain.vue'),
        meta: {topic:false},
      },
      {
        path: 'orderbill',
        name: 'orderbill' ,
        component: ()=> import('pages/bill/orderbill.vue'),
        meta: {back: 'bill',topic:true}
      },
    ]
  },


  {
    path: '/',
    name:'login',
    component: () => import('pages/Login/LoginScreen.vue'),
  },
]


// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  })
}

export default routes
