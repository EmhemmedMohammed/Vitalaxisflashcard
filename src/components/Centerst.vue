<script setup>
import { store } from '../store/store.js'
import emalist from '../store/dataCamp.json'

import {ref, computed} from 'vue'

const search = ref('')

// Filtered list based on the search input
const uniqueCitiesfiltered = computed(() => {
  // Filter uniqueCities based on the search term
  return uniqueCities.filter(city => 
    city.city.toLowerCase().includes(search.value.toLowerCase())
  )
})


const uniqueCities = emalist.reduce((acc, current) => {
  const cityExists = acc.some(item => item['cityid'] === current['cityid']);
  if (!cityExists) {
    acc.push(current);
  }
  return acc;
}, []);

function ema(city, id) {
  store.selectedcity = city
  store.selectedcityid = id
  store.screen = 'Location'
}
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'auto' });
};

</script>

<template>

<div class="column no-wrap justify-start q-my-xs" style="height: 800px;">

  <div class="col-2 q-mb-xs q-mt-xs">
  <transition appear enter-active-class="animated backInDown">
    <h1 class="text-h4  text-yellow-3 ">البلديــــــــات</h1>
  </transition>


  <transition appear enter-active-class="animated slideInRight">
    <div class="row q-mt-sm justify-between items-center  reverse  q-pa-sm q-pr-lg"
    style="border-radius: 10px; background-color: rgba(214, 212, 217, 0.3);"
    >
      <p class="q-mb-xs text-h6">بحـــث</p>
      <q-input class="bg-white text-h6 q-px-md " style="width: 80%; border-radius: 20px;" rounded v-model="search"
        dense  @focus="scrollToTop"  input-class="text-right" />
    </div>
  </transition>
</div>

<div class="col-5" style="overflow-y: scroll;  border-top: 2px solid white;">
  <transition appear enter-active-class="animated slideInLeft">
    <q-list class="q-my-sm full-width full-height" style="border-radius: 10px;">
      <q-item clickable v-ripple class=" q-pa-sm q-my-sm text-h4 text-white " v-for="n in uniqueCitiesfiltered" :key="n.id"
        @click="ema(n.city, n.cityid)"
        style="box-shadow: 1px 1px 2px rgb(1, 17, 33); border-radius: 10px; background-color: rgba(162, 184, 228, 0.3);  border-bottom: 1px solid rgb(246, 247, 246);">
        <q-item-section class="text-right text-h5">{{ n.city }}</q-item-section>
        <q-icon name="apartment" size="md" color="indigo-3" text-color="black" class="q-mx-sm" />
      </q-item>
    </q-list>
  </transition>
</div>
<div class="col-1 " style=" height: 90px; background-color: rgb(157, 225, 225, 0.4);">
  </div>
  <!-- <transition appear enter-active-class="animated backInUp">
    <div class="q-mt-lg" style="margin-top: auto;">
      <q-btn rounded style="margin-top: auto;" label="الرئيسية" class="q-mb-md" icon-right="home" size="lg"
        color="indigo-1" text-color="black" @click="store.screen = 'Landing'"></q-btn>
    </div>
  </transition> -->
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
