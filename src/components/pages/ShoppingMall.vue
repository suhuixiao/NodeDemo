<template>
    <div>
        <swiper :options="swiperOption" ref="carouselSwiper" class="carousel">
			<swiper-slide v-for="(item, index) in picUrl" class="carousel__div" :key="item">
				<img :src="item" alt="">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
        
        <div class="goods">
            <div class="goods-title">热卖饮品</div>
            <div class="goods-container">
                <div v-for="(item , index) in hotGoods" :key="index" class="goods-item" @click="buyGoods(item.image, item.name, item.price)">
                    <div class="goods-image">
                        <img :src="item.image" width="90%" />
                    </div>
                    <div class="goods-name">{{item.name}}</div>
                    <div class="goods-price">￥{{item.price}}</div>
                </div>
            </div>
        </div>
       <div v-if="showDialog" class="dialog">
            <img :src="dialogPic" width="80%" />
            <div class="descr">
                <div class="font">{{dialogName}}</div>
                <div class="font">单价: {{dialogPrice}}</div>
            </div>
            <div class="num-and-price">
                <div class="num-container">
                    <div class="num-changed">数量：{{num}}</div>
                    <div class="icon">
                        <div @click="addNum()" class="iconfont icon-shang"></div>
                        <div @click="reduceNum()" class="iconfont icon-xia"></div>
                    </div>
                </div>
                <div class="all-price">总价: {{dialogAllPrice}}</div>
            </div>
            <div class="go-to-pay">去结算</div>
        </div>
        <div v-if="showDialog" class="shade" @click="closeDialog"></div>
    </div>
</template>

<script>
    import api from '../../api';
    export default {
        data() {
            return {
                swiperOption: {
                    // 自动播放
                    autoplay: 2500,
                    pagination: '.swiper-pagination',
                    // 圆点是否可以点击
                    paginationClickable: true,
                    // 手动切换轮播后是否禁止自动播放
                    autoplayDisableOnInteraction: false
                }, 
                msg: 'Shopping Mall',
                // 轮播图片的地址
			    picUrl: ['http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175040_1780.jpg', 
                         'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175111_9509.jpg', 
                         'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175142_6947.jpg'],
                hotGoods:[{name: '', price: '', image: ''}],  //热卖商品
                num: 1,
                showDialog: false,
                dialogPic: '',
                dialogName: '',
                dialogPrice: '',
                dialogAllPrice: '',
            }
        },
        methods: {
            addNum() {
                this.num += 1;
                this.dialogAllPrice = this.num * this.dialogPrice;
            },
            reduceNum() {
                if(this.num > 1) {
                    this.num += -1;
                    this.dialogAllPrice = this.num * this.dialogPrice;
                }
            },
            buyGoods(image, name, price) {
                this.showDialog = true;
                this.num = 1;
                this.dialogPic = image;
                this.dialogName = name;
                this.dialogPrice = price;
                this.dialogAllPrice = this.num * this.dialogPrice;
            },
            closeDialog() {
                this.showDialog = false;
            }
        },
        created(){
            // 录入商品数据
            // api.setData().then(res => {
            // }).catch(err => {
            // })
            // 请求商品数据
            api.getData().then(res => {
                if(res.data.code == 200) {
                    this.hotGoods = res.data.message;
                    // this.$store.dispatch('ACTIONS_SHOW_TOAST', {content: res.data.message, time: 1500});
                }else {
                    
                }
            }).catch(err => {
                this.$store.dispatch('ACTIONS_SHOW_TOAST', {content: '查询商品失败', time: 1500})
            })
        }
       
    }
</script>

<style lang="scss" scoped>
   .carousel{
		width: 10rem;
		height: 4.2rem;
	}
	.carousel__div{
		width: 100%;
		height: 4.2rem;
		margin: auto;
		img{
			width: 100%;
		}
	}
    .goods {
        width: 10rem;
        margin: auto;
        .goods-title {
            width: 100%;
            height: 1.2rem;
            text-align: center;
            line-height: 1.2rem;
            background: #f3eded;
            font-size: 0.6rem;
        }
    }
    .goods-container {
        display: flex;
        flex-wrap: wrap;
    }
    .goods-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #cccccc;
        box-sizing: border-box;
        width: 50%;
        .goods-image {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.3rem;
        }
        .goods-name {
            height: 0.8rem;
            line-height: 0.8rem;
            font-size: 0.5rem;
        }
        .goods-price {
            height: 0.5rem;
            line-height: 0.5rem;
            font-size: 0.4rem;
            padding-bottom: 0.2rem;
        }
        &:nth-child(2n) {
            border-left: 1px solid #cccccc;
        }
    }
    .dialog {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 2.2rem;
        width: 8rem;
        margin: auto;
        display: flex;
        z-index: 2;
        background: #ffffff;
        left: 50%;
        margin-left: -4rem;
        flex-direction: column;
        padding-bottom: 0.9rem;
        .descr {
            display: flex;
            height: 1.2rem;
            line-height: 1.2rem;
            .font {
                font-size: 0.5rem;
                padding: 0 0.4rem;
            }
        }
        .go-to-pay {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.5rem;
            height: 0.8rem;
            background: #ff0036;
            color: #ffffff;
            font-size: 0.5rem;
            font-weight: bold;
            border-radius: 0.6rem;
            margin-top: 0.2rem;
        }
    }
    .num-and-price {
        display: flex;
        height: 1.2rem;
        align-items: center;
        .num-container {
            display: flex;
            align-items: center;
            .num-changed, .icon {
                padding: 0 0.1rem;
            }
            .num-changed {
                font-size: 0.5rem;
            }
            .iconfont {
                font-size: 0.2rem
            }
        }
        .all-price {
            font-size: 0.5rem;
            padding: 0 0.3rem;
        }
    }
    .shade {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        opacity:0.5;
        background: #cccccc;
        z-index: 1;
    }
</style>
