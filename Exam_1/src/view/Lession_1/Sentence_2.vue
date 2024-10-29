<script setup lang="ts">
import { ref, computed } from 'vue';

const sideLength = ref(0);

const area = computed(() => {
  return sideLength.value ? sideLength.value ** 2 : null;
});
</script>

<template>
  <div class="max-w-screen-sm mx-auto  min-h-screen">
    <h1 class="text-2xl font-bold mb-4 text-center">Tính Diện Tích Hình Vuông</h1>
    <label for="sideLength" class="block mb-2">Chiều dài cạnh (cm):</label>
    <input
        type="number"
        id="sideLength"
        v-model="sideLength"
        class="w-full border border-gray-300 p-2 rounded"
        placeholder="Nhập chiều dài cạnh"
    />
    <!--  Nếu area khác null  -->
    <div v-if="area !== null" class="mt-4">
      <p class="text-lg">Diện tích hình vuông: <strong>{{ area }} cm²</strong></p>
    </div>
  </div>
</template>

<style scoped>

</style>