<template>
    <div class="flex flex-col">
        <div class="overflow-x-auto">
            <div class="flex justify-between py-6 px-6">
                <div class="relative max-w-xs">
                    <p class="text-cyan-700 text-xl font-semibold pt-2">我的清單</p>
                </div>

                <div class="flex items-center space-x-2">
                    <label for="search" class="sr-only"> 查詢 </label>
                    <input
                        type="text"
                        name="search"
                        class="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        placeholder="查詢"/>
                </div>
            </div>
            <div class=" px-6 w-full inline-block align-middle">
                <div class="overflow-hidden border rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="py-3 pl-4">
                                    <div class="flex items-center h-5">
                                        <!-- <input
                                            id="checkbox-all"
                                            type="checkbox"
                                            class="text-blue-600 border-gray-200 rounded focus:ring-blue-500"/>
                                        <label for="checkbox" class="sr-only">
                                            Checkbox
                                        </label> -->
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                                    上傳日期
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"> 
                                    病歷號
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                                    檢查單號
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                                    檢查日期
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                                    上傳狀態
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                                    影像瀏覽
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="data in record" key="data.id">
                                <td class="py-3 pl-4">
                                    <div class="flex items-center h-5">
                                        <svg @click="editRecord(data)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {{data.upload_date}}
                                </td>
                                <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {{data.med_record_no}}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{data.checklist_no}}
                                </td>
                                <td  class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{data.check_date}}
                                </td>
                                <td  class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    <button v-if="data.status == 'Completed'" class="bg-red-400 text-white p-2 rounded-md">{{data.status}}</button>
                                    <button v-if="data.status == 'Pending'" class="bg-sky-400 text-white p-2 rounded-md">{{data.status}}</button>
                                    <button v-if="data.status == 'To be processed'" class="bg-[#CBCBCB] text-white p-2 rounded-md">{{data.status}}</button>
                                </td>
                                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <button class="text-green-500 hover:text-green-700" @click="showRecord(data)">
                                        View
                                    </button>
                                </td>
                                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <button class="text-red-500 hover:text-red-700" @click="deleteRecord(data)">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <BasicInformation :record="selectedData" v-show="viewInfoModal" @close="viewInfoModal=!viewInfoModal"></BasicInformation>
    <EditInformation :record="selectedData" v-show="editInfoModal" @close="editInfoModal=!editInfoModal"></EditInformation>
</template>

<script setup>
import { ref } from 'vue'
import BasicInformation from './BasicInformation.vue'
import EditInformation from './EditInformation.vue';

defineProps({
  record: Array
})

const viewInfoModal = ref(false)
const editInfoModal = ref(false)

const selectedData = ref({})
function showRecord(data){
    selectedData.value = data;
    viewInfoModal.value = true;
}
function editRecord(data){
    selectedData.value = data;
    editInfoModal.value = true;
}
 
</script>
