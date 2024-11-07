<script setup lang="ts">
import {ref} from "vue";

const blogs = ref<[]>([
  {
    id: 1,
    content: "This is the first content post. It's an example of a post content.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WGZIxddZvqv6ZM07KjfdXSGemCd2glDIfa9Eny5El3be-lrjfkzYFgUlR4dWH8IG3JY&usqp=CAU",
    author: "John Doe",
    time: "2024-11-06T08:30:00"
  },
  {
    id: 2,
    content: "Here's another post with some content. You can use this for testing.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeCV4dGMij_CZMBjlPdBCOUhGsIx6E0bT_ePy5PDzo4L9j6vrwr1GLYNJI5xNU1PudMQ&usqp=CAU",
    author: "Jane Smith",
    time: "2024-11-06T09:00:00"
  },
  {
    id: 3,
    content: "This is a different kind of content, with a new author and time.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rBIILu8j4U3Ubu9OKbIFdtcuHjzPVaTpEtEMjcJ9V5SzJR52EW_AMHs0_Cg_fgk3HRQ&usqp=CAU",
    author: "Alice Johnson",
    time: "2024-11-06T10:15:00"
  },
])

</script>

<template>
  <section class="py-24 ">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">Our popular blogs</h2>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div v-for="(blog, index) in blogs" :key="index" class="h-full rounded-lg">
          <RouterLink :to="{name: 'Blog', params: {id: blog.id}}">
            <div
                class="group cursor-pointer w-full border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div class="flex items-center mb-6d min-h-[183px] max-h-[183px] ">
                <img :src="blog.image" alt="Harsh image"
                     class="rounded-lg w-full object-cover">
              </div>
              <div class="block mt-3">
                <h4 class="text-gray-900 font-medium leading-8 mb-9">{{ blog.content }}</h4>
                <div class="flex items-center justify-between  font-medium">
                  <h6 class="text-sm text-gray-500">{{ blog.author }}</h6>
                  <span class="text-sm text-indigo-600">{{ blog.time }}</span>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
      <a href="#"
         class="cursor-pointer mt-6 border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">View
        All</a>
    </div>
  </section>
</template>

<style scoped>

</style>