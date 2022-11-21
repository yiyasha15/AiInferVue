<template>
  <div class="card">
    <div class="logo">
        AI Inference Portal
    </div>
    <div class="form">
        <div class="account pt-32 pb-16">
            <p class="text-cyan-600 font-bold font-sans text-lg tracking-wider inline">帳號：</p>
            <input class="input_form inline" type="text" v-model="user.account">
        </div>
        <div class="account pb-32">
            <p class="text-cyan-600 font-bold font-sans text-lg tracking-wider inline">密碼：</p>
            <input class="input_form inline" type="password" v-model="user.password">
        </div>
        <button class="bg-cyan-600 hover:bg-cyan-700 rounded-sm m-2 cursor-pointer w-40 h-12 text-white" @click="register">登记</button>
        <button class="bg-cyan-600 hover:bg-cyan-700 rounded-sm m-2 cursor-pointer w-40 h-12 text-white" @click="signIn">登入</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// defineProps({
//   msg: String
// })

const user = ref({account:'',password:''})
const emit = defineEmits(['signInSuccess'])
function signIn(){
    if(user.value.account == '1234' && user.value.password == '1234')
    {
        let form = new FormData()
        form.append('account',user.account)
        form.append('password',user.password)
        console.log("form to sign in for hospital",form);
        //authenticate and get token for auth
        let token = 1234;
        //if success emit success
        if(true)
        emit('signInSuccess', token)
    }
}
function register(){
    if(user.value.account == '1234' && user.value.password == '1234'){
        let form = new FormData()
        form.append('account',user.account)
        form.append('password',user.password)
        console.log("form to sign in for hospital",form);
        //authenticate and get token for auth
        let token = 1234;
        //if success emit success
        if(true)
        emit('signInSuccess', token)
    }
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
    background: #00BDFE 0% 0% no-repeat padding-box;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin: 0px 5px;
}
.input_form{
    width: 255px;
    height: 44px;
    background: #F5F5F5 0% 0% no-repeat padding-box;
    border-radius: 5px;
    border: none;
}
.txt{
    text-align: left;
    font: normal normal bold 18px/24px Noto Sans;
    letter-spacing: 0.9px;
    color: #00BDFE;
}
.account{
    max-width: 321px;
    margin: 0 auto;
}
.inline{
    display: inline;
}
.pt-32{
    padding-top: 32px;
}
.pb-32{
    padding-bottom: 32px;
}
.pb-16{
    padding-bottom: 16px;
}
</style>
