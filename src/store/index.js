import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'

// import example from './module-example'
import app from './app'
import list from './list'
import login from './login'
import hotel from './hotel'
import order from './order'
import rate from './rate'
import shop from './shop'
Vue.use(Vuex)


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [pathify.plugin],
    modules: {
      // example
      list,login,hotel,order,rate,app,shop
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false
  })

  return Store
}
