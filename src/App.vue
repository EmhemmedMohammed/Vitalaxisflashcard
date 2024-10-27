<script setup>
import { store } from './store/store.js'
import About from "./components/About.vue"
import Landing from "./components/Landing.vue"
import Center from "./components/Centers.vue"
import Location from "./components/Location.vue"
import Feed from "./components/Feed.vue"
import Side from "./components/Side.vue"
import Us from "./components/Us.vue"
import Down from "./components/Down.vue"
import Final from "./components/Final.vue"
import { ref, onMounted,watch, onBeforeUpdate,nextTick } from 'vue';




// function smoothScrollToBottom(duration = 2000) {

//   const start = window.scrollY;
//   const end = document.documentElement.scrollHeight;
//   const startTime = performance.now();

//   function scrollStep(currentTime) {
//     const elapsed = currentTime - startTime;
//     const progress = Math.min(elapsed / duration, 1); // Limit progress to 1 (100%)
//     const newPosition = start + (end - start) * progress;

//     window.scrollTo(0, newPosition);

//     if (progress < 1) {
//       requestAnimationFrame(scrollStep); // Continue animation until done
//     }
//   }
//   requestAnimationFrame(scrollStep);

// }

// function smoothScrollToBottom() {
//   window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth'
//   });
// }

function smoothScrollToBottom(duration = 3000) {
  // Disable user interactions
  document.body.style.pointerEvents = 'none';

  const start = 0;  // Current scroll position
  const end = document.body.scrollHeight ;  // Bottom position considering the viewport height
  // const end = document.querySelector('.q-layout--containerized').scrollHeight
  const distance = end - start;  // Total scroll distance
  const startTime = performance.now();  // Record the start time

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;  // Time elapsed since the start
    const progress = Math.min(elapsed / duration, 1);  // Cap progress at 1 (100%)
    const newPosition = start + distance * progress *0.5;  // Calculate new position

    window.scrollTo(0, newPosition);  // Scroll to new position

    if (progress < 1) {
      requestAnimationFrame(scrollStep);  // Continue scrolling until done
    } else {
      // Re-enable user interactions once scrolling is finished
      document.body.style.pointerEvents = 'auto';
    }
  }

  requestAnimationFrame(scrollStep);  // Start the animation
}




onMounted(() => {
  smoothScrollToBottom(); // Initiate smooth scrolling on mount
});

onMounted(() => {
  smoothScrollToBottom();
});


// Watch the `store.screen` variable
// watch(() => store.screen, (newVal, oldVal) => {
//   // Automatically scroll the `#app` div to the top when `store.screen` changes
//   const appDiv = document.getElementById('app')
//   if (appDiv) {
//     appDiv.scrollTo({
//       top: 0,
//       behavior: 'smooth' // Optional for a smooth scroll effect
//     })
//   }
// })

// Watch the `store.screen` variable
// watch(() => store.screen, () => {
//   // Scroll the window to the top
//   window.scrollTo({
//     top: 0,
//     behavior: 'auto' // Instant scroll without animation
//     // behavior: 'smooth' // Optional for a smooth scroll effect
//   })
// })

// Watch the `store.screen` variable
// Watch the `store.screen` variable
watch(() => store.screen, async () => {
  await nextTick(); // Wait for DOM updates
  if (store.screen === 'Landing') {
    // Scroll to the bottom after DOM updates
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'auto' // Use smooth scrolling if desired
    });
  } else {
    // Scroll to the top for all other screens
    window.scrollTo({
      top: 0,
      behavior: 'auto' // Use smooth scrolling if desired
    });
  }
});



function countdown(targetDate, targetTime) {
  // Get the current date and time
  const now = new Date();

  // Parse the target date and time
  const targetDateTime = new Date(`${targetDate} ${targetTime}:00`);

  // Calculate the difference in milliseconds
  const timeDifference = targetDateTime - now;

  // If the target date is in the past or exactly reached, return zeros
  if (timeDifference <= 0) {
    store.countdown = false;
    return { days: 0, hours: 0, minutes: 0 };
  }

  // Convert milliseconds to days, hours, and minutes
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // return { days, hours, minutes };

 store.days=days
 store.hours=hours
 store.minutes=minutes
}

function endOfCamopaigen(){
const dateStr = "2024-11-21";  // Use dashes instead of slashes
const timeStr = "06:00:00";
// Combine the date and time strings into a single valid format
const givenDateTime = new Date(`${dateStr}T${timeStr}`);
// Get the current date and time
const currentDateTime = new Date();
if (currentDateTime < givenDateTime) {
store.screen='Landing'
} else {
  store.screen='Final'
}
}

onMounted(() => {
  const targetDate = "2024/11/09";  // Format: YYYY/MM/DD
  const targetTime = "09:00";       // Format: HH/MM
 countdown(targetDate, targetTime);
 endOfCamopaigen()
});

</script>

<template>
  <q-layout >
    
  <!-- <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->
    
    <q-page-container >
      <q-page  >
<Landing v-if="store.screen === 'Landing'"></Landing>
<About v-if="store.screen === 'About'"></About>
<Center v-if="store.screen === 'Center'"></Center>
<Location v-if="store.screen === 'Location'"></Location>
<Feed v-if="store.screen === 'Feed'"></Feed>
<Side v-if="store.screen === 'Side'"></Side>
<Us v-if="store.screen === 'Us'"></Us>
<Down v-if="store.screen === 'Down'"></Down>
<Final v-if="store.screen === 'Final'"></Final>

<q-page-sticky v-if="store.screen!='Landing' && store.screen!='Final'" position="bottom-right" :offset="[18, 12]">
 
  <transition appear enter-active-class="animated slideInUp">
  <q-btn fab icon="home" text-color="black" color="yellow-9" @click="store.screen='Landing'" />
 </transition>
</q-page-sticky>

<q-page-sticky v-if="store.screen==='Location'" position="bottom-right" :offset="[88, 12]">
 
 <transition appear enter-active-class="animated slideInUp">
 <q-btn fab icon="apartment" text-color="black" color="indigo-3" @click="store.screen='Center'" />
</transition>
</q-page-sticky>

 </q-page>
    </q-page-container>
<!-- 
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

</q-layout>

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
