<script setup lang="ts">
import {computed} from "vue";
import { useRoute } from 'vue-router';
const route = useRoute();

// Nav
import Nav1 from "./view/Lession_1/Nav_1.vue"
import Nav2 from "./view/Lession_2/Nav_2.vue"

const navComponents = {
  '/ls1': Nav1,
  '/ls2': Nav2
}

const CurrentNav = computed(() => {
  if (!route.path) return null;
  const basePath = Object.keys(navComponents).find(path => route.path.startsWith(path));
  return basePath ? navComponents[basePath] : null;
});
</script>

<template>
  <component :is="CurrentNav" v-if="CurrentNav" />
   <div class="w-full h-full">
     <RouterView />
   </div>
</template>

<style scoped>
</style>
