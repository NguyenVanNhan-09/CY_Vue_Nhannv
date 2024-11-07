<script setup lang="ts">
import {ref, defineProps, defineEmits} from 'vue';
import {FwbButton, FwbModal} from "flowbite-vue";

const props = defineProps({
  isShow: Boolean,
});

const emit = defineEmits(['close', 'add']);

const taskName = ref("");

function closeModal() {
  emit('close');
}

function addTask() {
  if (taskName.value) {
    emit('add', taskName.value);
    taskName.value = "";
  }
}
</script>
<template>
  <fwb-modal v-if="isShow" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">Create task</div>
    </template>
    <template #body>
      <div>
        <label for="task" class="text-xl">Task</label>
        <input v-model="taskName" type="text" id="task" class="mt-2 w-full rounded" placeholder="Enter Task...">
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2">
        <fwb-button @click="closeModal" class="text-white ">Cancel</fwb-button>
        <fwb-button @click="addTask" class="text-white ">Add Task</fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
<style scoped>

</style>

