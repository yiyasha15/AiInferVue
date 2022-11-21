<template>
    <div class="navbar">
        <RouterLink to="/"><p class="float-left logo">AI Inference Portal</p></RouterLink>
        <div class="float-right cursor-pointer" @click="menu=!menu">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar">
            <p class="inline pl-10 menu">XXX您好</p>
        </div>
        <div v-show="menu" class="absolute right-0 z-10 mt-16 mr-2 w-48 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <RouterLink to="/showrecords" class="block px-4 py-2 text-md text-gray-700 rounded-sm hover:text-white hover:bg-cyan-600" role="menuitem" tabindex="-1" id="user-menu-item-0">我的清單</RouterLink>
            <RouterLink to="/signout" class="block px-4 py-2 text-md text-gray-700 rounded-sm hover:text-white hover:bg-cyan-600" role="menuitem" tabindex="-1" id="user-menu-item-1">登出</RouterLink>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
const menu = ref(false);
</script>
<style scoped>
.navbar{
    width: 100%;
    height: 64px;
    background: #F5F5F5 0% 0% no-repeat padding-box;
    opacity: 1;
}
.float-right{
    float:right;
}
.float-left{
    float:left;
}
.menu{
    color: #6E6E6E;
    padding: 20px 32px;
}
.logo{
    color: #3B8DA1;
    text-align: left;
    font: normal normal bold 18px/24px Noto Sans;
    letter-spacing: 0.9px;
    padding: 20px 32px;
}
.avatar {
  vertical-align: middle;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: inline-block;
}
.inline{
    display: inline-block;
}
.pl-10{
    padding-left: 10px;
}
</style>