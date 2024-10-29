<template>
   <transition appear enter-active-class="animated backInUp">
    <div class="row justify-center items-center reverse no-wrap">
    <h1 class="text-h4 q-mt-lg q-mb-sm text-yellow text-center  q-pr-lg">التقييم</h1>
<h1 class="text-h6 q-mb-sm q-mt-sm text-grey-5 text-center q-pr-lg">نرجوا من حضرتكم تعبئته</h1>
</div>
</transition>
<hr class="full-width q-mt-sm">


<transition appear enter-active-class="animated slideInLeft">
<div class="row no-wrap items-center reverse">
  <q-icon class="q-mx-xs" size="md" name="api" color="indigo-3" />
  <h1 class=" text-h6 q-my-xs q-mt-lg text-grey-1 text-right full-width q-pr-lg">ما مدى رضاك ​​عن الحملة بشكل عام؟</h1>
</div>
</transition>
<q-rating v-model="store.q1" :max="5" size="3.5em" color="green-5" :icon="icons"/>

<transition appear enter-active-class="animated slideInRight">
  <div class="row no-wrap items-center reverse">
  <q-icon color="indigo-3"  class="q-mx-xs" size="md" name="api" />
  <h1 class="text-h6 q-mt-md text-grey-1 text-right full-width q-pr-lg">ما مدى وضوح المعلومات المقدمة خلال الحملة ومدى فائدتها؟</h1>
</div>
</transition>
<q-rating v-model="store.q2" :max="5" size="3.5em" color="green-5" :icon="icons"/>


<transition appear enter-active-class="animated slideInLeft">
  <div class="row no-wrap items-center reverse">
  <q-icon color="indigo-3"  class="q-mx-xs" size="md" name="api" />
  <h1 class="text-h6 q-mt-md text-grey-1 text-right full-width q-pr-lg">ما مدى سهولة العثور على مراكز اللقاح باستخدام التطبيق؟</h1>
</div>
</transition>
<q-rating v-model="store.q3" :max="5" size="3.5em" color="green-5" :icon="icons"/>


<transition appear enter-active-class="animated slideInRight">
  <div class="row no-wrap items-center reverse">
  <q-icon color="indigo-3"  class="q-mx-xs" size="md" name="api" />
  <h1 class="text-h6 q-mt-md text-grey-1 text-right full-width q-pr-lg">كيف تقيم تجربتك في استخدام التطبيق؟</h1>
</div>
</transition>
<q-rating v-model="store.q4" :max="5" size="3.5em" color="green-5" :icon="icons"/>

<transition appear enter-active-class="animated slideInLeft">
  <div class="row no-wrap items-center reverse">
  <q-icon color="indigo-3"  class="q-mx-xs" size="md" name="api" />
  <h1 class="text-h6 q-mt-md text-grey-1 text-right full-width q-pr-lg">ما مدى فاعلية الحملة في زيادة الوعي بفوائد التطعيمات؟</h1>
</div>
</transition>
<q-rating v-model="store.q5" :max="5" size="3.5em" color="green-5" :icon="icons"/>

<transition appear enter-active-class="animated slideInRight">
  <div class="row no-wrap items-center reverse">
  <q-icon  color="indigo-3"  class="q-mx-xs" size="md" name="api" />
  <h1 class="text-h6 q-mt-md text-grey-1 text-right full-width q-pr-lg">ما مدى رضاك ​​عن التواصل والتحديثات خلال الحملة؟</h1>
</div>
</transition>
<q-rating v-model="store.q6" :max="5" size="3.5em" color="green-5" :icon="icons"/>


<transition appear enter-active-class="animated slideInLeft">
  <div class="row no-wrap items-center reverse ">
  <q-icon color="indigo-3"  class="q-mx-xs" size="md" name="api" />
  <h1 class="text-h6 q-mt-md text-grey-1 text-right full-width q-pr-lg">كيف تقيم كفاءة عملية إعطاء اللقاح في المراكز؟</h1>
</div>
</transition>
<q-rating v-model="store.q7" :max="5" size="3.5em" color="green-5" :icon="icons"/>

<transition appear enter-active-class="animated slideInRight">
  <div class="row no-wrap items-center reverse">
  <q-icon color="indigo-3"  class="q-mx-xs" size="md" name="api" />
  <h1 class="text-h6 q-mt-md text-grey-1 text-right full-width q-pr-lg">ما مدى رضاك ​​عن الدعم أو المساعدة المقدمة خلال الحملة؟</h1>
</div>
</transition>
<q-rating v-model="store.q8" :max="5" size="3.5em" color="green-5" :icon="icons"/>

<transition appear enter-active-class="animated slideInLeft">
  <div class="row no-wrap items-center reverse">
  <q-icon color="indigo-3"  class="q-mx-xs" size="md" name="api" />
  <h1 class="text-h6 q-mt-md text-grey-1 text-right full-width q-pr-lg">ما مدى احتمالية أن توصي الآخرين بحملة التطعيم هذه؟</h1>
</div>
</transition>
<q-rating v-model="store.q9" :max="5" size="3.5em" color="green-5" :icon="icons"/>

<hr class="full-width q-mt-lg">
<h1 class="text-body2">{{ message }}</h1>

<div>
   <!-- <q-btn round class="q-mb-md q-mx-md" icon="home" size="lg" color="grey-7" text-color="black" @click="store.screen = 'Landing'"
     ></q-btn> -->
     <q-btn :loading="sending"  rounded class="q-mb-md" icon-right="outgoing_mail" size="lg" color="indigo-1" text-color="black" @click="addFeed"
     >
     ارسال
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        انتظر
      </template>
    </q-btn>
    </div>
</template>
  
  <script setup>
  import { store } from '../store/store.js'
  import { ref } from 'vue';
  const message = ref('')
  let sending = ref(false)

  function getCurrentDateTime() {
  // Create a new Date object
  var now = new Date();

  // Get the date components
  var year = now.getFullYear();
  var month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
  var day = String(now.getDate()).padStart(2, '0');

  // Get the time components
  var hours = String(now.getHours()).padStart(2, '0');
  var minutes = String(now.getMinutes()).padStart(2, '0');
  var seconds = String(now.getSeconds()).padStart(2, '0');

  // Format the date as YYYY/MM/DD
  var formattedDate = `${year}/${month}/${day}`;

  // Format the time as HH:MM:SS
  var formattedTime = `${hours}:${minutes}:${seconds}`;

  // Return the object containing the formatted date and time
  return {
    date: formattedDate,
    time: formattedTime
  };
}

const icons=  [
        'sentiment_very_dissatisfied',
        'sentiment_dissatisfied',
        'sentiment_neutral',
        'sentiment_satisfied',
        'sentiment_very_satisfied'
      ]

  // Function to add, delete, update, or delete all students based on action
const addFeed = async () => {
  const dateStr = "2024-11-09";  // Use dashes instead of slashes
const timeStr = "09:00:00";
// Combine the date and time strings into a single valid format
const givenDateTime = new Date(`${dateStr}T${timeStr}`);
// Get the current date and time
const currentDateTime = new Date();
if (currentDateTime < givenDateTime) {
  message.value = "من فضلك انتظر لحين بداية الحمله لإرسال الاستبيان و شكرا";
  return;
}

  sending=true
  message.value = "من فضلك انتظر لحين ارسال الاستبيان و شكرا";

  const { date, time } = getCurrentDateTime();
  const camp = {
    form: 'camp',
    date: date,
    time: time,
    q1: store.q1,
    q2: store.q2,
    q3: store.q3,
    q4: store.q4,
    q5: store.q5,
    q6: store.q6,
    q7: store.q7,
    q8: store.q8,
    q9: store.q9
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzpp_gV89ETITirQ4tyaLKWKx8edcPUW53ai0efuWzqfnM-7Qv5HOtDWeshlV3wqF2TJA/exec', {
      redirect: "follow",
      method: 'POST',
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(camp)
    });

    if (!response.ok) {
      throw new Error('Error adding/updating/deleting student');
    }
    // const result = await response.json();
    // message.value = result.message;
    message.value = ''
    store.screen = 'Landing'
    sending=false
  } catch (error) {
    // console.error('Error:', error.message);
    // message.value = 'Error: ' + error.message;
    message.value = 'خطاء في الاتصال حاول مجددا'
    sending=false
  }
};    
  </script>
  
  <style lang="scss" scoped></style>