<template>
    <NavBar></NavBar>
    <RecordTable :record="record"></RecordTable>
</template>
<script setup>
import {ref} from 'vue'
import NavBar from '@/components/NavBar.vue';
import RecordTable from '@/components/RecordTable.vue';
const record = ref([
    {
        id:'321',
        name:'AJ29371265',
        med_record_no:'Me29371265',
        checklist_no:'Ch29371265',
        upload_date:'2022-04-25',
        check_date:'2022-04-25',
        status:'To be processed',
        img_url:'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    },
    {
        id:'321',
        name:'AJ29371265',
        med_record_no:'Me29371265',
        checklist_no:'Ch29371265',
        upload_date:'2022-04-25',
        check_date:'2022-04-25',
        status:'Pending',
        img_url:'https://i.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs',
    },
    {
        id:'321',
        name:'AJ29371265',
        med_record_no:'M29371265',
        checklist_no:'C29371265',
        upload_date:'2022-04-25',
        check_date:'2022-04-25',
        status:'Completed',
        img_url:'https://i.picsum.photos/id/62/200/300.jpg?hmac=Ova5b3XqMVygL4ZvFJ1MfAehiXKiM1Ol14jN_6widUY',
    }
])
</script>
<style scoped>
.button{
    width: 140px;
    height: 50px;
    background: #00BDFE;
    border-radius: 10px;
    opacity: 1;
    text-align: center;
    color: white;
}

</style>