const state = {
	// toast组件对象
	toastObj: {
		show: false,
		text: '',
	},
	// loading组件对象
	loadingObj: {
		show: false,
	},
}
const mutations = {
	// 显示toast组件
	SHOW_TOAST (state, obj) {
		state.toastObj.text = obj.content;
		state.toastObj.show = true;
	},
	// 隐藏toast组件
	HIDE_TOAST (state) {
		state.toastObj.show = false;
	},
	// 显示loading组件
	SHOW_LOADING () {
		state.loadingObj.show = true;
	},
	// 隐藏loading组件
	HIDE_LOADING () {
		state.loadingObj.show = false;
	}
}
const actions = {
	ACTIONS_SHOW_TOAST (context, obj) {
		context.commit('SHOW_TOAST', obj)
		// 异步函数写在actions里
		setTimeout(() => {
			context.commit('HIDE_TOAST')
		}, obj.time)
	},
}
export default {
	state, mutations, actions
}