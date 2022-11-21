<template>
    <div class="sm:p-10 p-4 my-10 mx-4 sm:mx-auto max-w-4xl bg-neutral-100 text-left rounded-xl">
        <form class="space-y-6" @submit.prevent="basicInfoSubmit">
            <h5 class="text-2xl font-medium text-gray-900 dark:text-white">填寫申請資料</h5>
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">基本資料</h5>
            <div>
                <label for="name" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">姓名<span class="text-sky-400">*</span></label>
                <input v-model="medicalData.name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="姓名" required>
            </div>
            <div>
                <label for="id_num" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">身分證號碼<span class="text-sky-400">*</span></label>
                <input v-model="medicalData.id" type="text" name="id_num" id="id_num" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="身分證號碼" required>
            </div>
            <div>
                <label for="ph_num" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">電話號碼<span class="text-sky-400">*</span></label>
                <input v-model="medicalData.phonenumber" type="text" name="ph_num" id="ph_num" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="電話號碼" required>
            </div>
            <div>
                <label for="apply_date" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">申請日期<span class="text-sky-400">*</span></label>
                <Datepicker :style="customStyle" v-model="medicalData.applydate" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" required/>
            </div>
            <div>
                <label for="hospital" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">申請醫院<span class="text-sky-400">*</span></label>
                <select id="hospital" v-model="medicalData.hospital" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" required>
                <option selected>申請醫院</option>
                <option value="新光醫院">新光醫院</option>
                <option value="新光醫院2">新光醫院 2</option>
                </select>
            </div>
            <div>
                <label for="purpose_type" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">申請用途<span class="text-sky-400">*</span></label>
                <select v-model="medicalData.purposetype" id="purpose_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" required>
                <option selected>無設定</option>
                <option value="轉診">轉診</option>
                <option value="出國">出國</option>
                <option value="健保核保、理賠">健保核保、理賠</option>
                <option value="兵役">兵役</option>
                <option value="看護">看護</option>
                <option value="訴訟">訴訟</option>
                <option value="司法相驗">司法相驗</option>
                <option value="其他">其他</option>
                <option value="重大傷病">重大傷病</option>
                <option value="健檢">健檢</option>
                <option value="國際醫療">國際醫療</option>
                <option value="健保事前藥物審查">健保事前藥物審查</option>
                <option value="臨床試驗">臨床試驗</option>
                </select>
            </div>
            <!-- preceeding purpose type data.. -->
            <div>
                <label for="insurance" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">欲傳送保險公司</label>
                <select v-model="medicalData.insurancecompany" id="insurance" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500">
                <option selected>無</option>
                <option value="新光保險">新光保險</option>
                </select>
            </div>
            <div>
                <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Email</label>
                <input v-model="medicalData.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required>
            </div>
            <div>
                <label for="post" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">是否需實體資料</label>
                <div class="flex">
                <div class="flex items-center mr-4">
                    <input v-model="medicalData.post" id="post_no" type="radio" value="N" name="post" class="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="post_no" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"> 不</label>
                </div>
                <div class="flex items-center mr-4">
                    <input v-model="medicalData.post" id="post_yes" type="radio" value="Y" name="post" class="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 focus:ring-sky-500 dark:focus:ring-sky-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="post_yes" class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">是的</label>
                </div>
            </div>
            </div>
            <div v-show="medicalData.post == 'Y'">
                <label for="address" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">實體資料寄送地址</label>
                <input v-model="medicalData.address" type="text" name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="實體資料寄送地址">
            </div>
            <div>
                <label for="add_item" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Add item</label>
                <select v-model="medicalData.add" id="add_item" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500">
                <option selected value="1">乙種診斷證明書副本</option>
                <option value="2">病歷複製本</option>
                <option value="3">醫學影像光碟</option>
                <option value="4">中英文病歷摘要</option>
                <option value="5">就醫費用證明</option>
                <option value="0">清除</option>
                </select>
            </div>
            <!-- add items forms -->
            <div v-show="addItems1" class="sm:p-10 p-4 my-10 mx-auto border max-w-4xl bg-neutral-100 text-left rounded-xl">
                <form class="space-y-6" @submit.prevent="savetypeBFunc">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">乙種診斷證明書副本 <span class="text-sky-500">每份20元</span></h5>
                    <div>
                        <label for="diseasename" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">疾病名稱(概述)<span class="text-sky-400">*</span></label>
                        <input v-model="typeBDiagCertificate.disease" required type="text" name="diseasename" id="diseasename" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="疾病名稱(概述)" >
                    </div>
                    <div>
                        <label for="period_type" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">期間<span class="text-sky-400">*</span></label>
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="typeBDiagCertificate.periodtype" id="checkbox-list1" type="checkbox" value="住院" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="checkbox-list1" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">住院</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="typeBDiagCertificate.periodtype" id="checkbox-list2" type="checkbox" value="急診" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="checkbox-list2" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">急診</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="typeBDiagCertificate.periodtype" id="checkbox-list3" type="checkbox" value="門診" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="checkbox-list3" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">門診</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label for="start_date" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">就醫日期(起)<span class="text-sky-400">*</span></label>
                        <Datepicker required :style="customStyle" v-model="typeBDiagCertificate.start_date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"/>
                    </div>
                    <div>
                        <label for="end_date" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">就醫日期(迄)<span class="text-sky-400">*</span></label>
                        <Datepicker required="true" :style="customStyle" v-model="typeBDiagCertificate.end_date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"/>
                    </div>
                    <!-- error alert -->
                    <div v-show="savetypeBerror" class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" >
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Info</span>
                    <div>
                        請填寫所需的詳細信息。
                    </div>
                    </div>
                    <!-- success alert -->
                    <div v-show="savetypeBsuccess" class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        添加成功。
                    </div>
                    <button type="submit" class="w-40 text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-lg px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">保持</button>
                </form>
            </div>
            <div v-show="addItems2" class="sm:p-10 p-4 my-10 mx-auto border max-w-4xl bg-neutral-100 text-left rounded-xl">
                <form class="space-y-6" @submit.prevent="saveMedRecCopyFunc">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">病歷複製本 <span class="text-sky-500">每份20元</span></h5>
                    <div>
                        <label for="record_type" class="mlblock mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">種類<span class="text-sky-400">*</span></label>
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecCopy.recordtype" id="medRecCopy-list1" type="checkbox" value="檢驗報告單：血液、尿、糞等" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecCopy-list1" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">檢驗報告單：血液、尿、糞等</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecCopy.recordtype" id="medRecCopy-list2" type="checkbox" value="病理切片報告" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecCopy-list2" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">病理切片報告</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecCopy.recordtype" id="medRecCopy-list3" type="checkbox" value="內視鏡報告" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecCopy-list3" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">內視鏡報告</label>
                                </div>
                            </li>
                        </ul>
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecCopy.recordtype" id="medRecCopy-list4" type="checkbox" value="超音波報告" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecCopy-list4" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">超音波報告</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecCopy.recordtype" id="medRecCopy-list5" type="checkbox" value="放射線報告" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecCopy-list5" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">放射線報告</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecCopy.recordtype" id="medRecCopy-list6" type="checkbox" value="其他影像報告" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecCopy-list6" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">其他影像報告</label>
                                </div>
                            </li>
                        </ul>
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecCopy.recordtype" id="medRecCopy-list7" type="checkbox" value="門診紀錄" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecCopy-list7" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">門診紀錄</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecCopy.recordtype" id="medRecCopy-list8" type="checkbox" value="急診紀錄" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecCopy-list8" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">急診紀錄</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecCopy.recordtype" id="medRecCopy-list9" type="checkbox" value="出院摘要" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecCopy-list9" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">出院摘要</label>
                                </div>
                            </li>
                        </ul>
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecCopy.recordtype" id="medRecCopy-list10" type="checkbox" value="手術紀錄" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecCopy-list10" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">手術紀錄</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecCopy.recordtype" id="medRecCopy-list11" type="checkbox" value="心導管紀錄" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecCopy-list11" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">心導管紀錄</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecCopy.recordtype" id="medRecCopy-list12" type="checkbox" value="其他" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecCopy-list12" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">其他</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div v-show="medRecCopy.recordtype.includes('其他')">
                        <label for="medRecCopyother" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">其他</label>
                        <input v-model="medRecCopy.other" type="text" name="medRecCopyother" id="medRecCopyother" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="其他" >
                    </div>
                    <!-- <div>
                        <label for="medRecCopyCopies" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">份數<span class="text-sky-400">*</span></label>
                        <input v-model="medRecCopy.copies" required type="text" name="medRecCopyCopies" id="medRecCopyCopies" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="份數" >
                    </div> -->
                    <!-- error alert -->
                    <div v-show="saveMedRecCopyerror" class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" >
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Info</span>
                    <div>
                        請填寫所需的詳細信息。
                    </div>
                    </div>
                    <!-- success alert -->
                    <div v-show="saveMedRecCopysuccess" class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        添加成功。
                    </div>
                    <button type="submit" class="w-40 text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-lg px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">保持</button>
                </form>
            </div>
            <div v-show="addItems3" class="sm:p-10 p-4 my-10 mx-auto border max-w-4xl bg-neutral-100 text-left rounded-xl">
                <form class="space-y-6" @submit.prevent="savemedImgDiscFunc">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">醫學影像光碟 <span class="text-sky-500">每張300元</span></h5>
                    <div>
                        <label for="imgrecord_type" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">種類<span class="text-sky-400">*</span></label>
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medImgDisc.recordtype" id="medImgDisc-list1" type="checkbox" value="X光" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medImgDisc-list1" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">X光</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medImgDisc.recordtype" id="medImgDisc-list2" type="checkbox" value="核磁共振(MRI)" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medImgDisc-list2" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">核磁共振(MRI)</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medImgDisc.recordtype" id="medImgDisc-list3" type="checkbox" value="電腦斷層(CT)" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medImgDisc-list3" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">電腦斷層(CT)</label>
                                </div>
                            </li>
                        </ul>
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medImgDisc.recordtype" id="medImgDisc-list4" type="checkbox" value="超音波" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medImgDisc-list4" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">超音波</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medImgDisc.recordtype" id="medImgDisc-list5" type="checkbox" value="內視鏡" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medImgDisc-list5" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">內視鏡</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medImgDisc.recordtype" id="medImgDisc-list12" type="checkbox" value="其他" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medImgDisc-list12" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">其他</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div v-show="medImgDisc.recordtype.includes('其他')">
                        <label for="medImgDiscother" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">其他</label>
                        <input v-model="medImgDisc.other" type="text" name="medImgDiscother" id="medImgDiscother" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="其他" >
                    </div>
                    <div>
                        <label for="medImgDiscCopies" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">份數<span class="text-sky-400">*</span></label>
                        <input v-model="medImgDisc.copies" required type="text" name="medImgDiscCopies" id="medImgDiscCopies" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="份數" >
                    </div>


                    <!-- error alert -->
                    <div v-show="savemedImgDiscerror" class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" >
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Info</span>
                    <div>
                        請填寫所需的詳細信息。
                    </div>
                    </div>
                    <!-- success alert -->
                    <div v-show="savemedImgDiscsuccess" class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        添加成功。
                    </div>
                    <button type="submit" class="w-40 text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-lg px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">保持</button>
                </form>
            </div>
            <div v-show="addItems4" class="sm:p-10 p-4 my-10 mx-auto border max-w-4xl bg-neutral-100 text-left rounded-xl">
                <form class="space-y-6" @submit.prevent="savemedRecSummaryFunc">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">乙種診斷證明書副本 <span class="text-sky-500">每份20元</span></h5>
                    <div>
                        <label for="summaryRecordType" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">種類<span class="text-sky-400">*</span></label>
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecSummary.recordtype" id="medRecSummary-list1" type="checkbox" value="中文病歷摘要" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecSummary-list1" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">中文病歷摘要 (每科650元)</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecSummary.recordtype" id="medRecSummary-list2" type="checkbox" value="英文病歷摘要" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecSummary-list2" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">英文病歷摘要 (每科650元)</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label for="medRecSummaryDept" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">科別<span class="text-sky-400">*</span></label>
                        <input v-model="medRecSummary.department" required type="text" name="medRecSummarydept" id="medRecSummarydept" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="科別" >
                    </div>
                    <div>
                        <label for="medRecSummaryDoc" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">主治醫生<span class="text-sky-400">*</span></label>
                        <input v-model="medRecSummary.doctor" required type="text" name="medRecSummarydoc" id="medRecSummarydoc" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="主治醫生" >
                    </div>
                    <div>
                        <label for="medRecSummaryDis" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">疾病名稱<span class="text-sky-400">*</span></label>
                        <input v-model="medRecSummary.disease" required type="text" name="medRecSummarydis" id="medRecSummarydis" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="疾病名稱" >
                    </div>
                    <div>
                        <label for="summaryperType" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">期間<span class="text-sky-400">*</span></label>
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecSummary.periodtype" id="medRecSummary-plist1" type="checkbox" value="住院" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecSummary-plist1" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">住院</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecSummary.periodtype" id="medRecSummary-plist1" type="checkbox" value="急診" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecSummary-plist2" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">急診</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medRecSummary.periodtype" id="medRecSummary-plist3" type="checkbox" value="門診" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="medRecSummary-plist3" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">門診</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label for="summstart_date" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">就醫日期(起)<span class="text-sky-400">*</span></label>
                        <Datepicker required :style="customStyle" v-model="medRecSummary.start_date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"/>
                    </div>
                    <div>
                        <label for="summend_date" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">就醫日期(迄)<span class="text-sky-400">*</span></label>
                        <Datepicker required="true" :style="customStyle" v-model="medRecSummary.end_date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"/>
                    </div>
                    <!-- error alert -->
                    <div v-show="savemedRecSummaryerror" class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" >
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Info</span>
                    <div>
                        請填寫所需的詳細信息。
                    </div>
                    </div>
                    <!-- success alert -->
                    <div v-show="savemedRecSummarysuccess" class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        添加成功。
                    </div>
                    <button type="submit" class="w-40 text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-lg px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">保持</button>
                </form>
            </div>
            <div v-show="addItems5" class="sm:p-10 p-4 my-10 mx-auto border max-w-4xl bg-neutral-100 text-left rounded-xl">
                <form class="space-y-6" @submit.prevent="savemedExpensesFunc">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">就醫費用證明 <span class="text-sky-500">每份20元</span></h5>
                    <div>
                        <label for="expDep" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">科別<span class="text-sky-400">*</span></label>
                        <input v-model="medExpenses.department" required type="text" name="expDep" id="expDep" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="科別" >
                    </div>
                    <div>
                        <label for="expperiod_type" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">期間<span class="text-sky-400">*</span></label>
                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medExpenses.periodtype" id="pt-list1" type="checkbox" value="住院" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="pt-list1" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">住院</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medExpenses.periodtype" id="pt-list2" type="checkbox" value="急診" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="pt-list2" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">急診</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input v-model="medExpenses.periodtype" id="pt-list3" type="checkbox" value="門診" class="w-4 h-4 text-sky-500 bg-gray-100 rounded border-gray-300 focus:ring-sky-600 dark:focus:ring-sky-500 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="pt-list3" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">門診</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label for="ptstart_date" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">就醫日期(起)<span class="text-sky-400">*</span></label>
                        <Datepicker required :style="customStyle" v-model="medExpenses.start_date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"/>
                    </div>
                    <div>
                        <label for="ptend_date" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">就醫日期(迄)<span class="text-sky-400">*</span></label>
                        <Datepicker required="true" :style="customStyle" v-model="medExpenses.end_date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"/>
                    </div>
                    <!-- error alert -->
                    <div v-show="savemedExpenseserror" class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" >
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Info</span>
                    <div>
                        請填寫所需的詳細信息。
                    </div>
                    </div>
                    <!-- success alert -->
                    <div v-show="savemedExpensessuccess" class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        添加成功。
                    </div>
                    <button type="submit" class="w-40 text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-lg px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">保持</button>
                </form>
            </div>
            <!-- saved data from add items  -->
            <div v-show="savetypeBData.length" class="py-6 px-10 my-10 border bg-neutral-100 text-left rounded-xl">
                <h5 class="mb-3 text-xl font-medium text-gray-900 dark:text-white">乙種診斷證明書副本 </h5>
                <div class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <div v-for="typeB in savetypeBData" class="flex justify-between block py-2 px-4 w-full border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <p class="text-md">{{typeB}}</p>
                        <span @click="deleteTypeB(typeB)" class="cursor-pointer inline-flex justify-end ml-2 w-4 h-4 text-xs font-semibold  rounded-full">
                            <svg class="inline-flex w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </span>
                        <!-- <span  @click="editTypeB(typeB)" class="cursor-pointer inline-flex justify-end ml-2 w-4 h-4 text-xs font-semibold  rounded-full">
                            <svg class="inline-flex w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </span> -->
                    </div>
                </div>
            </div>
            <div v-show="saveMedRecCopyData.length" class="py-6 px-10 my-10 mx-auto border max-w-4xl bg-neutral-100 text-left rounded-xl">
                <h5 class="mb-3 text-xl font-medium text-gray-900 dark:text-white">病歷複製本 </h5>
                <div class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <div v-for="rec in saveMedRecCopyData" class="flex justify-between block py-2 px-4 w-full border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <p class="text-md">{{rec}}</p>
                        <span @click="deleteMedRecCopy(rec)" class="cursor-pointer inline-flex justify-end ml-2 w-4 h-4 text-xs font-semibold  rounded-full">
                            <svg class="inline-flex w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </span>
                        <!-- <span  @click="editMedRecCopy(rec)" class="cursor-pointer inline-flex justify-end ml-2 w-4 h-4 text-xs font-semibold  rounded-full">
                            <svg class="inline-flex w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </span> -->
                    </div>
                </div>
            </div>
            <div v-show="savemedImgDiscData.length" class="py-6 px-10 my-10 mx-auto border max-w-4xl bg-neutral-100 text-left rounded-xl">
                <h5 class="mb-3 text-xl font-medium text-gray-900 dark:text-white">醫學影像光碟 </h5>
                <div class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <div v-for="img in savemedImgDiscData" class="flex justify-between block py-2 px-4 w-full border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <p class="text-md">{{img}}</p>
                        <span @click="deletemedImgDisc(img)" class="cursor-pointer inline-flex justify-end ml-2 w-4 h-4 text-xs font-semibold  rounded-full">
                            <svg class="inline-flex w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </span>
                        <!-- <span  @click="deletemedImgDisc(img)" class="cursor-pointer inline-flex justify-end ml-2 w-4 h-4 text-xs font-semibold  rounded-full">
                            <svg class="inline-flex w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </span> -->
                    </div>
                </div>
            </div>
            <div v-show="savemedRecSummaryData.length" class="py-6 px-10 my-10 mx-auto border max-w-4xl bg-neutral-100 text-left rounded-xl">
                <h5 class="mb-3 text-xl font-medium text-gray-900 dark:text-white">中英文病歷摘要 </h5>
                <div class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <div v-for="rec in savemedRecSummaryData" class="flex justify-between block py-2 px-4 w-full border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <p class="text-md">{{rec}}</p>
                        <span @click="deletemedRecSummary(rec)" class="cursor-pointer inline-flex justify-end ml-2 w-4 h-4 text-xs font-semibold  rounded-full">
                            <svg class="inline-flex w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </span>
                        <!-- <span  @click="editmedRecSummary(rec)" class="cursor-pointer inline-flex justify-end ml-2 w-4 h-4 text-xs font-semibold  rounded-full">
                            <svg class="inline-flex w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </span> -->
                    </div>
                </div>
            </div>
            <div v-show="savemedExpensesData.length" class="py-6 px-10 my-10 mx-auto border max-w-4xl bg-neutral-100 text-left rounded-xl">
                <h5 class="mb-3 text-xl font-medium text-gray-900 dark:text-white">就醫費用證明 </h5>
                <div class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <div v-for="exp in savemedExpensesData" class="flex justify-between block py-2 px-4 w-full border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <p class="text-md">{{exp}}</p>
                        <span @click="deletemedExpenses(exp)" class="cursor-pointer inline-flex justify-end ml-2 w-4 h-4 text-xs font-semibold  rounded-full">
                            <svg class="inline-flex w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </span>
                        <!-- <span  @click="editmedExpenses(exp)" class="cursor-pointer inline-flex justify-end ml-2 w-4 h-4 text-xs font-semibold  rounded-full">
                            <svg class="inline-flex w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </span> -->
                    </div>
                </div>
            </div>
            <button type="submit" class="w-40 text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-lg px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">送出</button>
        </form>
        <!-- <button @click="basicInfoSubmit" class="w-40 mt-4 text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-lg px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">送出</button> -->
        <!-- {{medicalData}}
        {{applyData}}
        {{savetypeBData.length}} -->

        <!-- <div v-for="typeB of applyData" >
            <p class="text-md">{{typeB}}</p>
        </div> -->
    </div>
    <!-- type b  -->
</template>
<script setup>
import Datepicker from 'vue3-datepicker'
import { ref, computed } from 'vue'
import axios from 'axios'
//style for date function
const customStyle = ref( {
    "--vdp-hover-bg-color": "#CCC",
    "--vdp-selected-bg-color": "#CCC"
    })

const applyData = ref([])

const medicalData = ref({
    add:''
})
async function basicInfoSubmit(){
    let applyDataArray = applyData._rawValue;
    let ApplyDatas =[];
    for(let a of applyDataArray){
        let json = {};
        json.Categary = a.categary;
        json.Amt = a.Amt
        json.Details = []
        for (let dataa in a) {
           if(dataa != 'categary' && dataa != 'Amt' ){ 
                if(Array.isArray(a[dataa]))
                {
                    for (let detaildata of a[dataa]){
                        let detailJson ={};
                        detailJson.item = dataa;
                        detailJson.item_data = detaildata;
                        json.Details.push(detailJson);
                    }
                    //for all inside array value push to json
                }
                else
                {
                    let detailJson ={};
                    detailJson.item = dataa;
                    detailJson.item_data = a[dataa];
                    json.Details.push(detailJson);
                }
            }
        }
        ApplyDatas.push(json)
    }
    console.log(ApplyDatas);
    try {
        let data = {
            "CertSN":"500",
            "HospID":"Hosp1234",
            "MRUserInfo":{
                "MemberNo": "String123",
                "MemberName": "StringAbc",
                "MemberMobil": "String987" 
            },
            // "ApplyDatas": [ {"Categary":"test", "Details":[{"item":"Department","item_data":"tt"},{"item":"Doctor","item_data":"ttfg"}],"Amt":100},
            // {"Categary":"test", "Details":[{"item":"Department","item_data":"tt"}],"Amt":100},
            // {"Categary":"test", "Details":[{"item":"Department","item_data":"tt"}],"Amt":100}
            // ],
            "ApplyDatas": ApplyDatas
        }
        console.log(data);
        await axios.post("https://fhrwebt.ebmtech.com:44389/api/MRApply",data).then((response) => {
        console.log(response.data)
        })
    } catch (error) {
        console.log(error.response);
    }
}

function getDate(date){
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const withSlashes = [year, month, day].join('/');
return withSlashes
}
const addItems1 = computed(() => {
  return medicalData.value.add == 1
})
const addItems2 = computed(() => {
  return medicalData.value.add == 2
})
const addItems3 = computed(() => {
  return medicalData.value.add == 3
})
const addItems4 = computed(() => {
  return medicalData.value.add == 4
})
const addItems5 = computed(() => {
  return medicalData.value.add == 5
})

const typeBDiagCertificate = ref({
    categary:'Certificate of Diagnosis Copy',
    disease:'',
    periodtype:[],
    start_date: new Date(),
    end_date: new Date(),
    Amt: 20
})
const savetypeBData =ref([])
const savetypeBerror = ref(false)
const savetypeBsuccess = ref(false)



function savetypeBFunc() {
    //save current typeBDiagCertificate data
    //clear typeBDiagCertificate and close modal
    if(typeBDiagCertificate.value.periodtype.length != 0)
    {
        console.log(typeof typeBDiagCertificate.value.start_date);
        typeBDiagCertificate.value.start_date = getDate(typeBDiagCertificate.value.start_date)
        typeBDiagCertificate.value.end_date = getDate(typeBDiagCertificate.value.end_date)
        console.log(typeof typeBDiagCertificate.value.start_date);
        savetypeBData.value.push(typeBDiagCertificate.value);
        applyData.value.push(typeBDiagCertificate.value);
        typeBDiagCertificate.value = {};
        typeBDiagCertificate.value.categary='Certificate of Diagnosis Copy';
        typeBDiagCertificate.value.Amt= 20;
        typeBDiagCertificate.value.periodtype = [];
        typeBDiagCertificate.value.start_date = new Date();
        typeBDiagCertificate.value.end_date = new Date();
        savetypeBerror.value = false;
        savetypeBsuccess.value = true;
        setTimeout(() => savetypeBsuccess.value = false, 2000);
        console.log("saved, cleased and closed");
    }else{
        savetypeBerror.value = true
        setTimeout(() => savetypeBerror.value = false, 2000);
    }
}
// function editTypeB(typeB){
//     //open typeB data and let user edit the form
//     console.log("edit type B", typeB);
//     medicalData.value.add = 1;
//     typeBDiagCertificate.value.disease = typeB.disease;
//     typeBDiagCertificate.value.periodtype = typeB.periodtype;
//     typeBDiagCertificate.value.start_date = typeB.start_date;
//     typeBDiagCertificate.value.end_date = typeB.end_date;

// }
function deleteTypeB(typeB){
    console.log("delete type B", typeB);
    const removeIndex1 = savetypeBData.value.findIndex(typeBData => typeBData.disease === typeB.disease );
    // remove object
    savetypeBData.value.splice( removeIndex1, 1 );
}

const medRecCopy = ref({
    categary:'Medical Record Copy',
    recordtype:[],
    copies:'',
    Amt: 20
})
const saveMedRecCopyData =ref([])
const saveMedRecCopyerror = ref(false)
const saveMedRecCopysuccess = ref(false)

function saveMedRecCopyFunc() {
    //save current typeBDiagCertificate data
    //clear typeBDiagCertificate and close modal
    if(medRecCopy.value.recordtype.length != 0)
    {
        saveMedRecCopyData.value.push(medRecCopy.value);
        applyData.value.push(medRecCopy.value);
        medRecCopy.value = {};
        medRecCopy.value.categary='Medical Record Copy';
        medRecCopy.value.Amt= 20;
        medRecCopy.value.recordtype = [];
        saveMedRecCopyerror.value = false;
        saveMedRecCopysuccess.value = true;
        setTimeout(() => saveMedRecCopysuccess.value = false, 2000);
        console.log("saved, cleaned and closed");
    }else{
        saveMedRecCopyerror.value = true
        setTimeout(() => saveMedRecCopyerror.value = false, 2000);
    }
}
// function editMedRecCopy(medRecCopydata){
//     //open medRecCopydata data and let user edit the form
//     console.log("edit type B", medRecCopy);
//     medicalData.value.add = 2;
//     medRecCopy.value.copies = medRecCopydata.copies;
//     medRecCopy.value.recordtype = medRecCopydata.recordtype;

// }
function deleteMedRecCopy(medRecCopy){
    console.log("delete type B", medRecCopy);
    const removeIndex2 = saveMedRecCopyData.value.findIndex(recCopyData => recCopyData.disease === medRecCopy.disease );
    // remove object
    saveMedRecCopyData.value.splice( removeIndex2, 1 );

}

const medImgDisc = ref({
    categary:'Medical Image',
    recordtype:[],
    copies:'',
    Amt: 300
})
const savemedImgDiscData =ref([])
const savemedImgDiscerror = ref(false)
const savemedImgDiscsuccess = ref(false)

function savemedImgDiscFunc() {
    //save current typeBDiagCertificate data
    //clear typeBDiagCertificate and close modal
    if(medImgDisc.value.recordtype.length != 0)
    {
        savemedImgDiscData.value.push(medImgDisc.value);
        applyData.value.push(medImgDisc.value);
        medImgDisc.value = {};
        medImgDisc.value.categary='Medical Image';
        medImgDisc.value.Amt= 300;
        medImgDisc.value.recordtype = [];
        savemedImgDiscerror.value = false;
        savemedImgDiscsuccess.value = true;
        setTimeout(() => savemedImgDiscsuccess.value = false, 2000);
        console.log("saved, cleased and closed");
    }else{
        savemedImgDiscerror.value = true
        setTimeout(() => savemedImgDiscerror.value = false, 2000);
    }
}
// function editmedImgDisc(medImgDiscEditData){
//     //open typeB data and let user edit the form
//     console.log("edit type B", medImgDiscEditData);
//     medicalData.value.add = 3;
//     medImgDisc.value.copies = medImgDiscEditData.copies;
//     medImgDisc.value.recordtype = medImgDiscEditData.recordtype;
// }
function deletemedImgDisc(medImgDiscdata){
    console.log("delete type B", medImgDiscdata);
    const removeIndex3 = savemedImgDiscData.value.findIndex(med => med.recordtype === medImgDiscdata.recordtype );
    // remove object
    savemedImgDiscData.value.splice( removeIndex3, 1 );

}
const medRecSummary = ref({
    categary:'Medical Record Summary',
    recordtype:[],
    department:'',
    doctor:'',
    disease:'',
    periodtype:[],
    start_date: new Date(),
    end_date: new Date(),
    Amt: 20
})
const savemedRecSummaryData =ref([])
const savemedRecSummaryerror = ref(false)
const savemedRecSummarysuccess = ref(false)

function savemedRecSummaryFunc() {
    if(medRecSummary.value.recordtype.length != 0 && medRecSummary.value.periodtype.length != 0)
    {
        medRecSummary.value.start_date = medRecSummary.value.start_date.toString()
        medRecSummary.value.end_date = medRecSummary.value.end_date.toString()
        savemedRecSummaryData.value.push(medRecSummary.value);
        applyData.value.push(medRecSummary.value);
        medRecSummary.value = {};
        medRecSummary.value.categary='Medical Record Summary';
        medRecSummary.value.Amt= 20;
        medRecSummary.value.periodtype = [];
        medRecSummary.value.recordtype = [];
        medRecSummary.value.start_date = new Date();
        medRecSummary.value.end_date = new Date();
        savemedRecSummaryerror.value = false;
        savemedRecSummarysuccess.value = true;
        setTimeout(() => savemedRecSummarysuccess.value = false, 2000);
        console.log("saved, cleased and closed");
    }else{
        savemedRecSummaryerror.value = true
        setTimeout(() => savemedRecSummaryerror.value = false, 2000);
    }
}
// function editmedRecSummary(rec){
    
// }
function deletemedRecSummary(medRecSummarydata){
    console.log("delete type B", medRecSummarydata);
    const removeIndex4 = savemedRecSummaryData.value.findIndex(medRecSum => {
        medRecSum.disease === medRecSummarydata.disease && medRecSum.department === medRecSummarydata.department &&
        medRecSum.recordtype === medRecSummarydata.recordtype && medRecSum.doctor === medRecSummarydata.doctor
        } );
    // remove object
    savemedRecSummaryData.value.splice( removeIndex4, 1 );

}
const medExpenses = ref({
    categary:'Proof of Payment',
    department:'',
    periodtype:[],
    start_date: new Date(),
    end_date: new Date(),
    Amt: 20
})
const savemedExpensesData =ref([])
const savemedExpenseserror = ref(false)
const savemedExpensessuccess = ref(false)

function savemedExpensesFunc() {
    if(medExpenses.value.periodtype.length != 0)
    {
        medExpenses.value.start_date = medExpenses.value.start_date.toString();
        medExpenses.value.end_date = medExpenses.value.end_date.toString();
        savemedExpensesData.value.push(medExpenses.value);
        applyData.value.push(medExpenses.value);
        medExpenses.value = {};
        medRecSummary.value.categary='Proof of Payment';
        medRecSummary.value.Amt= 20;
        medExpenses.value.periodtype = [];
        medExpenses.value.start_date = new Date();
        medExpenses.value.end_date = new Date();
        savemedExpenseserror.value = false;
        savemedExpensessuccess.value = true;
        setTimeout(() => savemedExpensessuccess.value = false, 2000);
        console.log("saved, cleased and closed");
    }else{
        savemedExpenseserror.value = true
        setTimeout(() => savemedExpenseserror.value = false, 2000);
    }
}
// function editmedExpenses(exp){
// }
function deletemedExpenses(med){
    console.log("delete type B", med);
    const removeIndex5 = savemedExpensesData.value.findIndex(medExp => medExp.department === med.department );
    // remove object
    savemedExpensesData.value.splice( removeIndex5, 1 );

}

//proof of payment

</script> 
<style scoped>

</style>