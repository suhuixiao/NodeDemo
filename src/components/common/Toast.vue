<template>  
    <div class="toast" v-show="$store.state.commonModules.toastObj.show">
        <div class="mask"></div> 
        <div class="toast-div">{{$store.state.commonModules.toastObj.text}}</div>  
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
    .toast-div{  
        position: fixed; 
        bottom: 0; 
        left: 50%;  
        transform: translate(-50%, 0);  
        -webkit-transform: translate(-50%, 0);  
        margin-bottom: 2rem;  
        background: #000000;  
        line-height: 0.7rem;  
        color: #FFFFFF;  
        padding: 0 0.2rem;  
        border-radius: 0.2rem;  
        z-index: 11;
    }  
</style>  