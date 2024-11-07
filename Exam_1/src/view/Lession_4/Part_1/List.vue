<script setup lang="ts">
import {ref} from "vue"
import Item from "./Item.vue"
import Check from "./Check.vue";
import {toast} from "vue3-toastify"

const products = ref([
  {
    id: 1,
    title: "product_1",
    description: "product desscription",
    isCheck: true,
    productCode: 'P002'
  },
  {
    id: 2,
    title: "product_2",
    description: "product desscription",
    isCheck: true,
    productCode: 'P03'
  },
  {
    id: 3,
    title: "product_3",
    description: "product desscription",
    isCheck: false,
    productCode: 'P0d01'
  }
])

const handleProductCode = (code: string) => {
  toast(`Code: ${code} `, {
    "type": "info",
    "position": "top-center",
    "dangerouslyHTMLString": true
  })
  const product = products.value.find(p => p.productCode === code);
  if (product) {
    product.isCheck = true;
  }
}
</script>

<template>
  <div class="flex justify-center items-center">
    <div class=" max-w-screen-lg mx-auto">
      <!--List item-->
      <div>
        <h1>List Product</h1>
        <ul class="flex gap-5">
          <Item v-for="(product, index) in products" :product="product" :key="index" :isChecked="product.isCheck"
                @sendCode="handleProductCode"/>
        </ul>
      </div>
      <!--isCheck-->
      <div class="mt-5">
        <h1>List Product with check</h1>
        <ul class="flex gap-5">
          <Check v-for="(product, index) in products" :key="index" :product="product" :isChecked="product.isCheck"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>