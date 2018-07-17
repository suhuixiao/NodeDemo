import Vue from 'vue'
// 头部栏
import AppHeader from '@/components/common/AppHeader'
// 底部栏
import BottomBar from '@/components/common/BottomBar'
// toast组件
import Toast from '@/components/common/Toast'
// loading组件
import Loading from '@/components/common/Loading'
// 弹窗组件
import Dialog from '@/components/common/Dialog'
const Com = {
	init (){
		Vue.component('app-header', AppHeader)
		Vue.component('bottom-bar', BottomBar)
		Vue.component('my-toast', Toast)
		Vue.component('my-loading', Loading)
		Vue.component('my-dialog', Dialog)
	},
}
export default Com