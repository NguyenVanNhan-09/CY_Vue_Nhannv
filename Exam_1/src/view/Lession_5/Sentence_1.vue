<script setup lang="ts">
import {computed, ref} from 'vue';
import Button from "./components/Button.vue";
import TaskTable from "./components/TaskTable.vue";
import TaskModal from "./components/TaskModal.vue";
import {toast} from "vue3-toastify"

const isShowModal = ref(false);
const tasks = ref([]);
const isSelectAll = ref(false);
const exportTask = ref([])
const searchQuery = ref("");
const selectedStatus = ref("all");

function closeModal() {
  isShowModal.value = false;
}

function showModal() {
  isShowModal.value = true;
}

// Add new task
function addTask(name: string) {
  const newId = tasks.value.length ? tasks.value[tasks.value.length - 1].id + 1 : 1;
  if (newId) {
    tasks.value.push({
      id: newId,
      name,
      status: "todo",
      date: new Date(),
    });
    closeModal();
    toast("Successfully saved task", {
      "type": "success",
      "autoClose": 1500,
      "dangerouslyHTMLString": true
    })
  } else {
    toast("error saved task", {
      "type": "error",
      "autoClose": 1500,
      "dangerouslyHTMLString": true
    })
  }
}

function handleSaveTask(updatedTask) {
  const index = tasks.value.findIndex(task => task.id === updatedTask.id);
  if (index !== -1) {
    tasks.value[index] = {...tasks.value[index], ...updatedTask};
  }
}

// Delete task by ID
function deleteTask(id: number) {
  tasks.value = tasks.value.filter(task => task.id !== id);
}

// select checkbox
function toggleSelectAll() {
  isSelectAll.value = !isSelectAll.value;
  tasks.value.forEach(task => (task.isSelected = isSelectAll.value));
}

// delete all
function deleteSelectedTasks() {
  const initialLength = tasks.value.length;
  tasks.value = tasks.value.filter(task => !task.isSelected);
  const currentLength = tasks.value.length;
  if (currentLength === 0 && initialLength > 0) {
    toast("Successfully deleted all tasks", {
      type: "success",
      autoClose: 1500,
      dangerouslyHTMLString: true
    });
  } else {
    toast("No tasks were selected for deletion", {
      type: "error",
      autoClose: 1500,
      dangerouslyHTMLString: true
    });
  }
}

function exportSelectedTasks() {
  exportTask.value = tasks.value.filter(task => task.isSelected);
}

const filteredTasks = computed(() => {
  return tasks.value.filter(task => {
    const matchesStatus =
        selectedStatus.value === "all" || task.status === selectedStatus.value;
    const matchesName =
        !searchQuery.value || task.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesStatus && matchesName;
  });
});
</script>

<template>
  <div class="max-w-screen-lg mx-auto">
    <div class="max-w-3xl mx-auto text-center mt-16">
      <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">TodoList</span>
        <span
            class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient"></span>
      </h1>
    </div>

    <div class="p-6 px-0">
      <div class="w-full flex justify-between gap-4">
        <button @click="showModal"
                type="button"
                class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-gradient-to-r from-purple-800 to-pink-700 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
          <i class="ri-add-line text-base mr-1"></i>
          <span>Add</span>
        </button>
        <div class="flex gap-4 w-full justify-end">
          <button
              @click="exportSelectedTasks"
              type="button"
              class="max-w-[140px] px-4 flex justify-center items-center bg-[#770089] hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            <i class="ri-download-2-line text-xl mr-3"></i>
            Export
          </button>
          <button
              @click="deleteSelectedTasks"
              type="button"
              class="text-base bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate rounded-lg">
            Delete all
          </button>
        </div>
      </div>

      <!--Search-->
      <div class="flex justify-between items-center">
        <div class="relative my-3.5 w-[50%]">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input v-model="searchQuery" type="search" id="default-search"
                 class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Search..." required>
        </div>
        <div class="flex gap-4 items-center">
          <label class="cursor-pointer px-3 py-2 rounded-md text-gray-600"
                 :class="{'bg-gradient-to-r from-purple-800 to-pink-700 text-white': selectedStatus === 'all'}">
            <input
                class="hidden"
                type="radio"
                value="all"
                v-model="selectedStatus"
            />
            Tất cả
          </label>

          <label class="cursor-pointer px-3 py-2 rounded-md text-gray-600"
                 :class="{'bg-gradient-to-r from-purple-800 to-pink-700 text-white': selectedStatus === 'todo'}">
            <input
                class="hidden"
                type="radio"
                value="todo"
                v-model="selectedStatus"
            />
            Todo
          </label>

          <label class="cursor-pointer px-3 py-2 rounded-md text-gray-600"
                 :class="{'bg-gradient-to-r from-purple-800 to-pink-700 text-white': selectedStatus === 'done'}">
            <input
                class="hidden"
                type="radio"
                value="done"
                v-model="selectedStatus"
            />
            Done
          </label>

          <label class="cursor-pointer px-3 py-2 rounded-md text-gray-600"
                 :class="{'bg-gradient-to-r from-purple-800 to-pink-700 text-white': selectedStatus === 'reject'}">
            <input
                class="hidden"
                type="radio"
                value="reject"
                v-model="selectedStatus"
            />
            Reject
          </label>
        </div>
      </div>
      <!-- Task Table -->
      <TaskTable
          :tasks="filteredTasks"
          :isSelectAll="isSelectAll"
          @toggleSelectAll="toggleSelectAll"
          @delete="deleteTask"
          @save="handleSaveTask"
      />
    </div>
  </div>

  <!--  List task export -->
  <div class="mb-6">
    <ul class="grid grid-cols-3 gap-3 max-w-screen-lg mx-auto flex-wrap">
      <li v-for="(task, index) in exportTask" :key="index" class="w-full mt-5 col-span-1">
        <div class="relative bg-gray-900 block p-6 border border-gray-100 rounded-lg max-w-sm mx-auto">
            <span
                class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
          <div class="my-4">
            <h2 class="text-white text-2xl font-bold pb-2">{{ task.name }}</h2>
            <p class="text-gray-300 py-1">{{ new Date(task.date).toLocaleDateString('en-GB') }}</p>
          </div>
          <div class="flex justify-end">
            <button class="w-max">
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
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!-- Modal for Adding Task -->
  <TaskModal
      :isShow="isShowModal"
      @close="closeModal"
      @add="addTask"
  />
</template>

<style scoped>
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background: linear-gradient(270deg, #8e44ad, #e91e63);
  background-size: 200% 200%;
  animation: gradientAnimation 0.9s linear infinite;
}
</style>
