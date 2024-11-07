<script setup lang="ts">
import axios from "axios";
import {ref, onMounted} from "vue";

const API_KEY = "2708a45726-0cce5d025c-sm7nrw";
const API_URL = `https://api.fastforex.io/fetch-all?api_key=${API_KEY}`;

const rates = ref<{ [key: string]: number }>({});
const amount = ref<number>(0);
const fromCurrency = ref<string>("USD");
const toCurrency = ref<string>("VND");
const convertedAmount = ref<number | null>(null);
const showFromDropdown = ref<boolean>(false);
const showToDropdown = ref<boolean>(false);

// Fetch exchange rates from the API
const fetchRates = async () => {
  try {
    const res = await axios.get(API_URL);
    rates.value = res.data.results;
  } catch (error) {
    console.error("Error fetching rates:", error);
  }
};

const convertCurrency = () => {
  if (fromCurrency.value && toCurrency.value && rates.value) {
    const rateFrom = rates.value[fromCurrency.value];
    const rateTo = rates.value[toCurrency.value];
    if (rateFrom && rateTo) {
      convertedAmount.value = (amount.value * rateTo) / rateFrom;
    } else {
      convertedAmount.value = null;
    }
  }
};

const selectFromCurrency = (currency: string) => {
  fromCurrency.value = currency;
  showFromDropdown.value = false;
};

const selectToCurrency = (currency: string) => {
  toCurrency.value = currency;
  showToDropdown.value = false;
};

const swapCurrencies = () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
};

const toggleFromDropdown = () => {
  showFromDropdown.value = !showFromDropdown.value;
};

const toggleToDropdown = () => {
  showToDropdown.value = !showToDropdown.value;
};

function compactNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  } else {
    return num.toString()
  }
}

onMounted(fetchRates);
</script>
<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="max-w-[720px] mx-auto">
      <div class="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
        <a
            target="_blank"
            href="https://www.material-tailwind.com/docs/html/input-number"
            class="block w-full px-4 py-2 text-center text-slate-700 transition-all"
        >
          <b>Currency Conversion</b>
        </a>
      </div>

      <div class="w-full max-w-xl mx-auto mt-4">
        <p class="text-slate-500 mb-4">
          Enter the amount you wish to convert and select the desired currency.
        </p>
        <div class="flex flex-col items-center justify-between">

          <!-- From Input -->
          <div class="w-full max-w-xs min-w-[200px] mt-4">
            <label class="block mb-1 text-sm text-slate-800">
              From
            </label>
            <div class="relative mt-2">
              <input
                  v-model.number="amount"
                  type="number"
                  class="w-full h-10 pl-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                  placeholder="Enter amount"
                  min="0"
              />
              <div class="absolute top-2 right-0 flex items-center pr-3">
                <div class="h-6 border-l border-slate-200 mr-2"></div>
                <button
                    class="dropdownButton h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none"
                    @click="toggleFromDropdown"
                >
                  <span class="dropdownSpan">{{ fromCurrency }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="h-4 w-4 ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                  </svg>
                </button>
                <div v-if="showFromDropdown"
                     class="dropdownMenu min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 bg-white border border-slate-200 rounded shadow-lg z-10">
                  <ul class="dropdownOptions">
                    <li v-for="currency in Object.keys(rates)" :key="currency"
                        class="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                        @click="selectFromCurrency(currency)">
                      {{ currency }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Swap Icon -->
          <div class="flex items-center justify-center mt-6">
            <button class="p-2 rounded-full border border-slate-300 bg-white hover:bg-slate-100 shadow-sm"
                    @click="swapCurrencies">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-5 h-5 text-slate-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"/>
              </svg>
            </button>
          </div>

          <!-- To Input -->
          <div class="w-full max-w-xs min-w-[200px] -mt-2">
            <label class="block mb-1 text-sm text-slate-800">
              To
            </label>
            <div class="relative mt-2">
              <input
                  :value="convertedAmount !== null ? compactNumber(convertedAmount) : ''"
                  readonly
                  type="text"
                  class="w-full h-10 pl-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                  placeholder="Converted amount"
              />
              <div class="absolute top-2 right-0 flex items-center pr-3">
                <div class="h-6 border-l border-slate-200 mr-2"></div>
                <button
                    class="dropdownButton h-full text-sm flex justify-center items-center bg-transparent text-slate-700 focus:outline-none"
                    @click="toggleToDropdown"
                >
                  <span class="dropdownSpan">{{ toCurrency }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="h-4 w-4 ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                  </svg>
                </button>
                <div v-if="showToDropdown"
                     class="dropdownMenu min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 bg-white border border-slate-200 rounded shadow-lg z-10">
                  <ul class="dropdownOptions">
                    <li v-for="currency in Object.keys(rates)" :key="currency"
                        class="px-4 py-2 text-slate-800 hover:bg-slate-100 text-sm cursor-pointer"
                        @click="selectToCurrency(currency)">
                      {{ currency }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Convert Button -->
          <button id='btn__convert' class="my-3.5" @click="convertCurrency">
            Convert
          </button>
        </div>

        <div class="mt-8 text-slate-500 text-sm text-center">
          <p>Rates are updated every hour to provide the most accurate conversions.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdownMenu {
  position: absolute;
  top: 0;
  z-index: 10;
}

.dropdownButton {
  background: transparent;
  border: none;
  cursor: pointer;
}

.dropdownOptions {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dropdownOptions li:hover {
  background-color: #f0f0f0;
}

#btn__convert {
  width: 10em;
  position: relative;
  height: 2.5em;
  border: 3px ridge #149CEA;
  outline: none;
  background-color: transparent;
  color: #149CEA;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

#btn__convert::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: white;
  transition: 0.5s;
  transform-origin: center;
}

#btn__convert::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: white;
  transition: 0.5s;
}

#btn__convert:hover::before, #btn__convert:hover::after {
  transform: scale(0)
}

#btn__convert:hover {
  box-shadow: inset 0px 0px 25px #1479EA;
}
</style>
