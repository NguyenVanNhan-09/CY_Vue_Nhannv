<script setup lang="ts">
import {computed, ref, onMounted} from "vue";
import {toast} from "vue3-toastify";

const tasks = ref([]);
const isAddTask = ref(false);
// add
const newTaskHeading = ref("")
const newTaskText = ref("");
const newTaskTime = ref("")
const newTaskTimeDeadline = ref("")
// edit
const editTaskHeading = ref("");
const editTaskText = ref("");
const editTaskTime = ref("");
const editTaskTimeDeadline = ref("");
const editTaskId = ref(null);
const isEditModalOpen = ref(false);

// Lấy từ local storage
onMounted(() => {
  const tasksLocal = localStorage.getItem("tasks");
  if (tasksLocal) {
    tasks.value = JSON.parse(tasksLocal);
  }
});

// add
const addTask = () => {
  isAddTask.value = !isAddTask.value;
  newTaskHeading.value = "";
  newTaskText.value = "";
  newTaskTime.value = "";
  newTaskTimeDeadline.value = "";
};

// save add
const saveTask = () => {
  const newTask = {
    id: Date.now(),
    heading: newTaskHeading.value,
    text: newTaskText.value,
    time: newTaskTime.value,
    timeDeadline: newTaskTimeDeadline.value,
    isCompleted: false,
  };
  tasks.value.push(newTask);
  newTaskHeading.value = "";
  newTaskText.value = "";
  newTaskTime.value = "";
  newTaskTimeDeadline.value = "";
  saveToLocalStorage();
  toast(`Add Task success!`, {
    "type": "success",
    "dangerouslyHTMLString": true
  })
};

// Update
const updateTask = (task) => {
  editTaskId.value = task.id;
  isEditModalOpen.value = true;
  editTaskHeading.value = task.heading;
  editTaskText.value = task.text;
  editTaskTime.value = task.time;
  editTaskTimeDeadline.value = task.timeDeadline;
};

// Save update
const saveUpdateTask = () => {
  const taskIndex = tasks.value.findIndex((task) => task.id === editTaskId.value);
  tasks.value[taskIndex].heading = editTaskHeading.value;
  tasks.value[taskIndex].text = editTaskText.value;
  tasks.value[taskIndex].time = editTaskTime.value;
  tasks.value[taskIndex].timeDeadline = editTaskTimeDeadline.value;

  editTaskHeading.value = "";
  editTaskText.value = "";
  editTaskTime.value = "";
  editTaskTimeDeadline.value = "";
  editTaskId.value = null;
  isEditModalOpen.value = false;
  saveToLocalStorage();
  toast(`update Task success!`, {
    "type": 'success',
    "dangerouslyHTMLString": true
  })
};

// Delete
const deleteTask = (id: number | string) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
  saveToLocalStorage();
  toast(`delete Task success!`, {
    "type": 'success',
    "dangerouslyHTMLString": true
  })
};

// Đảo ngược mảng
const reversedTasks = computed(() => {
  return tasks.value.slice().reverse();
});

// Lưu localstorage
const saveToLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
};
</script>

<template>
  <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
    <div class="flex flex-row justify-between items-center border-b pb-3.5">
      <ul class="w-full flex justify-center text-gray-600">
        <li>
          <div class="text-4xl  font-bold">Today's Task</div>
        </li>
      </ul>
    </div>
    <div class="flex justify-between items-center my-3.5">
      <div>
        <h2 class="text-3xl font-medium">Today's Task</h2>
        <p class="text-gray-500 text-base">Wednesday, 11 May</p>
      </div>
      <div>
        <button @click="addTask"
                class="flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center">
          <div class="flex justify-center items-center">
            <i class="ti-plus text-[16px]"></i>
          </div>
          <span class="ml-2">New task</span>
        </button>
      </div>
    </div>

    <div v-if="isAddTask" class="mb-4">
      <div @keyup.enter="saveTask">
        <label for="newTaskHeding">Heading</label>
        <input name="newTaskHeding" v-model="newTaskHeading" type="text" id="newTaskHeding"
               class="my-3 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
               placeholder="Enter heading task"/>
        <label for="newTaskText">Content</label>
        <input name="newTaskText" v-model="newTaskText" type="text" id="newTaskText"
               class="my-3 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
               placeholder="Enter text task"/>
        <label for="newTaskTime">Time Start</label>
        <input type="time" v-model="newTaskTime" id="newTaskTime"
               class="my-3 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
        <label for="newTaskTimeDeadline">Time end</label>
        <input type="time" v-model="newTaskTimeDeadline" id="newTaskTimeDeadline"
               class="my-3 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
        <div class="flex justify-end w-full">
          <button @click="saveTask" type="submit"
                  class="mt-3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
            Create
          </button>
        </div>
      </div>
    </div>

    <div id="tasks" class="my-5">
      <div v-for="(task, index) in reversedTasks" :key="task.id" id="task"
           class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
        <div class="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1 flex items-center justify-between">
            <span :class="{ 'line-through text-slate-500': task.isCompleted }"
                  class="text-sm text-slate-600 font-medium">
                {{ task.time }} -- {{ task.timeDeadline }}
            </span>
          <label :for="'throughTask_' + task.id" class="cursor-pointer">
            <i v-if="!task.isCompleted" class="ti-control-stop text-[18px]"></i>
            <i v-else class="ti-check-box text-[16px]"></i>
            <input type="checkbox" :id="'throughTask_' + task.id" v-model="task.isCompleted"
                   class="form-checkbox hidden">
          </label>
        </div>
        <div class="p-4">
          <h2 :class="{ 'line-through text-slate-500': task.isCompleted }">{{ task.heading }}</h2>
          <p class="text-slate-600 leading-normal font-light"
             :class="{ 'line-through text-slate-500': task.isCompleted }">
            {{ task.text }}
          </p>
        </div>
        <div class="flex justify-end mr-3.5 mb-3 items-center gap-3">
          <button @click="updateTask(task)" :class="{ 'pointer-events-none': task.isCompleted }"><i
              class="ti-pencil"></i></button>
          <button @click="deleteTask(task.id)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="node" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer">
              <path fill="red" stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Modal sửa -->
    <div v-if="isEditModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-5 rounded shadow-lg w-96">
        <h2 class="text-lg font-semibold mb-4">Edit Task</h2>
        <label for="newTaskHeding">Heading</label>
        <input id="newTaskHeding" v-model="editTaskHeading" type="text" placeholder="Edit task"
               class="my-3 border p-2 w-full rounded"/>
        <label for="newTaskText">Content</label>
        <input id="newTaskText" v-model="editTaskText" type="text" placeholder="Edit task"
               class="my-3 border p-2 w-full rounded"/>
        <label for="newTaskTime">Time Start</label>
        <input id="newTaskTime" v-model="editTaskTime" type="time" placeholder="Edit task"
               class="my-3 border p-2 w-full rounded"/>
        <label for="newTaskTimeDeadline">Time end</label>
        <input id="newTaskTimeDeadline" v-model="editTaskTimeDeadline" type="time" placeholder="Edit task"
               class="my-3 border p-2 w-full rounded"/>
        <div class="flex justify-between mt-4">
          <button @click="saveUpdateTask" class="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button @click="isEditModalOpen = false" class="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
