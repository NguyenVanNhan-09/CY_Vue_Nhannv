<script setup lang="ts">
import {ref} from "vue";
import {FwbButton, FwbModal} from "flowbite-vue";
import {toast} from "vue3-toastify";

const tasks = ref(JSON.parse(localStorage.getItem('tasks') || '[]'))
const isAddModal = ref(false)
const isUpdateModal = ref(false);
const editingTask = ref(null);
const newTask = ref({
  name: '',
  description: '',
  date: '',
})

// reset form task
const resetNewTask = () => {
  newTask.value = {
    name: '',
    description: '',
    date: '',
  }
}

const modalAdd = () => {
  isAddModal.value = !isAddModal.value
}

const modalUpdate = (task) => {
  editingTask.value = task ? {...task} : null;
  isUpdateModal.value = !isUpdateModal.value
}

const addTask = () => {
  if (newTask.value.name && newTask.value.description && newTask.value.date && newTask.value.date) {
    tasks.value.push({...newTask.value, id: Date.now()})
    saveLocalStorage()
    resetNewTask()
    modalAdd()
    toast("Add successfully !!!", {
      "type": "success",
    })
  } else {
    toast("you need to enter enough !!!", {
      "type": "error",
    })
  }
}

const updateTask = () => {
  const index = tasks.value.findIndex(task => task.id === editingTask.value.id);
  if (index !== -1) {
    tasks.value[index] = {...editingTask.value}
    saveLocalStorage()
    modalUpdate()
    toast("update successfully !!!", {type: "success"})
  } else {
    toast("update failed !!!", {type: "error"})
  }
}

const deleteTask = (task) => {
  tasks.value = tasks.value.filter(t => t.id !== task.id)
  if (tasks.value) {
    saveLocalStorage()
    toast("Delete successfully !!!", {
      "type": "success",
    })
  } else {
    toast("Delete Error !!!", {
      "type": "error",
    })
  }
}

const saveLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
}

</script>

<template>
  <div class="max-w-screen-lg mx-auto">
    <div class="sm:px-6 w-full">
      <div class="px-4 md:px-10 py-4 md:py-7">
        <div class="flex items-center justify-between">
          <p tabindex="0"
             class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Tasks</p>
        </div>
      </div>
      <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div class="sm:flex items-center justify-between">
          <div class="flex items-center">
            <a class="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
               href=" #">
              <div class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                <p>All</p>
              </div>
            </a>
            <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
               href="#">
              <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Done</p>
              </div>
            </a>
            <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
               href="#">
              <div class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                <p>Pending</p>
              </div>
            </a>
          </div>
          <button
              @click="modalAdd()"
              class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
            <p class="text-sm font-medium leading-none text-white">Add Task</p>
          </button>
        </div>
        <div class="mt-7 overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <thead>
            <tr>
              <th></th>
              <th class="text-left">Task</th>
              <th class="text-left">Description</th>
              <th class="text-left">Date</th>
              <th class="text-left">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(task, index) in tasks" :key="index"
                class="focus:outline-none h-16 border border-gray-100 rounded">
              <td>
                <div class="ml-5">
                  <div class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                    <input placeholder="checkbox" type="checkbox"
                           class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"/>
                    <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                      <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20"
                           height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                           stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </td>
              <td class="min-w-[180px]">
                <div class="flex items-center">
                  <p class="text-base font-medium leading-none text-gray-700 mr-2 overflow-hidden whitespace-nowrap truncate max-w-[160px]">
                    {{ task.name }}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676"
                        stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                        d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333"
                        stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </td>
              <td class="min-w-[180px]">
                <div class="flex items-center">
                  <p class="text-sm leading-none text-gray-600 max-w-[150px] overflow-hidden whitespace-nowrap truncate">
                    {{ task.description }}</p>
                </div>
              </td>
              <td class="">
                <button class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">
                  {{ task.date }}
                </button>
              </td>
              <td>
                <div class="relative pt-2">
                  <button @click="modalUpdate(task)"><i class="ri-pencil-line"></i></button>
                  <button @click="deleteTask(task)"><i class="ri-delete-bin-line"></i></button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!--modal add-->
  <fwb-modal v-if="isAddModal" @close="modalAdd">
    <template #header>
      <div class="flex items-center text-lg">Create task</div>
    </template>
    <template #body>
      <div>
        <label for="task" class="text-xl">Task</label>
        <input v-model="newTask.name" type="text" id="taskName" class="mt-2 w-full rounded" placeholder="Enter Task...">
      </div>
      <div>
        <label for="task" class="text-xl">Description</label>
        <input v-model="newTask.description" type="text" id="taskDescription" class="mt-2 w-full rounded"
               placeholder="Enter Task...">
      </div>
      <div>
        <label for="task" class="text-xl">Date</label>
        <input v-model="newTask.date" type="date" id="taskDate" class="mt-2 w-full rounded" placeholder="Enter Task...">
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2">
        <fwb-button @click="modalAdd" class="text-white ">Cancel</fwb-button>
        <fwb-button @click="addTask" class="text-white ">Add Task</fwb-button>
      </div>
    </template>
  </fwb-modal>
  <!--modal update-->
  <fwb-modal v-if="isUpdateModal" @close="modalUpdate()">
    <template #header>
      <div class="flex items-center text-lg">Update Task</div>
    </template>
    <template #body>
      <div>
        <label for="task" class="text-xl">Task</label>
        <input v-model="editingTask.name" type="text" id="editTaskName" class="mt-2 w-full rounded"
               placeholder="Enter Task...">
      </div>
      <div>
        <label for="task" class="text-xl">Description</label>
        <input v-model="editingTask.description" type="text" id="editTaskDescription" class="mt-2 w-full rounded"
               placeholder="Enter Task...">
      </div>
      <div>
        <label for="task" class="text-xl">Date</label>
        <input v-model="editingTask.date" type="date" id="editTaskDate" class="mt-2 w-full rounded"
               placeholder="Enter Task...">
      </div>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2">
        <fwb-button @click="modalUpdate()" class="text-white ">Cancel</fwb-button>
        <fwb-button @click="updateTask" class="text-white ">Update Task</fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>

<style scoped>
</style>