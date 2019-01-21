/**
 * This file simply imports all Vuex modules from @/store/modules, nothing more to it.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
