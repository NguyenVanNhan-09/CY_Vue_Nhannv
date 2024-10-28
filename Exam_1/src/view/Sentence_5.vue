<script setup lang="ts">
  import {ref, computed} from "vue"
  const isChecked = ref(false)
  const textClass = computed(() => {
    return isChecked.value ? "text-green-500 font-bold" : "text-red-500"
  })
</script>

<template>
    <div class="max-w-screen-sm mx-auto flex items-center justify-center">
      <div class="flex gap-5">
            <input type="checkbox" checked="checked" class="bg-white w-8 h-8 rounded-3xl cursor-pointer" v-model="isChecked"/>
        <p :class="textClass" class="text-xl">
          Đây là đoạn văn bản sẽ thay đổi màu sắc và kiểu chữ dựa trên checkbox.
        </p>
      </div>
    </div>
</template>

<style scoped>

</style>