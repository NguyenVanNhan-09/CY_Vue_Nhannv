<script setup lang="ts">
import {computed, ref} from "vue";

const products = ref([
  {id: 1, name: 'Product 1', price: 100},
  {id: 2, name: 'Product 2', price: 200},
  {id: 3, name: 'Product 3', price: 300},
])
const minPrice = ref("")

const filterProduct = computed(() => {
  return products.value.filter(product => product.price >= minPrice.value)
})
</script>

<template>
  <div class="max-w-screen-lg mx-auto">
    <h1 class="text-center text-4xl mb-4">This is Sentence 2</h1>
    <form>
      <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <!-- @keyup.enter="" -->
        <input id="search" v-model="minPrice" type="number"
               class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
               placeholder="Number min price" required/>
        <button type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
          Filter
        </button>
      </div>
    </form>
    <ul class="flex gap-5">
      <li v-for="(product, index) in filterProduct" :key="index" class="w-full mt-5">
        <div class="relative bg-gray-900 block p-6 border border-gray-100 rounded-lg max-w-sm mx-auto">
          <span
              class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
          <div class="my-4">
            <h2 class="text-white text-2xl font-bold pb-2">{{ product.name }}</h2>
            <p class="text-gray-300 py-1">{{ product.price }}</p>
          </div>
          <div class="flex justify-end">
            <button class="px-2 py-1 text-white border border-gray-200 font-semibold rounded">
              Click
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>