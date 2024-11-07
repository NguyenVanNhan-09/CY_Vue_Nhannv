<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {userService} from './Services/UserService.ts'

const user = ref({})
onMounted(async () => {
  try {
    user.value = await userService.getLoggedUser()
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  {{ user }}
</template>

<style scoped>

</style>