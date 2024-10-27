<script setup>
import { store } from '../store/store.js'

// Make sure your image is stored in the public folder (e.g., 'public/images/example.jpg')
const imageUrl = '/images/hi.jpg'; // Path to the image in public folder


const shareImage = async () => {
  if (navigator.share) {
    try {
      const blob = await fetch(imageUrl).then(res => res.blob());

      const file = new File([blob], 'image.jpg', {
        type: 'image/jpeg'
      });

      // Using the Web Share API to share the image
      await navigator.share({
        title: 'تطبيق الحملة الوطنيه للتطعيم',
        text: 'نزل التطبيق عبر مسح الكود',
        files: [file] // Pass the image as a file to share
      });

      console.log('Image shared successfully!');
    } catch (error) {
      console.error('Error sharing image:', error);
    }
  } else {
    alert('المشاركه فقط تعمل علي اجهزه الموبايل');
  }
};

</script>

<template>

    <h1 class="text-h3 q-mt-md q-mb-xs text-grey-4">ليبيا</h1>
    <h1 class="text-h6 q-mt-sm q-mb-xs text-grey-4 full-width">المركز الوطني لمكافحة الأمراض</h1>
    <h1 class="text-h5 q-my-xs q-mb-sm text-indigo-4 full-width">ادارة التطعيمات</h1>
    <q-img class="q-mb-lg" src="../assets/ncdc.png" spinner-color="white" style="height: 140px; width: 140px" />


    <!-- <transition appear enter-active-class="animated slideInLeft"> -->
      <h1 class="text-h6 q-my-xs full-width q-pa-sm rounded-borders">
تسر إدارة التطعيمات بأن تتقدم اليكم بخالص الشكر والتقدير لدعمكم الكبير في نجاح حملة التطعيم. لقد كانت مساهمتكم ركيزة أساسية لتحقيق هذا النجاح و بدون تعاونكم لما تمكنّا من الوصول إلى هذه النتيجة الهامة</h1>
    <!-- </transition> -->
    <h1 class="text-body1 q-my-xs full-width q-pa-sm rounded-borders text-indigo-2">
سنبقيكم على اطلاع دائم بأي حملات مستقبلية وتحديثات صحية هامة عبر هذا التطبيق
</h1>
   
<h1 class="text-h6 q-mt-lg q-mb-xs full-width q-pa-sm rounded-borders text-yellow-2">
معًا، نسير نحو مستقبل أكثر أمانًا وصحةً للجميع
</h1>

<div class=" q-mt-md row justify-center items-center no-wrap reverse" style="border-radius: 15px; background-color: rgba(162, 184, 228, 0.4); width: 90%; margin: auto;">
<div class="column">
<h1 class=" text-h5 q-my-xs text-indigo-2 text-center full-width q-pr-lg">مع تحيــــــــات</h1>
<h1 class=" text-h5 q-my-xs text-grey-1 text-center full-width q-pr-lg">إدارة التطعيمــــــــــات</h1>
<h1 class=" text-body1 q-my-xs text-grey-1 text-center full-width q-pr-lg">بالمركز الوطني لمكافحة الأمراض</h1>
<h1 class=" text-h4 q-my-xs text-indigo-1 text-center full-width q-pr-lg">EPI</h1>
</div>
</div>
<h1 class="text-body1 q-mb-xs q-mt-lg text-grey-5 text-center full-width q-pr-lg"> جميع الحقوق محفوظة</h1>
<h1 class="text-h5 q-mb-lg q-mt-xs text-grey-3  text-center full-width q-pr-lg">© 2024 EPI Libya</h1>

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
