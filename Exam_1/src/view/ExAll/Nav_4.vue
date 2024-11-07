<script setup lang="ts">
import {ref} from "vue";

const tasks = ref([])


</script>

<template>
  <div class="bg-white h-full w-full z-20 mb-10 border-b border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="grid grid-cols-5 gap-3 p-4 mt-4 font-medium rounded-lg rtl:space-x-reverse">
          <li class="col-span-1 flex justify-center hover:bg-gray-100 cursor-pointer">
            <RouterLink :to="{ name: 'exAllsentence1' }"
                        class="text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
                  <span>
                      Sentence 1
                  </span>
            </RouterLink>
          </li>
          <li class="col-span-1 flex justify-center hover:bg-gray-100 cursor-pointer">
            <RouterLink :to="{ name: 'exAllsentence2' }"
                        class="text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
                  <span>
                      Sentence 2
                  </span>
            </RouterLink>
          </li>
          <li class="col-span-1 flex justify-center hover:bg-gray-100 cursor-pointer">
            <RouterLink :to="{ name: 'exAllsentence3' }"
                        class="text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
                  <span>
                      Sentence 3
                  </span>
            </RouterLink>
          </li>
          <li class="col-span-1 flex justify-center hover:bg-gray-100 cursor-pointer">
            <RouterLink :to="{ name: 'exAllsentence4' }"
                        class="text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
                  <span>
                      Sentence 4
                  </span>
            </RouterLink>
          </li>
          <li class="col-span-1 flex justify-center hover:bg-gray-100 cursor-pointer">
            <RouterLink :to="{ name: 'exAllsentence5' }"
                        class="text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
                  <span>
                      Sentence 5
                  </span>
            </RouterLink>
          </li>
          <li class="col-span-1 flex justify-center hover:bg-gray-100 cursor-pointer">
            <RouterLink :to="{ name: 'Blogs' }"
                        class="text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
                  <span>
                      Sentence 6
                  </span>
            </RouterLink>
          </li>
          <li class="col-span-1 flex justify-center hover:bg-gray-100 cursor-pointer">
            <RouterLink :to="{ name: 'ls4part2sentence7' }"
                        class="text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
                  <span>
                      Sentence 7
                  </span>
            </RouterLink>
          </li>
          <li class="col-span-1 flex justify-center hover:bg-gray-100 cursor-pointer">
            <RouterLink :to="{ name: 'ls4part2sentence8' }"
                        class="text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
                  <span>
                      Sentence 7
                  </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  transition: opacity 0.3s ease;
}
</style>