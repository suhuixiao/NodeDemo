<template>
	<div class="register">
		<app-header>
			<span slot="title">注册</span>
		</app-header>
		<div class="input-container">
			<div class="input__div">
				<input class="username" placeholder="请输入账号" v-model="username" type="text">
			</div>
			<div class="input__div">
				<input class="password" placeholder="请输入密码" v-model="password" type="text">
			</div>
		</div>
		<div class="btn-container" >
			<div class="btn" @touchstart="isHover = true" :class="{active: isHover}" @touchend="goToRegister">马上注册</div>
		</div>
		<!-- <div class="logo-container">
			<img src="static/img/logo.jpg" alt="">
		</div>
		<div class="input-container">
			<div class="input__div">
				<input class="username" placeholder="请输入账号" v-model="username" type="text">
			</div>
			<div class="input__div">
				<input class="password" placeholder="请输入密码" v-model="password" type="text">
			</div>
		</div>
		<div class="btn-container" >
			<div class="btn" @touchstart="isHover = true" :class="{active: isHover}" @touchend="login">登录</div>
		</div> -->
	</div>
</template>
<script>
	import api from '../../api';
	export default {
		data() {
			return {
				username: '',
				password: '',
				// 按钮是否被点击
				isHover: false
			}
		},
		methods: {
			// 注册
			goToRegister() {
				this.isHover = false;
				let optins = {userName: this.username, password: this.password};
				api.register(optins).then(res => {
					if(res.data.code == 200) {
						this.$store.dispatch('ACTIONS_SHOW_TOAST', {content: res.data.message, time: 1500});
						this.$router.push('/')
					}else {
                       this.$store.dispatch('ACTIONS_SHOW_TOAST', {content: '注册失败', time: 1500})
                   }
				}).catch(err => {
					this.$store.dispatch('ACTIONS_SHOW_TOAST', {content: '注册失败', time: 1500})
				})
			}
		},
		mounted() {
			
		}

	}
</script>
<style lang="scss">
	.input__div{
		width: 90%;
		margin: auto;
		border-bottom: 1px solid #ccc;
		input{
			height: 1.2rem;
			width: 90%;
			padding: 0 0.5rem;
			font-size: 0.45rem;
			border: none;
			outline:none;
			margin-top: 0.1rem;

		}	
	}
	.btn-container{
		display: flex;
		// height: 2rem;
		padding: 0.5rem;
		text-align: center;
		.btn{
			width: 2.5rem;
			height: 1rem;
			margin: auto;
			line-height: 1rem;
			font-size: 0.5rem;
			border: 1px solid #64c573;
			color: #64c573;
			border-radius: 0.2rem;
			cursor: pointer;
		}
		.active{
			background: #64c573;
			color: #FFF;
		}
	}
</style>