<script setup lang="ts">
import {ref} from "vue"

const fontSize = ref(16)

</script>

<template>
  <div class="max-w-screen-sm mx-auto">
    <h1 class="text-2xl font-bold mb-4 text-center">kích thước chữ</h1>
    <label for="sideLength" class="block mb-2">Kích thước</label>
    <input
        type="number"
        id="fontSize"
        v-model="fontSize"
        class="w-full border border-gray-300 p-2 rounded"
        placeholder="Nhập kích thước chữ"
    />
    <div class="mt-4">
      <p :style="{fontSize: fontSize + 'px'}" class="text-center my-[150px]">Text</p>
    </div>
  </div>
</template>

<style scoped>

</style>