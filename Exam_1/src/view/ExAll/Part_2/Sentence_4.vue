<template>
  <div class="flex flex-col justify-center items-center">
    <div class="mb-10">
      <div class="mt-4">
        <input v-model.number="timeInput" type="number" placeholder="Nhập thời gian (giây)" class="border rounded p-2"/>
        <button :class="{'opacity-75 cursor-not-allowed': isCounting}" @click="startCountdown" :disabled="isCounting"
                class="ml-2 bg-blue-500 text-white rounded py-2 px-3">Bắt
          đầu
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center w-full gap-4 text-center">
      <div class="timer w-16 relative">
        <div class="bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
          <h3 class="countdown-element days font-Cormorant font-semibold text-2xl text-white text-center">
            {{ days }}
          </h3>
        </div>
        <p class="absolute text-lg font-Cormorant font-medium text-gray-900 mt-1 text-center w-full">days</p>
      </div>
      <h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
      <div class="timer w-16 relative">
        <div class="bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
          <h3 class="countdown-element hours font-Cormorant font-semibold text-2xl text-white text-center">
            {{ hours }}
          </h3>
        </div>
        <p class="absolute text-lg font-Cormorant font-normal text-gray-900 mt-1 text-center w-full">hours</p>
      </div>
      <h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
      <div class="timer w-16 relative">
        <div class="bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
          <h3 class="countdown-element minutes font-Cormorant font-semibold text-2xl text-white text-center">
            {{ minutes }}
          </h3>
        </div>
        <p class="absolute text-lg font-Cormorant font-normal text-gray-900 mt-1 text-center w-full">minutes</p>
      </div>
      <h3 class="font-manrope font-semibold text-2xl text-gray-900">:</h3>
      <div class="timer w-16 relative">
        <div class="bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
          <h3 class="countdown-element seconds font-Cormorant font-semibold text-2xl text-white text-center animate-countinsecond">
            {{ seconds }}
          </h3>
        </div>
        <p class="absolute text-lg font-Cormorant font-normal text-gray-900 mt-1 text-center w-full">seconds</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {toast} from 'vue3-toastify';
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()
const timeInput = ref<number | null>(null);
const remainingTime = ref<number>(0);
const isCounting = ref<boolean>(false);
const days = ref<number>(0);
const hours = ref<number>(0);
const minutes = ref<number>(0);
const seconds = ref<number>(0);
let intervalId: ReturnType<typeof setInterval>;

const startCountdown = () => {
  if (timeInput.value !== null && timeInput.value > 0) {
    remainingTime.value = timeInput.value;
    isCounting.value = true;

    // Update the countdown every second
    intervalId = setInterval(() => {
      if (remainingTime.value > 0) {
        remainingTime.value--;
        days.value = Math.floor(remainingTime.value / 86400);
        hours.value = Math.floor((remainingTime.value % 86400) / 3600);
        minutes.value = Math.floor((remainingTime.value % 3600) / 60);
        seconds.value = remainingTime.value % 60;
      } else {
        clearInterval(intervalId);
        isCounting.value = false;
        toast("Thời gian đã hết!", {
          type: 'success',
          position: 'top-center',
        })
        jsConfetti.addConfetti()
      }
    }, 1000);
  }
};

watch(() => isCounting.value, (newVal) => {
  if (!newVal) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>

</style>
