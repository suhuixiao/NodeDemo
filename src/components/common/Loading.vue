<template>  
    <div class="loading" v-show="$store.state.commonModules.loadingObj.show">
        <div class="mask"></div> 
        <div class="loading-div">
            <span></span>
        </div>  
    </div>  
</template>
<script>  
export default{  
    data(){  
        return {  
            
        }  
    }  
}  
</script>
<style lang="scss">
    $font: 112.5;
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    .loading-div{  
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 10000;
        transform: translate3d(-50%,-50%,0);
        -webkit-transform: translate3d(-50%,-50%,0);
        border-radius: 20rem/$font;
        background: rgba(0,0,0,.502);
        box-sizing: border-box;
        width: 300rem/$font;
        height: 300rem/$font;
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -webkit-align-items: center;
        &>span{
            width: 28%;
            height: 28%;
            border-radius: 50%;
            border: .2em solid #fff;
            border-left-color: transparent;
            animation: rotate .6s infinite linear;
        }
    }  
    @keyframes rotate{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
</style>  