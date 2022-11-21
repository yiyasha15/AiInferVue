<template>
<div class="p-4 my-20 mx-auto w-full max-w-xl bg-neutral-100 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0  text-left rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" @click="$emit('close')">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Close modal</span>
    </button>
    <form class="space-y-6" action="#">
        <h5 class="text-lg font-medium text-gray-900 dark:text-white">選擇</h5>
        <img :src="record.img_url" class="mx-auto mb-2 max-w-xs"/>
        <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">中文姓名<span class="text-sky-400">*</span></label>
            <input type="text" name="name" id="name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="請輸入中文姓名" v-model="record.name" required>
        </div>
        <div>
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">上傳日期<span class="text-sky-400">*</span></label>
            <input type="text" name="date" id="date" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="上傳日期	" v-model="record.upload_date" required>
        </div>
        <div>
            <label for="rec_no" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">病歷號<span class="text-sky-400">*</span></label>
            <input type="text" name="rec_no" id="rec_no" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="病歷號" v-model="record.med_record_no" required>
        </div>
        <div>
            <label for="check_no" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">檢查單號<span class="text-sky-400">*</span></label>
            <input type="text" name="check_no" id="check_no" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="檢查單號" v-model="record.checklist_no" required>
        </div>
    </form>

    <!-- {{record}} -->
</div>

</template>
<script setup>
defineProps({
  record: Object
})
</script> 