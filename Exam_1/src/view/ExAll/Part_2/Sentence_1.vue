<script setup lang="ts">
import {ref} from "vue";

const count = ref(0)
</script>

<template>
  <div class="max-w-screen-lg mx-auto">
    <div class="flex justify-center items-center h-full">
      <div class="flex flex-col items-center">
        <span class="my-6">Click: {{ count }}</span>
        <button
            @click="count++"
            class="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Click me
        </button>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>