<template>
	<div class="footer" v-show="showBottom">
		<v-touch class="footer__div" @tap="linkUrl='Index'" :class="{active: linkUrl==='Index'}">
			<div class="footer__div--icon iconfont icon-zhuye"></div>
			<div class="footer__div--text">项目</div>
		</v-touch>
		<v-touch class="footer__div" @tap="linkUrl='BlogArticles'" :class="{active: linkUrl==='BlogArticles'}">
			<div class="footer__div--icon iconfont icon-wenzhang"></div>
			<div class="footer__div--text">博客</div>
		</v-touch>
		<v-touch class="footer__div" @tap="linkUrl='WorkExperences'" :class="{active: linkUrl==='WorkExperences'}">
			<div class="footer__div--icon iconfont icon-gongzuojingyan"></div>
			<div class="footer__div--text">工作</div>
		</v-touch>
		<v-touch class="footer__div" @tap="linkUrl='MasterSkills'" :class="{active: linkUrl==='MasterSkills'}">
			<div class="footer__div--icon iconfont icon-xiangmu1"></div>
			<div class="footer__div--text">技能</div>
		</v-touch>
		<v-touch class="footer__div" @tap="linkUrl='User'" :class="{active: linkUrl==='User'}">
			<div class="footer__div--icon iconfont icon-yonghu"></div>
			<div class="footer__div--text">个人</div>
		</v-touch>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				linkUrl: 'Index',
				showBottom: false
			}
		},
		methods: {
			// 控制底部栏的显示
			controlBottomShow() {
				// 登陆页和详情查看页面没有底部栏
				if(this.$route.name === 'Login' || this.$route.name === 'PicDetail'){
					this.showBottom = false
				}else{
					this.showBottom = true
				}
			}
		},
		watch: {
			// 路由跳转
			linkUrl() {
				if(this.linkUrl === 'Index'){
					// 路由跳转的两种方式
					this.$router.push({name: 'Index', params: {title: '首页'}})
					// this.$router.push({path: 'Index', query:{title: 首页}})
				}else if(this.linkUrl === 'BlogArticles'){
					this.$router.push({name: 'BlogArticles', params: {title: '博客文章'}})
				}else if(this.linkUrl === 'WorkExperences'){
					this.$router.push({name: 'WorkExperences', params: {title: '工作经历'}})
				}else if(this.linkUrl === 'MasterSkills'){
					this.$router.push({name: 'MasterSkills', params: {title: '掌握技能'}})
				}else if(this.linkUrl === 'User'){
					// this.$router.push({name: 'User', params: {title: '555'}})
					// 相当于GET，地址后面会看到参数
					this.$router.push({path: '/user'})
				}
			},
			$route() {
				this.controlBottomShow()
			},

		},
		mounted() {
			this.controlBottomShow()
			// 判断当前路由
			if(this.$route.name === 'Index'){
				this.linkUrl = 'Index'
			}else if(this.$route.name === 'BlogArticles'){
				this.linkUrl = 'BlogArticles'
			}else if(this.$route.name === 'WorkExperences'){
				this.linkUrl = 'WorkExperences'
			}else if(this.$route.name === 'MasterSkills'){
				this.linkUrl = 'MasterSkills'
			}else if(this.$route.name === 'User'){
				this.linkUrl = 'User'
			}
		},
	}
</script>
<style lang="scss">
	.footer{
		display: flex;
		display: -webkit-flex;
		position: fixed;
		height: 1.4rem;
		z-index: 2;
		background: #FFF;
		width: 100%;
		bottom: 0;
		border-top: 1px solid #ccc;
		padding: 0.1rem 0 0.2rem 0;
		.footer__div{
		    flex: 1;
		    -webkit-flex: 1;
		    justify-content: center;
		    -webkit-justify-content: center;
		    text-align: center;
			.iconfont {
			    font-size: 0.8rem;
			}
		}	
		.active{
			color: #11844a;
		}
	}
</style>