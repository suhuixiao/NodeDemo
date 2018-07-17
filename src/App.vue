<template>
    <div class="app">
        <!-- <app-header></app-header> -->
        <router-view></router-view>
        <!-- <bottom-bar></bottom-bar>   -->
        <my-loading></my-loading>
        <my-toast></my-toast>
        <my-dialog></my-dialog>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
</style>
