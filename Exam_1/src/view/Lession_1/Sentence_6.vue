<script setup lang="ts">
import {computed, ref} from "vue"
const products = ref([
    {id: 1, name: "Product 1", price: 10 , quantity: 3},
    {id: 2, name: "Product 2", price: 20 , quantity: 2},
    {id: 3, name: "Product 3", price: 30 , quantity: 1},
    {id: 4, name: "Product 4", price: 40 , quantity: 3},
    {id: 5, name: "Product 5", price: 50 , quantity: 4},
])

  const totalPrice = computed(() => {
    return products.value.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
  })
</script>

<template>
  <div class="max-w-screen-sm mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-center">Giỏ Hàng</h1>
    <ul class="space-y-4">
      <li v-for="product in products" class="flex justify-between items-center border-b pb-2">
        <div>
          <h2 class="text-xl font-semibold">{{product.name}}</h2>
          <p class="text-gray-500">Giá: {{product.price}} VND</p>
          <p class="text-gray-500">Số lượng: {{product.quantity}}</p>
        </div>
        <p class="text-gray-700 font-bold">{{product.price * product.quantity}} VND</p>
      </li>
    </ul>
    <div class="mt-4 text-right">
      <h2 class="text-xl font-semibold">Tổng Giá Trị: {{totalPrice}} VND</h2>
    </div>
  </div>
</template>

<style scoped>

</style>