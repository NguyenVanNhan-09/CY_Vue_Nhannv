<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div>
      <h1 class="text-center text-2xl mb-6">Lessions</h1>
      <div class="flex gap-5">
        <RouterLink to="ls1/"
           class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
          <span class="ml-2">Lession 1</span>
        </RouterLink>
        <RouterLink to="ls2/"
                    class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
          <span class="ml-2">Lession 2</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>