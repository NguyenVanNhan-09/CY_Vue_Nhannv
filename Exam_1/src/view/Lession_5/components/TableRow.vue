<script setup lang="ts">
import {defineProps, defineEmits, ref} from 'vue';
import Button from './Button.vue';
import Dropdown from "./Dropdown.vue";
import {toast} from "vue3-toastify";

const props = defineProps({
  task: Object,
  index: Number,
});
const emit = defineEmits(['delete', 'save']);

const isEdit = ref(false);
const editName = ref(props.task.name);
const editStatus = ref(props.task.status);
const editDate = ref(props.task.date);

const startEdit = () => {
  isEdit.value = true;
  editName.value = props.task.name;
  editStatus.value = props.task.status;
  editDate.value = props.task.date;
};

const saveEdit = () => {
  emit('save', {
    id: props.task.id,
    name: editName.value,
    status: editStatus.value,
    date: editDate.value,
  });
  isEdit.value = false;
  toast("Successfully save task", {
    "type": "success",
    "autoClose": 1500,
    "dangerouslyHTMLString": true
  })
};

const cancelEdit = () => {
  isEdit.value = false;
};

function deleteTask() {
  emit('delete', props.task.id);
}

function toggleSelect() {
  props.task.isSelected = !props.task.isSelected;
  emit('save', props.task);
}

const handleStatusSelected = (status: string) => {
  editStatus.value = status;
};

</script>

<template>
  <tr>
    <td class="p-4 border-b border-blue-gray-50">
      <button @click="toggleSelect">
        <span v-if="task.isSelected"><i class="ri-checkbox-line"></i></span>
        <span v-else><i class="ri-checkbox-blank-line"></i></span>
      </button>
    </td>
    <td class="p-4 border-b border-blue-gray-50">{{ index + 1 }}</td>
    <td class="p-4 border-b border-blue-gray-50">
      <div v-if="isEdit">
        <input v-model="editName" type="text" class="w-full rounded"/>
      </div>
      <div v-else>
        <p class="max-w-[150px] overflow-hidden whitespace-nowrap truncate">{{ task.name }}</p>
      </div>
    </td>

    <td class="p-4 border-b border-blue-gray-50">
      <div v-if="isEdit">
        <Dropdown
            :selectedStatus="editStatus"
            @statusSelected="handleStatusSelected"
        />
      </div>
      <div class="w-max" v-else>
        <div
            class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none py-1 px-2 text-xs rounded-md"
            :class="{
            'bg-red-500/20 text-red-600': task.status === 'reject',
            'bg-yellow-500/20 text-yellow-600': task.status === 'todo',
            'bg-green-500/20 text-green-600': task.status === 'done'
          }"
        >
          <span>{{ task.status }}</span>
        </div>
      </div>
    </td>
    <td class="p-4 border-b border-blue-gray-50">
      <div v-if="isEdit">
        <input v-model="editDate" type="date" class="w-full rounded"/>
      </div>
      <div v-else>
        {{ new Date(task.date).toLocaleDateString('en-GB') }}
      </div>
    </td>
    <td class="p-4 border-b border-blue-gray-50">
      <div v-if="isEdit">
        <button @click="saveEdit" class="px-2 py-1 bg-green-500 text-white rounded">Save</button>
        <button @click="cancelEdit" class="px-2 py-1 bg-gray-500 text-white rounded ml-2">Cancel</button>
      </div>
      <div v-else>
        <Button icon="ri-pencil-line" @click="startEdit"/>
        <Button icon="ri-delete-bin-6-line" @click="deleteTask"/>
      </div>
    </td>
  </tr>
</template>
