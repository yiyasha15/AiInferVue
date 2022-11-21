<template>
    <div class="card">
      <div class="logo">
          AI Inference Portal
      </div>
      <div class="form">
        <p class="text-cyan-600 font-bold font-sans text-xl tracking-wider py-8">你確定你要退出嗎？</p>
          <button class="button" @click="signout">登出</button>
      </div>
    </div>
</template>
  
<script setup>
import router from '@/router';  
  function signout(){
      router.push('/')
  }
</script>
  
<style scoped>
  .card{
      width: 419px;
      margin: 120px auto;
  }
  .logo{
      max-width: 419px;
      max-height: 132px;
      background: #E3F3F6;
      font: normal normal bold 18px/24px Noto Sans;
      letter-spacing: 0.9px;
      color: #3B8DA1;
      padding: 54px;
      opacity: 1;
  }
  .button{
      width: 150px;
      height: 44px;
      color: #FFFFFF;
      background: #ef4357 0% 0% no-repeat padding-box;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      margin: 0px 5px;
  }

</style>
  