<script setup lang="ts">
import {ref, defineProps, defineEmits} from 'vue';

const props = defineProps({
  selectedStatus: String,
});

const emit = defineEmits(['statusSelected']);

const dropdownOpen = ref(false);
const statuses = ['todo', 'done', 'reject'];

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectStatus = (status: string) => {
  emit('statusSelected', status);
  dropdownOpen.value = false;
};
</script>

<template>
  <div class="relative">
    <button
        @click="toggleDropdown"
        class="w-full px-4 py-2 text-left bg-white border rounded shadow"
    >
      {{ selectedStatus }}
      <span class="float-right"><i class="ri-arrow-down-s-fill"></i></span>
    </button>

    <!-- Dropdown -->
    <div
        v-if="dropdownOpen"
        class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg"
    >
      <div
          v-for="status in statuses"
          :key="status"
          @click="selectStatus(status)"
          :class="[
          'px-4 py-2 cursor-pointer',
          { 'hover:bg-yellow-500 hover:text-white': status === 'todo' },
          { 'hover:bg-green-500 hover:text-white': status === 'done' },
          { 'hover:bg-red-500 hover:text-white': status === 'reject' }
        ]"
      >
        {{ status }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Các kiểu cho component dropdown */
</style>
