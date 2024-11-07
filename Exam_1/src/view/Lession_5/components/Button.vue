<script setup lang="ts">
import {defineProps} from "vue"


const props = defineProps({
  icon: {
    type: String,
    default: "ri-close-circle-line"
  }
})

const emit = defineEmits<{
  (e: 'delete'): void
}>()

function handleDelete() {
  emit('delete')
}

</script>

<template>
  <button
      type="button"
      @click="handleDelete"
      class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30">
      <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <i :class="props.icon" class="text-lg"></i>
      </span>
  </button>
</template>

<style scoped>

</style>