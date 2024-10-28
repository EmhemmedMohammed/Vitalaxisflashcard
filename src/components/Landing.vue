<script setup>
import { store } from '../store/store.js'


// Make sure your image is stored in the public folder (e.g., 'public/images/example.jpg')
const imageUrl = '/images/app.jpg'; // Path to the image in public folder


const shareImage = async () => {
  if (navigator.share) {
    try {
      const blob = await fetch(imageUrl).then(res => res.blob());

      const file = new File([blob], 'EpiLyCamp.jpg', {
        type: 'image/jpeg'
      });

      // Using the Web Share API to share the image
      await navigator.share({
        title: 'تطبيق الحملة الوطنيه للتطعيم',
        text: 'https://epilycamp.ncdc.gov.ly',
        files: [file] // Pass the image as a file to share
      });

      console.log('Image shared successfully!');
    } catch (error) {
      console.error('Error sharing image:', error);
    }
  } else {
    alert('المشاركة متاحة فقط على الأجهزة المحمولة');
  }
};

// const imageUrl = '/images/app.jpg';

// const shareImage = async () => {
//   if (navigator.share) {
//     try {
//       const blob = await fetch(imageUrl).then(res => res.blob());
//       const file = new File([blob], 'EpiLyCamp.jpg', { type: 'image/jpeg' });

//       const shareData = {
//         title: 'تطبيق الحملة الوطنيه للتطعيم',
//         text: 'https://epilycamp.ncdc.gov.ly',
//         files: [file]
//       };

//       if (/android/i.test(navigator.userAgent)) {
//         // Android workaround: check if sharing URL alone works better
//         delete shareData.files; // Remove image to share just the text and URL
//       }

//       await navigator.share(shareData);
//       console.log('Image shared successfully!');
//     } catch (error) {
//       console.error('Error sharing image:', error);
//     }
//   } else {
//     alert('المشاركه فقط تعمل علي اجهزه الموبايل');
//   }
// };

</script>

<template>

 <div>

    <h1 class="text-h3 q-mt-md q-mb-xs text-grey-4">ليبيا</h1>
    <h1 class="text-h6 q-mt-sm q-mb-xs text-grey-4">المركز الوطني لمكافحة الأمراض</h1>
    <h1 class="text-h5 q-my-xs q-mb-sm text-indigo-4">ادارة التطعيمات</h1>
    <q-img @click="store.screen='Final'" src="../assets/ncdc.png" spinner-color="white" style="height: 140px; width: 140px" />


    <transition appear enter-active-class="animated slideInLeft">
      <h1 class="text-h3 q-my-xs full-width q-pa-sm rounded-borders">الحملة الوطنية</h1>
    </transition>
    <h1 class="text-h5 q-my-xs text-grey-5">للتطعيم ضد أمراض</h1>
    <h1 class="text-h4 q-mt-lg q-mb-sm text-amber-3">شلل الاطفـال</h1>
    <h1 class="text-h5 q-my-xs q-mb-lg text-amber-3">الحصبة و الحصبة الألمانية</h1>
  </div>
 
  <div v-if="store.countdown">
    <h1 class="text-body2 q-mb-xs q-mt-lg text-grey-5 text-right " style=" width: 300px; margin: auto; ">الزمن المتبقي علي الحملة</h1>
    <div class="row reverse justify-evenly items-center text-h5" style="height: 100px; width: 300px; margin: auto; ">
      <div class="column justify-center bg-indigo-3 q-ml-sm"
        style="width: 90px; height: 89%; border-radius: 10px; border-bottom: 3px solid rgb(246, 247, 246);">
        <div class="text-yellow-3 text-h4">{{ store.days }}</div>
        <div class="text-black">يوم</div>
      </div>
      <div class="column justify-center bg-indigo-4 q-ml-sm"
        style="width: 90px; height: 89%; border-radius: 10px; border-bottom: 3px solid rgb(246, 247, 246);">
        <div class="text-yellow-3 text-h4">{{ store.hours }}</div>
        <div class="text-black">ساعة</div>
      </div>
      <div class="column justify-center bg-indigo-3"
        style="width: 90px; height: 89%; border-radius: 10px; border-bottom: 3px solid rgb(246, 247, 246);">
        <div class="text-yellow-3 text-h4">{{ store.minutes }}</div>
        <div class="text-black ">دقيقة</div>
      </div>
    </div>
    <h1 class="text-h5 q-mt-xs q-mb-xl text-grey-4 text-left q-pr-lg" style="width: 300px; margin: auto; ">2024/11/14-09</h1>
  </div>
  <h1 v-if="store.countdown==false" class="text-h5 q-mt-xs q-mb-xl text-grey-4 text-center full-width">2024/11/14-09</h1>
  

  <div class="full-width" style="margin-top: auto;">

    <div class="full-width row items-center">
      <q-btn round size="lg" class=" q-mt-lg q-mb-sm self-end" color="grey-2" text-color="black" icon="send_to_mobile">
        <q-menu auto-close transition-show="flip-right" transition-hide="flip-left" :offset="[-100, -110]"
          style="border-radius: 10px;  border-right: 1px solid rgb(246, 247, 246); box-shadow: 1px 1px 2px rgb(241, 243, 245) ; background-color: rgba(162, 184, 228, 0.66); ">
          <div class="column justify-center items-center shadow-2 q-pt-lg" >
            <q-img src="../assets/qr.png" spinner-color="white" style="height: 160px; width: 160px; box-shadow: 1px 1px 5px rgb(52, 53, 55); border-radius: 8px;" />
            <q-btn text-color="indigo-9" icon-right="groups" flat size="lg" class=" q-mt-md bg-amber-2"
              @click="shareImage" color="blue-2" label="اضغط للمشاركة" />
          </div>
        </q-menu>
      </q-btn>
      <h1 class="text-body2 self-end q-ml-sm">شارك التطبيق</h1>
    </div>
    <div class="full-width row items-center">
      <q-btn round class="q-mt-xs q-mb-sm self-end " icon="assignment" size="lg" color="blue-2" text-color="black"
        @click="store.screen = 'Feed'"></q-btn>
      <h1 class="text-body2 self-end q-ml-sm">تقييمك للحملة</h1>
    </div>
    <div class="full-width row items-center">
      <q-btn round class="q-mt-xs q-mb-sm self-end " icon="edit_note" size="lg" color="red-6" text-color="black"
        @click="store.screen = 'Side'"></q-btn>
      <h1 class="text-body2 self-end q-ml-sm">الإبلاغ عن الاثار الجانبية</h1>
    </div>


    <transition appear enter-active-class="animated backInUp">
      <div class="q-mt-md row full-width justify-evenly">
        <q-btn rounded size="lg" label="المعلومات" class=" q-mb-md q-mr-sm" color="indigo-3" text-color="black"
          icon="info">
          <q-menu auto-close transition-show="jump-down" transition-hide="jump-up" :offset="[-100, 10]"
            style="border-radius: 10px;  border-right: 1px solid rgb(246, 247, 246); box-shadow: 1px 1px 2px rgb(241, 243, 245);;">
            <div class="column justify-start bg-indigo-1 shadow-2">
              <q-btn text-color="indigo-9" icon-right="diversity_3" flat size="lg" class="q-px-lg full-width"
                @click="store.screen = 'About'" color="blue-2" label="حــول الحمـــــلة" />
                <q-btn text-color="indigo-9" icon-right="phone_iphone" flat size="lg" class="q-px-lg"
                @click="store.screen = 'Us'" color="blue-2" label="حـــول التطبيق" />
                <q-btn text-color="indigo-9" icon-right="download" flat size="lg" class="q-px-lg"
                @click="store.screen = 'Down'" color="blue-2" label="تنزيل التطبيق" />
              </div>
          </q-menu>
        </q-btn>
        <q-btn rounded class="q-mb-md q-px-md" icon-right="apartment" size="lg" color="indigo-1" text-color="black"
          @click="store.screen = 'Center'" label="البلديات" />
      </div>

    </transition>

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
