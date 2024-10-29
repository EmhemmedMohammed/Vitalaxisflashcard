<script setup>
import { store } from '../store/store.js'
import emalist from '../store/dataCamp.json'
import { watch,ref } from 'vue';

const showdialog = ref(false); // Make it reactive

var filteredList = ref([]);

// Watcher that triggers whenever store.selectedcityid changes
watch(
  () => store.selectedcityid,
  (cityId) => {
    // Filter list directly inside the watcher
    filteredList = emalist.filter(item => item.cityid === cityId);
    console.log('Filtered List:', filteredList); // Optional for debugging
  },
  { immediate: true } // Ensures the watcher runs on initial mount
);

// Function to filter by city id
// const filterByCityId = () => {
//   const cityId = store.selectedcityid
//   return emalist.filter(item => item['cityid'] === cityId);
// };



const openMap = (lat, long) => {
console.log(lat)
  if (lat=='0') {
    showdialog.value = true; // Update `showdialog.value`
    return
  }


  // if (latitude.value && longitude.value) {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${long}&travelmode=driving`;
 
  // const url = `https://www.google.com/maps/dir/?api=1&destination=${lat}&travelmode=driving`;

  // const url = `https://www.google.com/maps/dir/?api=1&destination=32.3754,15.0925&travelmode=driving`;

  window.open(url, '_blank'); // Opens the Google Maps URL in a new tab or app
  // } else {
  //   alert('Please enter valid coordinates');
  // }
};

const makeCall = (phoneNumber) => {
  const url = `tel:${phoneNumber}`;
  window.open(url, '_self'); // Opens the phone dialer with the number in the current tab/app
};
</script>

<template>
  <div class="column">

  
   <transition appear enter-active-class="animated backInDown">
  <h1 class="text-h4 q-mt-lg q-mb-xs  text-yellow-3">{{ store.selectedcity }}</h1>
</transition>

  <transition appear enter-active-class="animated slideInRight">
    <q-list class="q-my-xs full-width" style="border-radius: 10px;">

      <q-item clickable v-ripple class=" q-pa-sm q-my-sm text-h4 text-white " v-for="n in filteredList" :key="n.id"  style="box-shadow: 1px 1px 2px rgb(1, 17, 33); border-radius: 10px; background-color: rgba(162, 184, 228, 0.4); border-bottom: 1px solid rgb(246, 247, 246);">
   
       <!-- <q-btn class="q-mr-sm" round icon="call" size="md" color="indigo-1" text-color="black" @click="makeCall(n.tel)"></q-btn> -->
       <div style="height: 45px;" class="q-mx-sm">
      <q-btn round icon="location_on" size="md" color="indigo-5" text-color="white" @click="openMap(n.latitude,n.longitude)"></q-btn>
    </div> 
      <q-item-section class="text-right text-h6">{{ n.center }}</q-item-section> 
   
    </q-item>

  </q-list>
</transition>


<!-- <transition appear enter-active-class="animated backInUp">
<div class="q-mt-md" >
<q-btn rounded  label="البلديات" class=" q-mb-md q-mr-md" icon="apartment" size="lg" color="indigo-1" text-color="black" @click="store.screen = 'Center'"
    ></q-btn>
  </div>
  </transition> -->
 
  <div style="margin-bottom: 60px; height: 10px;">
  </div>

</div>


<q-dialog v-model="showdialog" transition-show="flip-down" transition-hide="flip-up">
  <div class="bg-indigo-2 q-pa-sm" style="width: 80%; margin: auto; box-shadow: 1px 1px 10px rgb(71, 70, 70);">
    <q-icon size="md" name="warning" color="red"/>
  <h1 class="text-black text-h6 text-center">نعتذر لعدم وجود بيانات الموقع للمركز  </h1>
  </div>
  </q-dialog>

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
}</style>
