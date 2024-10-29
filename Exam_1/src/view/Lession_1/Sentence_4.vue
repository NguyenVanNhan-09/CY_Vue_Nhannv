<script setup lang="ts">
  import {ref, watch} from "vue"

let num1 = ref(0)
let num2 = ref(0)
const result = ref(
    {
      sum : 0,
      subtraction : 0,
      multiplication : 0,
      division : 0
    }
)
watch([num1, num2], ([newnum1, newnum2]) => {
      result.value.sum = newnum1 + newnum2
      result.value.subtraction = newnum1 - newnum2
      result.value.multiplication = newnum1 * newnum2
      result.value.division = newnum1 / newnum2 || 0
    }
)

</script>

<template>
  <div class="max-w-screen-sm mx-auto">
    <h1 class="text-2xl font-bold mb-4 text-center">Tính tổng, hiệu, tích, thương</h1>
    <label for="num1" class="block mb-2">Số thứ nhất</label>
    <input
        type="number"
        id="num1"
        v-model="num1"
        class="w-full border border-gray-300 p-2 rounded"
        placeholder="Nhập số thứ nhất"
    />
    <label for="num2" class="block mb-2">Số thứ hai</label>
    <input
        type="number"
        id="num2"
        v-model="num2"
        class="w-full border border-gray-300 p-2 rounded"
        placeholder="Nhập số thứ hai"
    />
    <div class="my-[20px] flex flex-col">
        <span class="mb-2.5">Kết quả:</span>
        <span class="flex gap-2.5">Cộng: <p>{{ result.sum }}</p></span>
        <span class="flex gap-2.5">Trừ: <p>{{ result.subtraction }}</p></span>
        <span class="flex gap-2.5">Nhân: <p>{{ result.multiplication }}</p></span>
        <span class="flex gap-2.5">Chia: <p>{{ result.division }}</p></span>
    </div>
  </div>
</template>

<style scoped>

</style>