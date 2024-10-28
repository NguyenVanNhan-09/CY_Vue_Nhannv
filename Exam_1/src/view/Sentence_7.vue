<script setup lang="ts">
import {computed, ref, watch} from "vue";
  const formComplete = ref(false);
  const form = ref(
      {
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      },
  )

  const isPassValid = computed(() => {
    return form.value.password.length >= 8 && form.value.password === form.value.confirmPassword;
  })

  const isValidateForm = computed(() => {
    return formComplete.value && isPassValid.value;
  })

  watch(form, (newVal) => {
    const valid = Object.values(newVal).every((value) => value.trim()!== '');
    formComplete.value = valid;
  }, {deep: true})

  const btnClass = computed(() => {
    return isValidateForm.value? 'bg-green-500 text-white' : 'bg-gray-500 text-white';
  })

  const handleSubmit = (e: Event) => {
    console.log('Test submit');
    e.preventDefault();
    if (isValidateForm.value) {
      alert('Form đã hoàn tất');
    }
  }

</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <div class="w-full xl:w-3/4 lg:w-11/12 flex shadow-2xl">
        <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style="background-image: url('https://img.freepik.com/premium-photo/illustration-fantasy-woman-abstract-art-ai-generated_57312-1020.jpg ')"
        ></div>
        <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
          <form @submit="handleSubmit" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div class="mb-4 md:mr-2">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="fullname">
                Full Name
              </label>
              <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="fullname"
                  type="text"
                  v-model="form.fullName"
                  placeholder="Full Name"
              />
            </div>
            <div class="mb-4">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                Email
              </label>
              <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  v-model="form.email"
                  placeholder="Email"
              />
            </div><div class="mb-4">
            <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
              Phone Number
            </label>
            <input
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                v-model="form.phone"
                placeholder="Phone"
            />
          </div>
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                  Password
                </label>
                <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    v-model="form.password"
                    placeholder="******************"
                />
              </div>
              <div class="md:ml-2">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                  Confirm Password
                </label>
                <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="c_password"
                    type="password"
                    v-model="form.confirmPassword"
                    placeholder="******************"
                />
              </div>
            </div>
            <div class="mb-6 text-center">
              <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full"
                  type="submit"
                  :class="btnClass"
                  :disabled="!isValidateForm"
              >
                Register Account
              </button>
            </div>
            <hr class="mb-6 border-t" />
            <div class="text-center">
              <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div class="text-center">
              <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
              >
                Already have an account? Login!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>



