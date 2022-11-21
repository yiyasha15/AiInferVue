<template>
    <SignIn v-if="!authenticated" @sign-in-success="getToken"></SignIn>
    <div v-else>
        <NavBar></NavBar>
        <div class="mt-20 max-w-md mx-auto">
            <p class="text-2xl text-cyan-700 tracking-wider py-3 font-sans">雲端智能輔助系統</p>
            <input ref="upload" class="hidden" type="file" name="myImage" accept="image/png, image/gif, image/jpeg" @change="changeFile"/>
        
            <div class="relative text-white"  v-if="image">
                <img :src="image" class="mx-auto mb-2 max-w-xs"/>
                <button class="bg-white rounded-3xl cursor-pointer w-8 h-8 text-rose-400 m-2 absolute top-0.5 right-16" @click="image=''" v-if="image">
                   <p class="font-bold text-lg">X</p> 
                </button>
            </div>
            <button class="bg-cyan-600 hover:bg-cyan-700 rounded-sm m-2 cursor-pointer w-80 h-12 text-white" @click="uploadImage">
                上傳影像
            </button>
            <button class="bg-cyan-600 hover:bg-cyan-700 rounded-sm m-2 cursor-pointer w-80 h-12 text-white" @click="understandMore">
                了解更多
            </button>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import SignIn from '@/components/SignIn.vue'
import NavBar from '@/components/NavBar.vue';
const authenticated = ref(false);
const image = ref("");
const upload = ref(null);
const getToken = (token) =>{
    authenticated.value = true;
    console.log("got ze token",token);
}
function changeFile(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (files) {
        const fileReader = new FileReader()
        fileReader.onload = (e) => {
        image.value = e.target.result;
        console.log(image); //file
        }
        if(files[0])
            {
                fileReader.readAsDataURL(files[0]);
                image.value= files[0];
                console.log(image); //url
            }
        }
    }
function uploadImage(){
    upload.value.click()
console.log("upload image");
}
function understandMore(){
console.log("understand more");
}
</script>