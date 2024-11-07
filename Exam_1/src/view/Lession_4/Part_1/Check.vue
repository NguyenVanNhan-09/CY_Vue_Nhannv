<script setup lang="ts">
import {defineProps} from "vue"

const props = defineProps<{
  product: {
    title: string;
    description: number;
  }
  isChecked: boolean;
}>()
</script>

<template>
  <li class="min-w-[350px] mt-5">
    <div class="relative bg-gray-900 block p-6 border border-gray-100 rounded-lg max-w-sm mx-auto">
      <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div class="my-4">
        <h2 class="text-white text-2xl font-bold pb-2">{{ product.title }}</h2>
        <p class="text-gray-300 py-1">{{ product.description }}</p>
      </div>

      <div class="flex justify-end">
        <button class="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800">
          {{ isChecked ? 'Đã xác nhận' : 'Chưa xác nhận' }}
        </button>
      </div>
    </div>
  </li>
</template>

<style scoped>

</style>