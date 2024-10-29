<template>
  <transition appear enter-active-class="animated backInUp">
    <div class="row justify-center items-center reverse no-wrap">
      <h1 class="text-h4 q-mt-lg q-mb-sm text-yellow text-center  q-pr-lg">الإبــلاغ</h1>
      <h1 class="text-h6 q-mb-sm q-mt-sm text-grey-5 text-center q-pr-lg">عن الأعراض الجانبية للتطعيم</h1>
    </div>
  </transition>
  <hr class="full-width q-mt-sm">

  <transition appear enter-active-class="animated slideInRight">
    <div class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs text-subtitle1">الاســـم</p>
      <q-input class="bg-white text-h6 q-px-md " style="width: 80%; border-radius: 5px;"  v-model="store.sq1"
        dense input-class="text-right" />
    </div>
  </transition>

  <hr class="full-width q-my-sm">
  <transition appear enter-active-class="animated slideInLeft">
    <div class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs  text-subtitle1">العمر</p>
      <q-input type="number" class="bg-white text-h6 " style="width: 30%; border-radius: 5px;" filled v-model="store.sq2"
        dense input-class="text-center" />
    </div>
  </transition>

  <hr class="full-width q-my-sm">
  <transition appear enter-active-class="animated slideInRight">
    <div class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs  text-subtitle1">الجنس</p>
      <q-btn-toggle   v-model="store.sq3" color="indigo-5" toggle-color="yellow-7" toggle-text-color="black"  :options="[
        { label: 'انتى', value: 'انتي' },
        { label: 'ذكر', value: 'ذكر' }
      ]" />
    </div>
  </transition>

  <hr class="full-width q-my-sm">
  <transition appear enter-active-class="animated slideInLeft">
    <div class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs  text-subtitle1">الجنسية</p>
      <q-input class="bg-white text-h6 " style="width: 60%; border-radius: 5px;" filled v-model="store.sq4" dense
        input-class="text-right" />
    </div>
  </transition>

  <hr class="full-width q-my-sm">
  <transition appear enter-active-class="animated slideInRight">
    <div class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs  text-subtitle1">المدينة</p>
      <q-select standout dense  hide-dropdown-icon v-model="store.sq5" fill-input
        @update:model-value="onCountrySelect" use-input hide-selected color="black" bg-color="indigo-3" input-debounce="0"
        :options="options" @filter="filterFn" style="width: 60%" behavior="dialog" @popup-hide="store.sq6 = ''"
        popup-content-class="bg-white text-h6 text-right text-black " input-class="text-right text-h6"
        input-style="height:35px; color: black">

      </q-select>
    </div>
  </transition>

  <hr class="full-width q-my-sm">
  <transition appear enter-active-class="animated slideInRight">
    <div class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs  text-subtitle1">مركز التطعيم</p>
      <q-select standout dense  hide-dropdown-icon v-model="store.sq6" fill-input ref="citySelect" use-input
        hide-selected color="black" bg-color="indigo-3" input-debounce="0" :options="options2" @filter="filterFnc"
        style="width: 60%;" behavior="dialog" popup-content-class="bg-white text-h6 text-right text-black "
        input-class="text-right text-h6 " input-style="height:35px">
      </q-select>
    </div>
  </transition>


  <hr class="full-width q-my-sm">
  <transition appear enter-active-class="animated slideInRight">
    <div class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs  text-subtitle1">عنوان السكن</p>
      <q-input class="bg-white text-h6 " style="width: 60%; border-radius: 5px;" filled v-model="store.sq7" dense
        input-class="text-right" />
    </div>
  </transition>

  <hr class="full-width q-my-sm">
  <transition appear enter-active-class="animated slideInLeft">
    <div class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs  text-subtitle1">الهاتف</p>
      <q-input type="number" class="bg-white text-h6 " style="width:  60%; border-radius: 5px;" filled
        v-model="store.sq8" dense input-class="text-center" />
    </div>
  </transition>

  <hr class="full-width q-my-sm">
  <transition appear enter-active-class="animated slideInRight">
    <div class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs  text-subtitle1">امراض مزمنة</p>
      <q-input type="textarea" class="bg-white text-h6 " style="width: 60%; border-radius: 10px;" filled
        v-model="store.sq9" dense input-class="text-right" />
    </div>
  </transition>

  <hr class="full-width q-my-sm">
  <transition appear enter-active-class="animated slideInLeft">
    <div class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs  text-subtitle1">نوع التطعيم</p>
      <q-btn-toggle   v-model="store.sq10" color="indigo-5" toggle-color="yellow-7" toggle-text-color="black" 
        :options="[
          { label: 'معا', value: 'معا' },
          { label: 'شلل الاطفال', value: 'شلل الاطفال' },
          { label: 'الحصبة', value: 'الحصبه' }
        ]" />
    </div>
  </transition>

  <hr class="full-width q-my-sm">
  <transition appear enter-active-class="animated slideInRight">
    <div class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs  text-subtitle1">تاريخ التطعيم</p>
      <div class="bg-white text-black text-h6 q-pa-xs" style="width: 60%; height: 40px; border-radius: 5px; "
        @click="alert = true">
        {{ store.sq11 }}
      </div>
    </div>
  </transition>

  <hr class="full-width q-my-sm">
  <transition appear enter-active-class="animated slideInRight">
    <div class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs  text-subtitle1">وقت التطعيم</p>
      <div class="bg-white text-black text-h6 q-pa-xs" style="width: 60%; height: 40px; border-radius: 5px; "
        @click="alerttime = true">
        {{ store.sq12 }}
      </div>
    </div>
  </transition>
  

  <hr class="full-width q-my-sm">
  <div class="row justify-between items-center full-width reverse">
    <p class="q-mb-xs text-right text-subtitle1">هل لدي الطفل حساسية ضد أدوية او اطعمة معينة؟</p>
    <q-btn-toggle   v-model="store.sq22" color="indigo-5" toggle-color="yellow-7" toggle-text-color="black"
      :options="[
        { label: 'لا', value: 'لا' },
        { label: 'نعم', value: 'نعم' }
      ]" />
  </div>

  <hr class="full-width q-my-sm">
  <div class="row justify-between items-center full-width reverse">
    <p class="q-mb-xs text-right text-subtitle1">هل سبق أن تعرض الطفل لأي اعراض جانبية بعد اي لقاح سابق؟</p>
    <q-btn-toggle   v-model="store.sq23" color="indigo-5" toggle-color="yellow-7" toggle-text-color="black"
      :options="[
        { label: 'لا', value: 'لا' },
        { label: 'نعم', value: 'نعم' }
      ]" />
  </div>

  <transition appear enter-active-class="animated slideInRight">
    <div v-if="store.sq23=='نعم'" class="row justify-between items-center full-width reverse">
      <p class="q-mb-xs  text-subtitle1">ماهي الأعراض</p>
      <q-input class="bg-white text-h6 " style="width: 60%; border-radius: 5px;" filled v-model="store.sq24" dense
        input-class="text-right" />
    </div>
  </transition>


  <hr class="full-width q-my-sm">
  <div class="row justify-between items-center full-width reverse">
    <p class="q-mb-xs  text-subtitle1">الاعراض الجانبية</p>
    <q-input class="bg-white text-h6 q-mb-sm " style="width: 60%; border-radius: 5px;" filled v-model="store.sq13" dense
      input-class="text-right" />
    <div>
      <q-chip v-model:selected="effect.fever" color="indigo-5" text-color="white" icon="">
        حرارة
      </q-chip>
      <q-chip v-model:selected="effect.Pain" color="indigo-5" text-color="white" icon="">
        ألم مكان الحقن
      </q-chip>
      <q-chip v-model:selected="effect.swellingatsiteofinjection" color="indigo-5" text-color="white" icon="">
        انتفاخ مكان الحقن
      </q-chip>
      <q-chip v-model:selected="effect.fatigue" color="indigo-5" text-color="white" icon="">
        ارهاق عام
      </q-chip>
      <q-chip v-model:selected="effect.rash" color="indigo-5" text-color="white" icon="">
        طفح جلدي
      </q-chip>
      <q-chip v-model:selected="effect.musclepain" color="indigo-5" text-color="white" icon="">
        الم بالعضلات
      </q-chip>
      <q-chip v-model:selected="effect.nause" color="indigo-5" text-color="white" icon="">
        غثيان او قئ
      </q-chip>
      <q-chip v-model:selected="effect.diarrhea" color="indigo-5" text-color="white" icon="">
        اسهال
      </q-chip>
      <q-chip v-model:selected="effect.seizure" color="indigo-5" text-color="white" icon="">
        تشنجات عصبية
      </q-chip>
      <q-chip v-model:selected="effect.breathing" color="indigo-5" text-color="white" icon="">
        صعوبة بالتنفس
      </q-chip>
      <q-chip v-model:selected="effect.swollenface" color="indigo-5" text-color="white" icon="">
        انتفاخ بالوجه
      </q-chip>
    </div>
  </div>

  <hr class="full-width q-my-sm">
  <div class="row justify-between items-center full-width reverse">
    <p class="q-mb-xs  text-subtitle1">حده الاعراض</p>
    <q-btn-toggle   v-model="store.sq14" color="indigo-5" toggle-color="yellow-7" toggle-text-color="black"
      :options="[
        { label: 'خطيرة', value: 'خطيره' },
        { label: 'حادة', value: 'حاده' },
        { label: 'متوسطة', value: 'متوسطه' },
        { label: 'بسيطة', value: 'بسيطه' },
      ]" />
  </div>
  <hr class="full-width q-my-sm">
  <div class="row justify-between items-center full-width reverse">
    <p class="q-mb-xs  text-subtitle1">وقت ظهور الاعراض بالساعات</p>
    <q-btn-toggle   v-model="store.sq15" color="indigo-5" toggle-color="yellow-7" toggle-text-color="black"
      :options="[
        { label: '72<', value: 'More than 3 days' },
        { label: '72-24', value: '1-3 days' },
        { label: '24-12', value: '12-24 hours' },
        { label: '12-1', value: '1-12 hours' },
        { label: '1>', value: 'Within minutes' },
      ]" />
  </div>
  <hr class="full-width q-my-sm">
  <div class="row justify-between items-center full-width reverse">
    <p class="q-mb-xs  text-subtitle1">مدة بقاء الاعراض بالأيام</p>
    <q-btn-toggle   v-model="store.sq16" color="indigo-5" toggle-color="yellow-7" toggle-text-color="black"
      :options="[
        { label: '3<', value: 'More Than 3 days' },
        { label: '3-1', value: '1-3 days' },
        { label: '1>', value: 'Less than 1 day' },
      ]" />
  </div>

  <hr class="full-width q-my-sm">
  <div class="row justify-between items-center full-width reverse">
    <p class="q-mb-xs  text-subtitle1">العلاجات</p>
    <q-input type="textarea" class="bg-white text-h6 " style="width: 75%; border-radius: 10px;" filled
      v-model="store.sq17" dense input-class="text-right" />
  </div>
  <hr class="full-width q-my-sm">
  <div class="row justify-between items-center full-width reverse">
    <p class="q-mb-xs  text-subtitle1">هل تم الايواء بالمستشفي</p>
    <q-btn-toggle   v-model="store.sq18" color="indigo-5" toggle-color="yellow-7" toggle-text-color="black"
      :options="[
        { label: 'لا', value: 'لا' },
        { label: 'نعم', value: 'نعم' }
      ]" />
  </div>
  <hr class="full-width q-my-sm">
  <div class="row justify-between items-center full-width reverse">
    <p class="q-mb-xs  text-subtitle1">حالة المريض النهائيه</p>
    <q-btn-toggle outline v-model="store.sq19" color="grey-7" toggle-color="yellow-5" class="text-indigo-8" :options="[
      { label: 'غير معروف', value: 'غير معروف' },
      { label: 'يعاني من بعض الاعراض', value: 'يعاني من بعض الاعراض' },
      { label: 'تعافى بالعلاج', value: 'تعافى بالعلاح' },
      { label: 'تعافى بدون علاج', value: 'تعافى بدون علاج' }

    ]" />
  </div>
  <hr class="full-width q-my-sm">
  <div class="row justify-between items-center full-width reverse">
    <p class="q-mb-xs  text-subtitle1">معلومات اضافيه</p>
    <q-input type="textarea" class="bg-white text-h6 " style="width: 100%; border-radius: 10px;" filled
      v-model="store.sq20" dense input-class="text-right" />
  </div>
  <hr class="full-width q-my-sm">
  <div class="row justify-between items-center full-width reverse">
    <p class="q-mb-xs  text-subtitle1 text-right">أؤكد علي صحة البيانات اعلاه و اوافق علي التواصل معي</p>
    <q-btn-toggle   v-model="store.sq21" color="indigo-5" toggle-color="yellow-7" toggle-text-color="black"
      :options="[
        { label: 'لا', value: 'لا' },
        { label: 'نعم', value: 'نعم' }
      ]" />
  </div>
  <hr class="full-width q-mt-lg">
  <div>
    <h1 class="text-body2">{{ message }}</h1>
    <!-- <q-btn round class="q-mb-md q-mx-md" icon="home" size="lg" color="grey-7" text-color="black"
      @click="store.screen = 'Landing'"></q-btn>
     -->
      <q-btn rounded :loading="sending"  class="q-mb-md" icon-right="outgoing_mail" size="lg" color="white"
      text-color="black" @click="addFeed">
      ارسال
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        انتظر
      </template>
    </q-btn>
  </div>

  <q-dialog v-model="alert" persistent transition-show="flip-down" transition-hide="flip-up">
    <q-date class="q-pt-none text-grey-11 bg-grey-9" v-model="store.sq11" minimal persistent>
      <div class="row items-center justify-end">
        <q-btn v-close-popup label="اغلاق" color="white" flat />
      </div>
    </q-date>
  </q-dialog>

  <q-dialog v-model="alerttime" persistent transition-show="flip-down" transition-hide="flip-up">
    <q-time color="indigo-2" text-color="black" format24h now-btn class="q-pt-none text-grey-11 bg-grey-9"
      v-model="store.sq12">
      <div class="row items-center justify-end">
        <q-btn v-close-popup label="اغلاق" color="white" flat />
      </div>
    </q-time>
  </q-dialog>
</template>
  
<script setup>
import { store } from '../store/store.js'
import { ref, reactive, watch, computed } from 'vue';
import data from '../store/dataCamp.json'


const citySelect = ref(null);
function onCountrySelect() {
  setTimeout(() => {
    citySelect.value.showPopup();
  }, 400);
}

// Corrected computed syntax with an arrow function
const centeroptions = computed(() => {
  return data.filter(item => item.city === store.sq5).map(item => item.center)
})
// Use a Set to get unique city names by cityid
const stringOptions = Array.from(new Set(data.map(item => item.cityid)))
  .map(cityid => data.find(item => item.cityid === cityid).city);

const options = ref(stringOptions)

const options2 = ref([...centeroptions.value]) // Use a separate ref to hold the filtered centers


function filterFn(val, update) {
  if (val === '') {
    update(() => {
      options.value = stringOptions
    })
    return
  }
  update(() => {
    const needle = val.toLowerCase()
    options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
  })
}
// Function to filter center options based on input
function filterFnc(val, update) {
  if (val === '') {
    update(() => {
      options2.value = [...centeroptions.value] // Copy the computed value
    })
    return
  }

  update(() => {
    const needle = val.toLowerCase()
    options2.value = centeroptions.value.filter(v => v.toLowerCase().includes(needle)) // Filter and store in `filteredCenters`
  })
}



const message = ref('')
const ema = ref(false)
const alert = ref(false)
const alerttime = ref(false)
const showtime = ref(false)
let sending = ref(false)
const showdate = ref(false)
const ematime = ref(false)
const show = ref(true)
const effect = reactive({
  fever: false,
  Pain: false,
  swellingatsiteofinjection: false,
  fatigue: false,
  rash: false,
  musclepain: false,
  nause: false,
  diarrhea: false,
  seizure: false,
  breathing: false,
  swollenface: false,
})
// Mapping object for custom symptom descriptions
const symptomDescriptions = {
  fever: 'حراره',
  Pain: 'الم مكان الحقن',
  swellingatsiteofinjection: 'انتفاخ مكان الحقن',
  fatigue: 'ارهاق عام',
  rash: 'طفح جلدي',
  musclepain: 'الم بالعضلات',
  nause: 'غتيان و قئ',
  diarrhea: 'اسهال',
  seizure: 'تشنجات عصبيه',
  breathing: 'صعوبه بالتنفس',
  swollenface: 'انتفاخ بالوجه',
};

function getSideEffects() {
  let side = '';
  let side1 = store.sq13 + ','
  side += side1
  for (const symptom in effect) {
    if (effect[symptom]) {
      // Append the custom description from symptomDescriptions
      side += `${symptomDescriptions[symptom]}, `;
    }
  }

  // Remove the last comma and space, if any
  if (side.length > 0) {
    side = side.slice(0, -2);
  }

  return side;
}

function sideeffect() {
  var side = ''

}


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

const icons = [
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
    message.value = "من فضلك انتظر لحين بداية الحمله لإرسال الإبلاغ و شكرا";
    return;
  }

  sending = true
  message.value = "من فضلك انتظر لحين ارسال الابلاغ و شكرا";

  const { date, time } = getCurrentDateTime();
  const camp = {
    form: 'side',
    date: date,
    time: time,
    q1: store.sq1,
    q2: store.sq2,
    q3: store.sq3,
    q4: store.sq4,
    q5: store.sq5,
    q6: store.sq6,
    q7: store.sq7,
    q8: store.sq8,
    q9: store.sq9,
    q10: store.sq10,
    q11: store.sq11,
    q12: store.sq12,
    q13: getSideEffects(),
    q14: store.sq14,
    q15: store.sq15,
    q16: store.sq16,
    q17: store.sq17,
    q18: store.sq18,
    q19: store.sq19,
    q20: store.sq20,
    q21: store.sq21,
    q22: store.sq22,
    q23: store.sq23,
    q24: store.sq24
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
    sending = false
  } catch (error) {
    // console.error('Error:', error.message);
    // message.value = 'Error: ' + error.message;
    message.value = 'خطاء في الاتصال حاول مجددا'
    sending = false
  }
};
</script>
  
<style scoped>
.q-dialog .q-dialog__inner {
  background-color: #f5f5f5 !important;
  padding: 16px !important;
  width: 200px !important;
}
</style>