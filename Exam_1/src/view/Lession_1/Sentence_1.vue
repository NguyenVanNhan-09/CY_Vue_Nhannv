<script setup lang="ts">
  import {computed} from "vue";

  const data = {
    image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
    imageAlt: 'ps5 alt',
    product: 'ps5',
    productLink: 'https://bachtungps.com.vn/may-sony-playstation-5-ps5-1',
    quantity: 10,
    price: 10000,
    discount: 0.2,
    inStock: true,
    classObject: {
      'bg-green': true,
      'bg-blue': false
    }
  }

//   Method
  const calculateDiscountedPrice = () => {
    return data.price * (1 - data.discount).toLocaleString()
  }
  const textDescription = computed(() => {
    return 'Tay cầm bảo hành chính hãng 12 tháng tại tất cả các TTBH SONY VIỆT NAM trên toàn quốc Máy Chơi Game Sony PS5  Slim Standard Hàng Chính Hãng'
  })
  const formatPrice = () => {
    return data.price.toLocaleString()
  }
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <a :href="data.productLink" class="max-w-[720px] mx-auto">
      <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
          <img
              :src="data.image"
              alt="card-image" class="object-cover w-full h-full" />
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <p :class="data.inStock ? 'text-blue-gray-900' : 'text-red-500'" class="block font-sans text-base antialiased font-medium leading-relaxed">
              {{data.product}}
            </p>
            <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              ${{formatPrice()}}
            </p>
          </div>
          <div class="block font-sans flex justify-between text-base antialiased font-medium leading-relaxed text-blue-gray-900">
           <p> Price after discount:</p>
            <span>{{calculateDiscountedPrice()}}</span>
          </div>

          <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {{textDescription}}
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button">
            Add to Cart
          </button>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>

</style>