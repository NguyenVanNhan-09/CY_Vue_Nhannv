<script setup lang="ts">
import {ref, computed, watch} from "vue"
import {toast} from "vue3-toastify";

// Data`
const cart = ref([])
const products = ref([
  {
    id: 1,
    name: "PS5",
    price: 5555,
    publicDate: "05-05-2021",
    image: "https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg",
    hot: true,
  },
  {
    id: 2,
    name: "PS4",
    price: 4444,
    publicDate: "04-04-2021",
    image: "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$",
    hot: true,
  },
  {
    id: 3,
    name: "PS3",
    price: 3333,
    publicDate: "03-03-2021",
    image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/488/040/products/ps3-slim-45-3179f8e1-413e-4f02-9ce1-da3776d4016d.jpg?v=1697275684917",
    hot: false,
  },
])
const paymentMethods = ref([
  { text: "COD", value: 1 },
  { text: "Banking", value: 2 },
  { text: "Ứng dụng bên thứ 3", value: 3 },
]);
const selectedPayment = ref(2);
const priceThreshold = ref(5000);

// Methods
const hotProducts = computed(() => products.value.filter(product => product.hot))
// Add to cart
const addToCart = (product) => {
  cart.value.push(product)
  toast(`${product.name} added to cart!`, {
    "type": "success",
    "dangerouslyHTMLString": true
  })
}
// watch change payment method
watch(selectedPayment, (newVal) => {
  const selectedMethod  = paymentMethods.value.find(method => method.value === newVal);
  if(selectedMethod ) {
    toast(`Payment methods have changed to: ${selectedMethod.text}`, {
      "type": "success",
      "dangerouslyHTMLString": true
    })
  }else {
    toast("Payment methods have changed to default!", {
      "type": "error",
      "dangerouslyHTMLString": true
    })
  }
})
</script>

<template>
 <div class="flex justify-center items-center gap-5">
   <div class="relative py-2">
     <div class="t-0 absolute left-3">
       <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{{cart.length}}</p>
     </div>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
     </svg>
   </div>
   <div>
     <form class="max-w-sm mx-auto">
       <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Select Payment Methods</label>
       <select  v-model="selectedPayment" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
         <option selected>Choose a methods</option>
         <option v-for="method in paymentMethods" :value="method.value">{{method.text}}</option>
       </select>
     </form>

   </div>
 </div>
  <!--List__Products-Hot-->
  <div class="list__products-hot">
    <div class="text-center p-10">
      <h1 class="font-bold text-4xl mb-4">Product hot</h1>
    </div>
    <section id="Projects"
             class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" v-for="(product, index) in hotProducts" :key="index">
        <div>
          <img :src="product.image"
               alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p class="text-lg font-bold text-black truncate block capitalize">{{product.name}}</p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">$ {{product.price}}</p>
              <div>
                <p v-if="product.price > priceThreshold" class="text-sm text-white py-[2px] px-[4px] ml-2 bg-red-400 text-center rounded-lg">Expensive</p>
                <p v-else class="text-sm text-white py-[2px] px-[4px] ml-2 bg-blue-500 text-center rounded-lg">Cheap</p>
              </div>
              <button class="ml-auto" @click="addToCart(product)" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!--List__Products-->
  <div class="list__products">
    <div class="text-center p-10">
      <h1 class="font-bold text-4xl mb-4">List Product</h1>
    </div>
    <section id="Projects"
     class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      <div v-for="(product, index) in products" :key="index" class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
        <div>
          <img :src="product.image"
               alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p class="text-lg font-bold text-black truncate block capitalize">{{product.name}}</p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">$ {{product.price}}</p>
              <div>
                <p v-if="product.price > priceThreshold" class="text-sm text-white py-[2px] px-[4px] ml-2 bg-red-400 text-center rounded-lg">Expensive</p>
                <p v-else class="text-sm text-white py-[2px] px-[4px] ml-2 bg-blue-500 text-center rounded-lg">Cheap</p>
              </div>
              <button class="ml-auto" @click="addToCart(product)" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                        fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>

</style>