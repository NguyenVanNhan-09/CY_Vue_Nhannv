<script setup lang="ts">

</script>

<template>
  <script setup lang="ts">
    import {defineProps, defineEmits, ref, watch} from 'vue';
    import TableRow from "./TableRow.vue";

    const props = defineProps({
      tasks: Array,
    });
    const emit = defineEmits(['delete', 'save', 'toggleSelectAll']);

    const isSelectAll = ref(false);

    watch(() => props.tasks.map(task => task.isSelected), (newSelection) => {
      const taskCheckLength = newSelection.filter(selected => selected).length;
      isSelectAll.value = taskCheckLength >= 2;
    });

    function saveTask(updatedTask) {
      emit('save', updatedTask);
    }

    function deleteTask(id) {
      emit('delete', id);
    }

    function toggleSelectAll() {
      isSelectAll.value = !isSelectAll.value;
      props.tasks.forEach(task => {
        task.isSelected = isSelectAll.value;
      });

      emit('toggleSelectAll');
    }
  </script>
  <template>
    <table class="mt-4 w-full min-w-max table-auto text-left">
      <thead>
      <tr>
        <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <button @click="toggleSelectAll">
            <span v-if="isSelectAll"><i class="ri-checkbox-line"></i></span>
            <span v-else><i class="ri-checkbox-blank-line"></i></span>
          </button>
        </th>
        <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          STT
        </th>
        <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          Task
        </th>
        <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          Status
        </th>
        <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          Date
        </th>
        <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          Actions
        </th>
      </tr>
      </thead>
      <tbody>
      <TableRow
          v-for="(task, index) in tasks"
          :key="task.id"
          :index="index"
          :task="task"
          @delete="deleteTask"
          @save="saveTask"
      />
      </tbody>
    </table>
  </template>


  <style scoped></style>

</template>

<style scoped>

</style>