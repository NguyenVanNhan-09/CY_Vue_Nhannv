<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute()
const blog = ref<{ id: number | string, content: string, image?: string, time: string } | null>(null)

const blogs = [
  {
    id: 1,
    content: "This is the first content post. It's an example of a post content.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WGZIxddZvqv6ZM07KjfdXSGemCd2glDIfa9Eny5El3be-lrjfkzYFgUlR4dWH8IG3JY&usqp=CAU",
    author: "John Doe",
    time: "2024-11-06T08:30:00",
    description: "ncanslnquwncuqw ciuqwcbqeucbouibcqoyuerbuo qyeboqniwu eciywbeocuywbcwy ecywbecouywbec wyebcuywbe wbceoqwbecouwyec wybcwyebc qwey pewyb ciwuyebcy beuwybocy uocw cywoywebcybw yecoqwcperv veyv "
  },
  {
    id: 2,
    content: "Here's another post with some content. You can use this for testing.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeCV4dGMij_CZMBjlPdBCOUhGsIx6E0bT_ePy5PDzo4L9j6vrwr1GLYNJI5xNU1PudMQ&usqp=CAU",
    author: "Jane Smith",
    time: "2024-11-06T09:00:00",
    description: "ncanslnquwncuqw ciuqwcbqeucbouibcqoyuerbuo qyeboqniwu eciywbeocuywbcwy ecywbecouywbec wyebcuywbe wbceoqwbecouwyec wybcwyebc qwey pewyb ciwuyebcy beuwybocy uocw cywoywebcybw yecoqwcperv veyv "
  },
  {
    id: 3,
    content: "This is a different kind of content, with a new author and time.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rBIILu8j4U3Ubu9OKbIFdtcuHjzPVaTpEtEMjcJ9V5SzJR52EW_AMHs0_Cg_fgk3HRQ&usqp=CAU",
    author: "Alice Johnson",
    time: "2024-11-06T10:15:00",
    description: "ncanslnquwncuqw ciuqwcbqeucbouibcqoyuerbuo qyeboqniwu eciywbeocuywbcwy ecywbecouywbec wyebcuywbe wbceoqwbecouwyec wybcwyebc qwey pewyb ciwuyebcy beuwybocy uocw cywoywebcybw yecoqwcperv veyv "
  },
]

onMounted(() => {
  const blogId = route.params.id as string;
  console.log(blogId);
  blog.value = blogs.find((blog) => blog.id == blogId) || null;
})

</script>

<template>
  <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
    <div
        class="bg-cover bg-center text-center overflow-hidden"
        :style="{ minHeight: '500px', backgroundImage: `url(${blog?.image})` }"
        title="Woman holding a mug">
    </div>
    <div class="max-w-3xl mx-auto">
      <div
          class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div class="bg-white relative top-0 -mt-32 p-5 sm:p-10">
          <h1 class="text-gray-900 font-bold text-3xl mb-2">{{ blog?.content }}</h1>
          <blockquote class="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">{{ blog?.description }}
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>