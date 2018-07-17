<template>
	<div class="app-header">
		<!-- 首页 -->
		<div class="header__title" v-if="isShow === '1'">
			<slot class="header__title--text" name="title"></slot>
		</div>
		<div class="header__title" v-else-if="isShow === '2'">
			<!-- 带有返回按钮的页面 -->
			<v-touch @tap="returnLastPage" class="header__title--icon iconfont icon-icon-arrow-left2"></v-touch>
			<slot class="header__title--text" name="title"></slot>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isShow: '1',
		}
	},
	methods: {
		returnLastPage() {
			// 返回上一级页面
			this.$router.go(-1)
		}
	},
	mounted() {
		if(this.$route.name === 'Register') {
			this.isShow = '2'
		}
	}
}
</script>
<style lang="scss">
	.app-header{
		height: 1.2rem;
		font-size: 0.6rem;
		color: #11844a;
		background:#FFF;
	}
	.header__title{
		text-align: center;
		height: 1.2rem;
		line-height: 1.2rem;
		.header__title--icon{
			position: absolute;
			float: left;
			font-size: 0.7rem;
			width: 1rem;
			height: 1rem;
		}
	}
</style>