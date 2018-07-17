import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import commonModules from './modules/commonModules'

Vue.use(Vuex)
export default new Vuex.Store({
	modules: {
		user, commonModules
	}
})