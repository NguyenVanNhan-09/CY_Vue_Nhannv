<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div>
      <h1 class="text-center text-2xl mb-6">Lessions</h1>
      <div class="mb-4 flex justify-center">
        <RouterLink :to="{name: 'exAllsentence1'}"
                    class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
          <span class="ml-2">Exercise Vue</span>
        </RouterLink>
      </div>
      <div class="flex gap-5">
        <RouterLink to="ls1/"
                    class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
          <span class="ml-2">Lession 1</span>
        </RouterLink>
        <RouterLink to="ls2/"
                    class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
          <span class="ml-2">Lession 2</span>
        </RouterLink>
        <RouterLink to="ls3/sentence1"
                    class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
          <span class="ml-2">Lession 3</span>
        </RouterLink>
        <RouterLink to="ls4/"
                    class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
          <span class="ml-2">Lession 4</span>
        </RouterLink>
        <RouterLink :to="{name: 'ls5sentence1'}"
                    class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
          <span class="ml-2">Lession 5</span>
        </RouterLink>
        <RouterLink :to="{name: 'ls7Login'}"
                    class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
          <span class="ml-2">Lession 7</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>