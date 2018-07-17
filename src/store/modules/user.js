const state = {
	mailbox: '',
	telephone: '',
}
const mutations = {
	// 邮箱
	SET_MAILBOX(state, content) {
		state.mailbox = content
	},
	// 电话
	SET_TELEPHONE(state, content) {
		state.telephone = content
	},
}
export default {
	state, mutations
}