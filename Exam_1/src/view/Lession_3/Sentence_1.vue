<script setup lang="ts">
import {computed, ref} from "vue"
import {toast} from "vue3-toastify";

const data = ref([
  {
    "id": 1,
    "name": "Jordan Nu Retro 1 Low",
    "price": 2471199,
    "releaseDate": "2023-05-01",
    "isBestSeller": true,
    "brand": "Nike",
    "description": "Twenty years later and these low tops are back. Inspired by the original Wings logo and design of the Jordan 1.",
    "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/17313c9a-52e8-4ade-b899-2e25f4e8e516/JORDAN+NU+RETRO+1+LOW.png",
    "colorVariants": [
      {
        color: "#5c493d",
        quantity: 5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/17313c9a-52e8-4ade-b899-2e25f4e8e516/JORDAN+NU+RETRO+1+LOW.png",
      },
      {
        color: "#8e1c2c",
        quantity: 0,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/41ec6d7a-3bc0-40ff-949a-d1faaab2e440/JORDAN+NU+RETRO+1+LOW.png"
      },
      {
        color: "#0a97c4",
        quantity: 2,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33982b02-0b6a-4931-91b5-51f7e344492b/JORDAN+NU+RETRO+1+LOW.png"
      }
    ]
  },
  {
    "id": 2,
    "name": "Nike Air Force 1 '07 LV8",
    "price": 2815199,
    "releaseDate": "2022-11-15",
    "isBestSeller": false,
    "brand": "Nike",
    "description": "Powerful laptop with great performance for both gaming and work.",
    "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9b83f5c-af29-49b5-a784-989974e9c531/AIR+FORCE+1+%2707+LV8+1.png",
    "colorVariants": [
      {
        color: "#446b5f",
        quantity: 5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9b83f5c-af29-49b5-a784-989974e9c531/AIR+FORCE+1+%2707+LV8+1.png"
      },
      {
        color: "#784724",
        quantity: 0,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a12a1e20-18d2-480e-bb30-85a4c213a161/AIR+FORCE+1+%2707+LV8+1.png"
      }
    ]
  },
  {
    "id": 3,
    "name": "Sneaker Balenciaga",
    "price": 3000000,
    "releaseDate": "2023-02-20",
    "isBestSeller": true,
    "brand": "Balenciaga",
    "description": "Premium wireless earbuds with noise cancellation and long battery life.",
    "image": "https://balenciaga.dam.kering.com/m/189a1f706b395540/Medium-772767W3RNY9170_F.jpg?v=4",
    "colorVariants": [
      {
        color: "#d1b222",
        quantity: 5,
        image: "https://balenciaga.dam.kering.com/m/189a1f706b395540/Medium-772767W3RNY9170_F.jpg?v=4"
      },
      {
        color: "#242426",
        quantity: 0,
        image: "https://balenciaga.dam.kering.com/m/7d78077e2bcf1cb2/Medium-772767W3RNY9012_F.jpg?v=4"
      },
      {
        color: "#51a7bf",
        quantity: 0,
        image: "https://balenciaga.dam.kering.com/m/376b0de941d320fa/Medium-772767W3RNY2240_F.jpg?v=1"
      },

    ]
  },
  {
    "id": 4,
    "name": "Nike Air VaporMax 2023 Flyknit",
    "price": 6000000,
    "releaseDate": "2023-07-30",
    "isBestSeller": false,
    "brand": "Nike",
    "description": "Have you ever walked on Air? Step into the Air VaporMax 2023 to see how it's done. ",
    "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c51743d6-ee97-4dfb-9b5a-634799e71da8/AIR+VAPORMAX+2023+FK.png",
    "colorVariants": [
      {
        color: "#7ca058",
        quantity: 5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c51743d6-ee97-4dfb-9b5a-634799e71da8/AIR+VAPORMAX+2023+FK.png"
      },
      {
        color: "#d2b2b8",
        quantity: 0,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fe8beaa0-a4f9-41a4-9119-5fb41c4bb44a/AIR+VAPORMAX+2023+FK.png"
      },
      {
        color: "#171717",
        quantity: 2,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4c6d49b6-6bb2-4a52-9a6a-335fa6f114bc/AIR+VAPORMAX+2023+FK.png"
      }
    ]
  },
  {
    "id": 5,
    "name": "Women's Runner Gradient Sneaker ",
    "price": 12000000,
    "releaseDate": "2021-09-05",
    "isBestSeller": true,
    "brand": "Balenciaga",
    "description": "Experience true-to-life visuals with this 4K UHD smart TV.",
    "image": "https://balenciaga.dam.kering.com/m/41604a673d4fb1ce/Medium-772767WRUNG9010_F.jpg?v=1",
    "colorVariants": [
      {
        color: "#202020",
        quantity: 3,
        image: "https://balenciaga.dam.kering.com/m/41604a673d4fb1ce/Medium-772767WRUNG9010_F.jpg?v=1"
      },
    ]
  }
])

// state
const currentImages = ref({});
const cart = ref([]);
const showCart = ref(false);
const selectColor = ref(null);

// Khi di chuột vào thì nó đổi màu sản phẩm
data.value.forEach((item) => {
  currentImages.value[item.id] = item.image;
})
const changeImage = (productId, image) => {
  currentImages.value[productId] = image;
}
const resetImage = (productId, defaultImage) => {
  currentImages.value[productId] = defaultImage;
}

// format tiền
function formatPrice(price) {
  return '￥' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// format ngày tháng năm
function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  return `Ngày ${day} Tháng ${month} Năm ${year}`;
}

// Chọn màu
const handleSelectColor = (colorVariant) => {
  selectColor.value = colorVariant;
}

// add to cart
function addToCart(product) {
  const defaultColor = product.colorVariants[0];
  const selectedColor = selectColor.value || defaultColor;
  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  const productInCart = cart.value.find(item => item.id === product.id && item.color === selectedColor.color);
  if (productInCart) {
    productInCart.quantity++;
  } else {
    cart.value.push({...product, quantity: 1, color: selectedColor.color, colorImage: selectedColor.image});
  }
  toast(`add to cart!`, {
    "type": 'success',
    "position": "top-left",
    "dangerouslyHTMLString": true
  })
}

const totalCartProduct = computed(() => {
  return cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
})

const totalCart = computed(() => {
  return cart.value.length
})

</script>

<template>
  <div id="mini__project">
    <header class='shadow-md font-sans tracking-wide relative'>
      <div class='flex flex-wrap items-center justify-end gap-4 px-10 py-4 bg-white min-h-[70px]'>
        <ul>
          <li @click="showCart = !showCart"
              class='relative gap-3 px-3 py-3 rounded-3xl flex items-center bg-blue-500 hover:opacity-75 cursor-pointer'>
            <i class="text-white ti-shopping-cart"></i>
            <span class="absolute rounded-full py-0.5 top-[-8px] right-0 px-2 bg-red-500 text-sm text-white">{{
                totalCart
              }}</span>
          </li>
        </ul>
      </div>
    </header>

    <div class="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Premium Sneakers</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
            v-for="product in data" :key="product.id"
            class="bg-gray-50 flex flex-col justify-between shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
              v-if="product.isBestSeller"
              class="bg-red-400 text-white flex items-center justify-center px-3 rounded-lg cursor-pointer absolute top-3 right-3">
            hot
          </div>
          <div
              v-else
              class="bg-neutral-700 text-white shadow-2xl flex items-center justify-center px-3 rounded-lg cursor-pointer absolute top-3 right-3">
            Unpopular
          </div>
          <div class="w-5/6 min-h-[270px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img :src="currentImages[product.id]" alt="Product 1"
                 class="h-full w-full object-contain"/>
          </div>
          <div class="p-6 bg-white">
            <div class="flex justify-between">
              <div>
                <p class="text-gray-600 text-sm mt-2">{{ product.brand }}</p>
                <h3 class="text-lg font-bold text-gray-800 line-clamp-1">{{ product.name }}</h3>
                <h4 class="text-lg text-gray-800 font-bold mt-2">{{ formatPrice(product.price) }}</h4>
              </div>
              <div>
                <button
                    :disabled="!product.colorVariants.some(variant => variant.quantity > 0)"
                    :class="{
                    'opacity-50 cursor-not-allowed': !product.colorVariants.some(variant => variant.quantity > 0),
                    'hover:bg-gray-700 hover:text-white': product.colorVariants.some(variant => variant.quantity > 0)
                  }"
                    @click="addToCart(product)"
                    class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100"
                >
                  <i class="ti-shopping-cart"></i>
                </button>
              </div>
            </div>
            <div class="flex space-x-2 mt-4">
              <button
                  v-for="(colorVariant, index) in product.colorVariants"
                  :key="index"
                  :style="{ backgroundColor: colorVariant.color }"
                  :disabled="colorVariant.quantity === 0"
                  :class="{
                      'cursor-not-allowed': colorVariant.quantity === 0,
                      'border-2 border-gray-900': selectColor && selectColor.color === colorVariant.color
                  }"
                  @mouseover="changeImage(product.id, colorVariant.image)"
                  @mouseleave="resetImage(product.id, product.image)"
                  @click="handleSelectColor(colorVariant)"
                  class="p-3 rounded-full shadow-2xl"
              >
              </button>

            </div>
            <p class="text-gray-600 text-base mt-3">{{ formatDate(product.releaseDate) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!--  Show cart  -->
    <div v-if="showCart" class="fixed inset-0 z-20 overflow-y-hidden">
      <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        <!-- Background backdrop -->
        <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-500"
            :class="showCart ? 'opacity-100' : 'opacity-0'"
            aria-hidden="true"
            @click="showCart = !showCart">
        </div>

        <!-- Slide-over container -->
        <div class="fixed inset-0 overflow-hidden" @click="showCart = !showCart">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div
                  @click.stop
                  class="pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700"
                  :class="showCart ? 'translate-x-0' : 'translate-x-full'">

                <div class="flex h-full flex-col bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                      <div class="ml-3 flex h-7 items-center">
                        <button @click="showCart = !showCart" type="button"
                                class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Close panel</span>
                          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                               aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <!-- List of products in the cart -->
                          <li class="flex py-6" v-for="(product, index) in cart">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                  :src="product.colorImage"
                                  alt="Salmon orange fabric pouch" class="h-full w-full object-cover object-center">
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{{ product.name }}</a>
                                  </h3>
                                  <p class="ml-4">{{ formatPrice(product.price) }}</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">{{ product.brand }}</p>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty {{ product.quantity }}</p>

                                <div class="flex">
                                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{{ formatPrice(totalCartProduct) }}</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                      <a href="#"
                         class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <button @click="showCart = !showCart" type="button"
                                class="font-medium text-indigo-600 hover:text-indigo-500">
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>